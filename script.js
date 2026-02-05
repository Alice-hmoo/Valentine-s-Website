// Background music
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}

// Fireworks animation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function fireworks() {
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: Math.random() * 6 - 3,
            vy: Math.random() * 6 - 3,
            alpha: 1
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015;

        ctx.fillStyle = `rgba(255,20,147,${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
}

animate();
