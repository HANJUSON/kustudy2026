const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const generateBtn = document.getElementById('generateBtn');
const findBtn = document.getElementById('findBtn');
const pointCountInput = document.getElementById('pointCount');

const bfTimeSpan = document.getElementById('bfTime');
const dcTimeSpan = document.getElementById('dcTime');
const speedupSpan = document.getElementById('speedup');

let points = [];

function drawPoints(highlightPair = null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw all points
    ctx.fillStyle = '#1a73e8';
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
    });

    // Highlight closest pair
    if (highlightPair) {
        const { p1, p2 } = highlightPair;
        
        ctx.strokeStyle = '#d93025';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        ctx.fillStyle = '#d93025';
        [p1, p2].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

generateBtn.addEventListener('click', async () => {
    const n = parseInt(pointCountInput.value);
    if (isNaN(n) || n < 2) {
        alert("Please enter a number >= 2");
        return;
    }

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ n })
        });
        points = await response.json();
        drawPoints();
        
        // Reset stats
        bfTimeSpan.innerText = '-';
        dcTimeSpan.innerText = '-';
        speedupSpan.innerText = '-';
    } catch (error) {
        console.error("Error generating points:", error);
    }
});

findBtn.addEventListener('click', async () => {
    if (points.length < 2) {
        alert("Please generate points first!");
        return;
    }

    try {
        const response = await fetch('/closest-pair', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(points)
        });
        const result = await response.json();
        
        const bfResult = result.brute_force;
        const dcResult = result.divide_and_conquer;

        bfTimeSpan.innerText = (bfResult.time_taken * 1000).toFixed(4);
        dcTimeSpan.innerText = (dcResult.time_taken * 1000).toFixed(4);
        speedupSpan.innerText = result.speedup_ratio.toFixed(2);

        drawPoints({ p1: dcResult.p1, p2: dcResult.p2 });
    } catch (error) {
        console.error("Error finding closest pair:", error);
    }
});

// Initial draw
drawPoints();
