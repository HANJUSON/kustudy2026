# 제목 
    [7주차] 동기화에 대한 이해와 문제 해결
# 활동 일시
    2026.05.10 13:23 ~ 2026.05.10 15:30
# 주차별 학습목표
    동기화가 필요한 이유와 Race Condition을 막기 위한 해결책, 위험 상황과 고전 문제에 대해 이해하기
# 학습내용
    1. 동기화가 필요한 이유
    여러 프로세스가 공유 데이터에 동시에 접근하면 Race Condition이 발생한다. 실행 순서에 따라 결과가 달라지는 현상으로, count = 5인 상태에서 producer가 count++, consumer가 count--를 동시에 실행하면 결과가 4나 6이 될 수 있다 (정답은 5).

    커널에서도 fork() 중 PID 중복 할당, 파일/메모리/프로세스 목록 관리 중에 동일한 문제가 발생한다.

    2. 임계구역 문제 (Critical-Section Problem)
    공유 데이터를 수정하는 코드 영역을 임계구역이라 하며, 올바른 해결책은 3가지 조건을 모두 만족해야 한다.

    상호배제 (Mutual Exclusion) — 한 번에 하나의 프로세스만 임계구역에 진입
    진행 (Progress) — 임계구역이 비어있으면 진입할 프로세스를 무한정 미룰 수 없음
    한계대기 (Bounded Waiting) — 요청 후 다른 프로세스가 먼저 진입할 수 있는 횟수에 상한이 존재
    선점형(Preemptive) 커널은 응답성이 좋지만 race condition 설계에 주의가 필요하고, 비선점형(Nonpreemptive) 커널은 race condition을 원천적으로 피하지만 응답성이 낮다.

    3. Peterson's Solution
    2개 프로세스를 위한 소프트웨어 해결책으로, 공유 변수 turn과 flag[2]를 사용한다.

    flag[i] = true -> 진입 의사 표시

    turn = j -> 상대방에게 양보

    flag[j] && turn == j 이면 대기

    상호배제, 진행, 한계대기 3가지 조건을 모두 만족하지만, 현대 CPU/컴파일러는 명령어를 재정렬할 수 있어 실제로는 동작을 보장하지 못한다. 해결책으로 Memory Barrier를 삽입해 순서를 강제한다.

    4. 하드웨어 지원
    Memory Barrier — 장벽 이전의 메모리 연산이 모두 완료된 후 이후 연산이 실행되도록 강제하는 명령어. 주로 커널 개발자가 사용한다.

    test_and_set — 값을 읽고 true로 설정하는 연산을 원자적으로 수행. 이를 이용해 lock이 flase일 때만 임계구역에 진입할 수 있다.

    compare_and_swap (CAS) — 기댓값과 현재 값이 같을 때만 새 값으로 교체하는 원자적 연산. 인텔 x86의 lock cmpxchg명령어로 구현된다. 기본 CAS는 한계대기를 보장하지 않으므로, waiting[]배열을 추가해 순환 방식으로 다음 진입자를 선택하는 알고리즘을 사용한다.

    Atomic Variables — CAS 기반의 고수준 도구로 단일 변수에 대한 race condition을 방지한다. 단, 복합 연산(bounded-buffer 등)에는 mutex나 semaphore가 필요하다.

    5. Mutex Lock
    가장 단순한 동기화 도구로 acquire()와 release()를 쌍으로 사용한다. 두 연산은 CAS 기반으로 원자적으로 실행된다.

    Spinlock — 잠금을 얻을 때까지 루프를 돌며 대기하는 mutex. 문맥 교환 오버헤드가 없다는 장점이 있지만 CPU 사이클을 낭비한다는 단점이 있다. 락 점유 시간이 문맥 교환 2회보다 짧을 때 사용하면 효율적이며, 멀티코어 시스템에 특히 유용하다.

    6. Semaphore
    정수 변수 S에 두 가지 원자적 연산만 허용한다 (Dijkstra 제안).

    wait(S) — S가 0 이하면 대기, 0 초과면 S를 1 감소
    signal(S) — S를 1 증가
    Counting Semaphore — 자원이 N개일 때 S를 N으로 초기화. S가 0이 되면 이후 요청은 모두 대기한다.

    Binary Semaphore — 값이 0 또는 1만 가능하며 mutex lock과 유사하게 동작한다.

    실행 순서 제어 — synch = 0으로 초기화하면 P2의 S2가 반드시 P1의 S1 이후에 실행됨을 보장할 수 있다.

    바쁜 대기(Busy Waiting) 제거 — 대기 큐를 도입해 S가 음수가 되면 프로세스를 sleep()처리하고, signal() 시 큐에서 하나를 wakeup()한다. S의 절댓값이 현재 대기 중인 프로세스 수를 나타낸다.

    단일 프로세서에서는 인터럽트 금지로 원자성을 보장하고, 멀티프로세서에서는 CAS나 spinlock을 사용한다.

    7. Monitor
    Semaphore의 잘못된 사용(순서 역전, 중복 wait, 누락 등)은 디버그하기 매우 어려운 타이밍 오류를 유발한다. 이를 해결하기 위한 고수준 언어 구조물이 Monitor다.

    내부 함수에 자동으로 상호배제를 제공하며, 한 번에 하나의 프로세스만 모니터 내에서 활성 상태가 된다. 내부 변수는 내부 함수를 통해서만 접근 가능하다.

    조건 변수 (Condition Variable) — monitor만으로는 부족한 동기화를 위해 도입한다.

    x.wait() - 호출 프로세스를 일시 중단
    x.signal() - 대기중인 프로세스 하나를 재개, 대기자가 없으면 아무 효과 없음(semaphore의 signal과 다름)
    signal 후 처리 방식은 두 가지다. Signal and wait는 신호를 보낸 프로세스(P)가 대기하고 깨어난 프로세스(Q)가 실행되는 방식이고, Signal and continue는 P가 계속 실행되고 Q는 P가 나간 후 실행된다.

    Semaphore로 Monitor를 구현할 때는 mutex, next, next_count변수를 활용한다.

    8. Liveness — 교착상태와 우선순위 역전
    Deadlock — 두 프로세스가 서로 상대방의 signal만을 기다리는 상태. P0가 S를, P1이 Q를 가진 채로 서로의 자원을 기다리면 영원히 대기한다. 자세한 내용은 Ch 8에서 다룬다.

    Priority Inversion — 낮은 우선순위 프로세스(L)가 semaphore를 점유한 상태에서, 중간 우선순위 프로세스(M)가 L을 선점하면 높은 우선순위 프로세스(H)가 M 때문에 간접적으로 지연되는 현상. 1997년 화성 탐사선 Pathfinder에서 실제로 발생해 시스템이 반복 재시작된 사례가 있다.

    해결책은 Priority Inheritance Protocol로, L의 우선순위를 H 수준으로 일시 상승시켜 M이 L을 선점하지 못하게 한다. L이 락을 해제하면 원래 우선순위로 복귀한다.

    9. 동기화 고전 문제 3가지
    Bounded-Buffer Problem (생산자-소비자)
    크기 N의 버퍼를 공유하며 mutex = 1, empty = N, full = 0으로 초기화한다. 핵심 주의사항: wait 호출 순서가 중요하며, counting semaphore를 먼저 wait하고 그 다음 mutex를 wait해야 한다. 반대로 하면 버퍼가 꽉 찼을 때 deadlock이 발생한다.

    Readers-Writers Problem
    여러 reader는 동시 접근 가능하지만 writer는 단독 접근이 필요하다.

    First Problem (readers 우선) — writer 기아(starvation) 가능
    Second Problem (writers 우선) — reader 기아 가능
    Reader-Writer Lock은 읽기 모드(공유)와 쓰기 모드(배타)를 구분한다. POSIX의 pthread_rwlock_t, Java의 ReentrantReadWriteLock 등이 이를 구현한다.

    Dining-Philosophers Problem (식사하는 철학자)
    5명의 철학자가 원형 테이블에서 양쪽 젓가락을 모두 집어야 식사할 수 있는 문제로, deadlock-free하면서 starvation-free한 자원 할당의 고전적 난제다.

    단순 semaphore 해결책(각 젓가락을 semaphore로)은 모두가 동시에 왼쪽 젓가락을 집으면 deadlock이 발생한다.

    해결 방법 3가지는 다음과 같다.

    동시에 앉을 수 있는 철학자를 4명으로 제한
    양쪽이 모두 사용 가능할 때만 집기 (monitor 해결책)
    비대칭 방식: 홀수 철학자는 왼쪽 먼저, 짝수는 오른쪽 먼저
    Monitor 해결책은 THINKING / HUNGRY / EATING 상태와 조건 변수 배열을 사용해 deadlock을 완전히 방지하지만 starvation은 여전히 가능하다.

    10. OS별 동기화 구현
    Windows — 단일 프로세서는 인터럽트 마스킹, 멀티프로세서는 spinlock 사용. 커널 외부에서는 Mutex, Semaphore, Event, Timer 등의 Dispatcher Object를 사용하며, 사용자 모드에서는 Critical-Section Object가 커널 개입 없이 동작해 효율적이다.

    Linux — 2.6 이후 완전한 선점형 커널. atomic_t(단순 카운터), spinlock_t(짧은 CS), mutex(긴 CS, 슬립 기반), semaphore(카운팅) 등을 상황에 맞게 사용하며, spinlock과 mutex는 비재귀적이다.

    POSIX — pthread_mutex_t, sem_t,  pthread_cond_t를 제공한다. 조건 변수는 C에 monitor가 없어 mutex와 함께 사용하며, pthread_cond_wait()은 mutex를 자동 해제하고 대기한다. 조건 검사는 spurious wakeup 방지를 위해 반드시 while루프로 감싸야 한다.

    11. Java 동기화
    synchronized 키워드로 monitor 수준의 상호배제를 제공한다. 모든 Java 객체는 lock, entry set, wait set을 가진다. wait()은 lock 해제 + 스레드 블록, notify()는 wait set에서 임의의 스레드를 entry set으로 이동, notifyAll()은 전체를 이동시킨다.

    ReentrantLock — synchronized보다 유연하며 공정성(fairness) 파라미터를 지원한다. 같은 스레드가 이미 lock을 가진 상태에서 다시 lock을 획득할 수 있다(재진입 가능). 반드시 finally블록에서 unlock()을 호출해야 한다.

    Condition Variable — lock.newCondition()으로 이름 있는 조건 변수를 생성해 특정 조건만을 대상으로 await()와 signal()을 호출할 수 있다. semaphore의 acquire()/release()도 지원한다.
# 상세활동 내용
    핵심 요약
    왜 동기화가 필요한가? 여러 프로세스가 공유 데이터에 동시 접근하면 실행 순서에 따라 결과가 달라지는 Race Condition이 발생한다. 이를 막으려면 임계구역을 보호해야 하며, 해결책은 상호배제·진행·한계대기 3가지 조건을 만족해야 한다.

    해결 도구 3계층

    저수준인 하드웨어 명령어로는 test_and_set과 compare_and_swap(CAS)이 있으며, 이 둘은 원자적으로 실행되어 다른 모든 동기화 도구의 기반이 된다. Peterson's Solution은 소프트웨어적 해법이지만 현대 CPU의 명령어 재정렬로 인해 실제로는 신뢰할 수 없다.

    중간 수준으로는 Mutex Lock과 Semaphore가 있다. Mutex는 잠금/해제의 단순한 구조이고, Semaphore는 정수 값을 이용해 자원 개수 관리나 실행 순서 제어까지 가능하다. 둘 다 잘못 사용하면 deadlock이 생기기 쉽다.

    고수준으로는 Monitor가 있으며, 상호배제를 자동으로 제공해 개발자가 직접 lock을 다룰 필요가 없다. 조건 변수의 wait()/signal()로 세밀한 순서 제어도 가능하다.

    반드시 알아야 할 위험 상황 2가지

    Deadlock은 두 프로세스가 서로의 자원을 기다리며 영원히 멈추는 상태고, Priority Inversion은 낮은 우선순위 프로세스가 락을 쥔 채로 높은 우선순위 프로세스를 간접적으로 막는 현상이다. 후자는 Priority Inheritance로 해결한다.

    고전 문제 3가지

    Bounded-Buffer는 생산자-소비자 간 버퍼 공유 문제, Readers-Writers는 동시 읽기는 허용하되 쓰기는 단독 접근이 필요한 문제, Dining-Philosophers는 deadlock 없이 여러 자원을 여러 프로세스에 할당하는 문제다.