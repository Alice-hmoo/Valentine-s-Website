function startMusic() {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.7;
        music.play().catch(() => {});
    }
}

function startFireworks() {
    const container = document.getElementById("fireworks");
    const sound = document.getElementById("fireworksSound");

    if (!container || !sound) return;

    sound.volume = 0.8;
    sound.play().catch(() => {});

    const fireworks = new Fireworks(container, {
        autoresize: true,
        opacity: 0.9,
        acceleration: 1.05,
        friction: 0.96,
        gravity: 1.4,
        particles: 90,
        trace: 3,
        explosion: 6,
        delay: { min: 15, max: 30 },
        brightness: { min: 60, max: 90 },
        decay: { min: 0.015, max: 0.03 },
        rocketsPoint: { min: 40, max: 90 },
        hue: { min: 0, max: 360 },
        shapes: [
            "circle","star","heart","ring","willow",
            "brocade","peony","bees","pearls","strobe"
        ],
        sound: false
    });

    fireworks.start();
}

function goNext(page) {
    window.location.href = page;
}
