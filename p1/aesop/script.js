let currentIndex = 0;
const images = document.querySelectorAll(".hidden-image");
const redirectUrl = "../index.html"; 

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 150); 
    const y = Math.random() * (window.innerHeight - 150); 
    return { x, y };
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (currentIndex < images.length) {
            const image = images[currentIndex];
            const position = getRandomPosition();
            image.style.left = `${position.x}px`;
            image.style.top = `${position.y}px`;
            image.classList.add("show");
            currentIndex++;
        } else {
            window.location.href = redirectUrl;
        }
    }
});