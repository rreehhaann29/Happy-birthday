
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.petal-container');
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDelay = Math.random() * 10 + "s";
        petal.style.opacity = Math.random();
        container.appendChild(petal);
    }
});
