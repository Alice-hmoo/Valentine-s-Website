// Background music autoplay for all pages
window.addEventListener("load", function() {
    const music = document.getElementById("bgMusic");
    if(music) {
        music.play().catch(e=>console.log("Autoplay blocked, user interaction needed."));
        music.loop = true;
    }

    // Only run fireworks on page 3
    if(document.getElementById("canvas")) {
        fireworksAuto();
    }
});

// Fireworks code (page3 only)
function fireworksAuto() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function addParticles() {
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
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
            ctx.arc(p.x, p.y, 3, 0, Math.PI*2);
            ctx.fill();
            if(p.alpha <= 0) particles.splice(i,1);
        });
        requestAnimationFrame(animate);
    }

    setInterval(addParticles, 500); // Keep adding particles
    animate();
}
