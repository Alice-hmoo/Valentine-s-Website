window.addEventListener("load", function() {
    // Play background music on any page
    const music = document.getElementById("bgMusic");
    if(music){
        music.loop = true;
        music.play().catch(e=>console.log("Autoplay blocked. User interaction may be needed."));
    }

   // Fireworks ONLY on page 3
    const fireworksContainer = document.getElementById("fireworks");
    const sound = document.getElementById("fireworksSound");

    if (fireworksContainer && sound) {

        // Play fireworks sound (loop)
        sound.loop = true;
        sound.play().catch(() => {
            console.log("Fireworks sound blocked until user interaction");
        });

        // Start fireworks visuals
        const fireworks = new Fireworks(fireworksContainer, {
            speed: 3,
            acceleration: 1.05,
            friction: 0.96,
            gravity: 1.4,
            particles: 90,
            trace: 3,
            explosion: 5,
            autoresize: true,
            opacity: 0.9,
            lineWidth: 3,
            brightness: { min: 60, max: 90 },
            decay: { min: 0.015, max: 0.03 },
            delay: { min: 15, max: 35 },
            hue: { min: 0, max: 360 },
            rocketsPoint: { min: 40, max: 90 },

            shapes: [
                'circle',
                'star',
                'heart',
                'ring',
                'willow',
                'brocade',
                'peony',
                'bees',
                'pearls',
                'strobe'
            ],

            sound: false
        });

        fireworks.start();
    }
});
