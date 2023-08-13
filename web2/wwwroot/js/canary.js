const textList = ["HEY!", "Everything\nwill be\nalright!", "YOU\nare\nCOOL", "YOU\nare\nTHE BEST!!!", "YOU\nCAN\nEVERYTHING!", "NOTHING\nis\nIMPOSSIBLE!", "Still here?", "Ok\njust to\n let you know\n", "you are the one", "who makes me", "feel better", "I believe in you"];
const textElement = document.getElementById("animatedText");
let currentIndex = 0;

function animateText() {
    textElement.style.transition = "opacity 1s ease-in-out";
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.innerHTML = ""; // Очищаем содержимое
        const lines = textList[currentIndex].split("\n");
        lines.forEach((line, index) => {
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.textContent = line;
            tspan.setAttribute("x", "75%");
            tspan.setAttribute("dy", index === 0 ? "0" : "1.2em");
            textElement.appendChild(tspan);
        });
        setTimeout(() => {
            textElement.style.transition = "opacity 2s ease-in-out"; // Увеличиваем время исчезновения
            textElement.style.opacity = 1;
            setTimeout(() => {
                textElement.style.transition = "opacity 2s ease-in-out"; // Увеличиваем время исчезновения
                textElement.style.opacity = 0;
                currentIndex = (currentIndex + 1) % textList.length;
                setTimeout(animateText, 2000); 
            }, 2000); 
        }, 100); 
    }, 500); 
}
    document.getElementById("pressMe").addEventListener("click", function() {
      const block = document.getElementById("block");
    if (block.style.display === "none") {
        document.getElementById("pressMe").remove();
    block.style.display = "block";
    animateText();
      } else {
        block.style.display = "none";
      }
    });