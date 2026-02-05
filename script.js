window.addEventListener("load", function() {
    // Play background music on any page
    const music = document.getElementById("bgMusic");
    if(music){
        music.loop = true;
        music.play().catch(e=>console.log("Autoplay blocked. User interaction may be needed."));
    }

    // Fireworks on page3 only
    const canvas = document.getElementById("fireworks-canvas");
    const sound = document.getElementById("fireworksSound");
    if(canvas && sound){
        sound.play().catch(e=>console.log("Autoplay blocked. User interaction may be needed."));
        startFireworks(canvas);
    }
});

function startFireworks(container){
    const fireworks = new Fireworks(container, {
        speed: 3,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        particles: 80,
        trace: 3,
        explosion: 5,
        autoresize: true,
        opacity: 0.8,
        lineWidth: 3,
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        delay: { min: 10, max: 30 },
        hue: { min: 0, max: 360 },
        rocketsPoint: { min: 50, max: 90 },
        shapes: ['circle','star','heart','ring','willow','brocade','peony','bees','pearls','strobe'],
        sound: false
    });
    fireworks.start();
}
