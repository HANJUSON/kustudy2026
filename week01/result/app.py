
#python -m uvicorn app:app --reload


from fastapi import FastAPI, Body
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import random
import math
import time
from typing import List, Tuple

import os

app = FastAPI()

# Get the directory where app.py is located
base_dir = os.path.dirname(os.path.abspath(__file__))
static_dir = os.path.join(base_dir, "static")

# Serve static files
app.mount("/static", StaticFiles(directory=static_dir), name="static")

class Point(BaseModel):
    x: float
    y: float

class Result(BaseModel):
    p1: Point
    p2: Point
    dist: float
    time_taken: float

def distance(p1: Point, p2: Point) -> float:
    return math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2)

# Brute Force O(n^2)
def brute_force(points: List[Point]) -> Tuple[Point, Point, float]:
    min_dist = float('inf')
    closest_pair = (None, None)
    n = len(points)
    for i in range(n):
        for j in range(i + 1, n):
            d = distance(points[i], points[j])
            if d < min_dist:
                min_dist = d
                closest_pair = (points[i], points[j])
    return closest_pair[0], closest_pair[1], min_dist

# Divide & Conquer O(n log^2 n)
def closest_pair_dc_recursive(points_x: List[Point]) -> Tuple[Point, Point, float]:
    n = len(points_x)
    if n <= 3:
        return brute_force(points_x)

    mid = n // 2
    mid_point = points_x[mid]

    p1_l, p2_l, d_l = closest_pair_dc_recursive(points_x[:mid])
    p1_r, p2_r, d_r = closest_pair_dc_recursive(points_x[mid:])

    if d_l < d_r:
        d = d_l
        closest_pair = (p1_l, p2_l)
    else:
        d = d_r
        closest_pair = (p1_r, p2_r)

    # Strip check
    strip = [p for p in points_x if abs(p.x - mid_point.x) < d]
    strip.sort(key=lambda p: p.y)  # Sorting by y for strip

    for i in range(len(strip)):
        for j in range(i + 1, len(strip)):
            if (strip[j].y - strip[i].y) >= d:
                break
            d_strip = distance(strip[i], strip[j])
            if d_strip < d:
                d = d_strip
                closest_pair = (strip[i], strip[j])

    return closest_pair[0], closest_pair[1], d

@app.get("/")
async def read_index():
    return FileResponse(os.path.join(static_dir, "index.html"))

@app.post("/generate")
async def generate_points(n: int = Body(..., embed=True)):
    points = [{"x": random.uniform(50, 750), "y": random.uniform(50, 550)} for _ in range(n)]
    return points

@app.post("/closest-pair")
async def find_closest_pair(points: List[Point]):
    # Brute Force
    start_time = time.perf_counter()
    bf_p1, bf_p2, bf_dist = brute_force(points)
    bf_time = time.perf_counter() - start_time

    # Divide & Conquer
    start_time = time.perf_counter()
    points_sorted_x = sorted(points, key=lambda p: p.x)
    dc_p1, dc_p2, dc_dist = closest_pair_dc_recursive(points_sorted_x)
    dc_time = time.perf_counter() - start_time

    return {
        "brute_force": {
            "p1": bf_p1,
            "p2": bf_p2,
            "dist": bf_dist,
            "time_taken": bf_time
        },
        "divide_and_conquer": {
            "p1": dc_p1,
            "p2": dc_p2,
            "dist": dc_dist,
            "time_taken": dc_time
        },
        "speedup_ratio": bf_time / dc_time if dc_time > 0 else 1.0
    }
