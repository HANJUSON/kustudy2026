본 자료는 kus-tudy 모임의 12주차 활동 보고서이다.

# 제목 
    [12주차] xv6 기반 LLM을 위한 멀티에이전트 OS 개발

# 활동 일시
    2026.06.14 00:00 ~ 2026.06.14 00:00

# 주차별 학습목표
    운영체제 수업의 최종 프로젝트로 직접 구현한 "xv6 기반 LLM을 위한 멀티에이전트 OS"(parser→classifier→root-cause→fix-suggester→evaluator 5개 에이전트를 xv6 사용자 프로세스로 띄우고, 모든 오케스트레이션을 직접 수정한 xv6 커널 안에서 수행)의 최종 결과물을 함께 리뷰하며, 핵심 OS 개념과 Pattern A 검증·롤백 verifier, Pattern B 커널 시맨틱 캐시, 프로세스별 메모리 쿼터를 신규 시스템 콜(22–33)로 어떻게 직접 구현했는지 정리하고, 동시에 proxy_lock 직렬화·정적 5단계 DAG·라운드로빈 편향 등 설계상 한계와 보완할점을 코드 근거에 기반해 토의한다.

# 학습내용
    1. 프로세스 관리(process management)에서 struct proc에 agent_role/priority/agent_state와 mem_quota/quota_denied 필드를 확장하고 allocproc 기본값 설정, kfork의 부모→자식 상속, freeproc의 슬롯 정리로 PCB 메타데이터의 생명주기를 직접 구현해 재사용된 proc 슬롯이 이전 점유자의 메타데이터를 누출하지 않게 하는 방법을 학습했다.

    2. 우선순위 스케줄러(priority scheduler)가 scheduler()의 2-패스 구조(max_prio 탐색 후 동일 우선순위의 첫 RUNNABLE 실행)와 멀티코어 fallback으로 strict priority를 구현하고, priority=0이면 원본 라운드로빈(Round Robin)으로 환원된다는 점을 코드로 확인했다.

    3. 시스템 콜(system call) 추가의 전체 절차를 syscall.h의 번호표(22–33), syscall.c의 디스패치 테이블·extern 선언, usys.pl·user.h의 사용자 스텁이 일관되게 12개 신규 syscall을 배선하는 과정으로 파악했고, a7 레지스터로 번호를 전달하고 a0로 반환하는 trap 기반 권한 전환을 학습했다.

    4. 메모리 관리와 자원 제어(memory quota)에서 growproc()이 PGROUNDUP(sz+n)/PGSIZE 페이지 수를 mem_quota와 비교해 한도 초과 시 uvmalloc 호출 전에 거부(-1)하고 quota_denied를 증가시키며, setquota(33)로 설정한 상한을 fork가 상속하는 per-process 힙 상한 메커니즘을 학습했다.

    5. 동기화(synchronization)에서 세마포어 대신 슬립락(sleeplock)을 사용해 proxy_lock으로 proxy_call의 send+recv 왕복을 직렬화하고 cons_write_lock으로 사용자 write 단위의 원자성을 보장하며, 슬립락이 스핀락(spinlock) 위에 계층화되어 대기 시 busy-wait가 아닌 sleep()으로 블로킹한다는 차이를 파악했다.

    6. 커널 중재(arbitration)와 권한 역전 원칙을 verify_fix가 정수 전용·proc[] 비접근 순수 함수로서 보호 프로세스 규칙(init/sh/evaluator에 대한 파괴적 행위 거부)과 화이트리스트({REPORT,ANNOTATE,REQUEUE})를 커널에서 강제해 사용자 공간(LLM) 휴리스틱이 우회할 수 없게 만드는 설계로 학습했다.

    7. 체크포인트/롤백(checkpoint·rollback)을 통한 실패 복구를 checkpoint(28)/restore(29)가 spinlock으로 보호된 pid 태깅 슬롯에 마지막 정상 상태를 저장·복원하고, evaluator가 MAX_RETRIES=3의 유계 재시도(bounded retry) 안에서 판정 코드에 따라 결함 필드만 교정하는 verdict-driven 수렴으로 라이브락을 막는 방식을 학습했다.

    8. 캐싱(caching)에서 64-슬롯 RAM 테이블과 /cache.bin 디스크 오버레이로 구성된 2계층 계층형 캐시를 구현하고, FNV-1a 64비트 해시로 (role|prompt)를 키화하며 MinHash double-hashing으로 Jaccard 유사도를 정수 연산만으로 추정하는 LSH(locality-sensitive hashing) 응용을 학습했다.

    9. 파일시스템 쓰기와 저널링(file system journaling)에서 cache_set이 inode API의 writei로 /cache.bin에 고정크기(344바이트) 레코드를 begin_op()/end_op() 로그 트랜잭션 안에서 append해 crash-consistency를 보장하고, 커널이 user 플래그 0으로 커널-공간 직접 I/O를 수행하는 경로를 파악했다.

    10. IPC와 프로세스 격리에서 5단계 에이전트 체인이 정확히 4개의 xv6 pipe(2)와 fork/dup/close 표준 관용구로 연결되어 상류가 writer를 닫으면 EOF가 하류로 전파되고, 각 단계가 독립 page table을 가진 별도 proc이라 메모리를 공유하지 않으며 데이터가 오직 파이프 바이트로만 흐른다는 점을 확인했다.

# 상세활동 내용
    프로젝트 결과물 : https://github.com/HANJUSON/Liberal_OS

    1. proc.c와 proc.h를 함께 검토하여 struct proc에 추가한 agent_role[16]/priority/agent_state/mem_quota/quota_denied 필드가 allocproc(agent_role="none", 나머지 0), kfork(상속하되 quota_denied는 0으로 리셋), freeproc(슬롯 스크럽)에서 어떻게 생명주기를 갖는지 코드로 추적하고, procfields.c 스모크로 struct 확장 후에도 fork+pipe 의미가 유지됨을 확인했다.

    2. proc.c의 scheduler()를 읽으며 2-패스(max_prio 탐색 후 동일 우선순위 첫 RUNNABLE 실행)와 멀티코어 fallback(다른 코어가 선점한 경우 임의 RUNNABLE 실행으로 wfi 회피) 구조를 분석하고, priotest.c가 6개의 CPU-bound 자식을 fork해 setprio(26)로 우선순위를 부여한 뒤 완료 순서를 출력하는 방식으로 우선순위 존중을 검증함을 확인했다.

    3. sysproc.c의 growproc 쿼터 분기와 quotatest.c를 함께 분석하여 setquota(33)로 cur_pages+4를 설정한 뒤 sbrk(+2)는 성공, sbrk(+8)은 (char*)-1로 거부, setquota(0) 후 sbrk(+8)은 다시 성공함을 단언하는 end-to-end 검증으로 per-process 메모리 쿼터가 동작함을 확인했다.

    4. verifier.c/.h의 verify_fix가 정수 전용·proc[] 비접근 순수 함수임을 grep으로 확인하고, 필드 무결성→수치 범위(severity∈[0,3])→보호 프로세스 규칙→화이트리스트 순으로 4개 불변식을 short-circuit 검사하며, sys_verifyfix(27)가 fill_snapshot으로 proc[]를 시스템 콜 계층에서 해석해 사용자가 target 이름을 위조해도 보호를 우회할 수 없음을 파악했다.

    5. evaluator.c의 retry 루프를 분석하여 검증 실패 시 EVAL_VERIFY_FAIL→restore(&base)→EVAL_ROLLBACK→amend_from_verdict→EVAL_RETRY 토큰 시퀀스를 거쳐 판정 코드별로 결함 필드만 교정하고, 통과 시 checkpoint(28)로 수락된 제안을 저장하는 verdict-driven 수렴을 확인했으며, verifiertest.c가 다섯 판정과 체크포인트 라운드트립을 모두 단언함을 검토했다.

    6. cache.c/.h를 검토하여 64-슬롯 RAM 테이블(CACHE_NSLOT=64)과 /cache.bin 디스크 오버레이로 구성된 2계층 캐시, FNV-1a 키화와 MinHash(CACHE_SIG_K=16) 의미 매치를 확인하고, proxy_client.h의 proxy_call이 proxylock 이전에 cacheget(30)을 먼저 호출해 hit 시 PROXY_REQ를 전혀 보내지 않고 호스트 라운드트립 자체를 건너뜀을 파악했다.

    7. triage.c가 정확히 4개의 pipe(2)로 5단계를 연결하고 spawn_stage의 fork/dup/close로 각 단계의 stdin/stdout을 이웃 파이프에 재배선한 뒤 wait(0)를 5회 호출해 자식을 회수하는 오케스트레이션과, proxy_client.h의 탭 구분·개행 종료 프레임(PROXY_REQ\t<pid>\t<role>\t<prompt>\n)이 pid를 demux 키로 쓰는 라인 프레이밍 프로토콜을 분석했다.

    8. host/proxy_daemon.py를 검토하여 xv6에 네트워크 스택이 없어 호스트만 api.upstage.ai를 호출하는 host/guest split과 mock(순수 echo)/live/replay 세 모드, QEMU -nographic로 직렬 콘솔 UART를 호스트 stdin/stdout에 연결하는 전송 방식, tests/regression.sh가 autotest·verifier·cache 게이트를 순차 검증하는 회귀 파이프라인을 파악했다.

    9. (보완할점) 캐시 미스 경로에서는 단일 proxy_lock 슬립락이 proxy_call의 send+recv 왕복을 직렬화해 5개 에이전트의 호스트 라운드트립이 진짜 병렬로 돌 수 없고, 오케스트레이션이 정적 5단계 DAG로 고정되어 입력에 따라 단계를 재구성하지 못하는 한계를 확인했다. report.py가 명시한 request-id multiplexing이나 에이전트별 호스트 채널을 도입해야 분석 모델의 speedup 상한을 끌어올릴 수 있음을 토의했다.

    10. (보완할점) scheduler()의 pass2/fallback이 항상 proc[0]부터 스캔해 동일 우선순위에서 낮은 pid에 편향되며 회전 커서 기반 진짜 라운드로빈과 우선순위 에이징(aging)이 없어 기아(starvation)가 가능하고, checkpoint/restore가 전역 단일 슬롯(CKPT_MAX=256, owner 1개)이라 여러 에이전트가 동시에 체크포인트를 쓰면 마지막 writer가 이전 상태를 덮어쓰는 확장성 한계를 코드 근거로 파악했다. 또한 priotest의 완료 순서 측정이 uptime() tick 단위라 분해능이 거칠어 미세한 스케줄링 차이를 잡지 못함을 확인했다.

    11. (보완할점) 자동 게이트(regression/bench)가 전부 mock이고 live 모드는 UPSTAGE_API_KEY가 필요한 human-supervised 경로로 남아 있어 실제 모델 품질 회귀를 CI에서 잡지 못하며, 순차 baseline 대비 fault-isolation 테스트가 아직 보류(deferred) 상태이고 BENCH_N=5 MODE=live 병렬 e2e 벤치가 미실행임을 확인해, live 안정화와 결정적 순차/격리 테스트 보강을 향후 과제로 토의했다.

# 소감
    LLM 호출을 단순히 파이썬 라이브러리로 감싸는 대신 프로세스·스케줄러·시스템 콜·동기화를 xv6 커널 안에 직접 구현했다는 점에서, 수업에서 배운 OS 개념이 실제 동작하는 시스템으로 연결되는 경험을 했다.
    특히 "LLM은 제안하고 커널이 최종 결정한다"는 Pattern A의 검증·롤백 구조가 인상적이었고, 운영체제가 신뢰할 수 없는 상위 계층을 강제하는 안전 경계가 될 수 있음을 체감했다.
    동시에 proxy_lock 직렬화로 진짜 병렬 호출이 막히는 등 명확한 한계를 코드 근거로 확인하며, 구현만큼이나 트레이드오프를 정직하게 기록하고 보완점을 토의하는 일이 중요함을 배웠다.
