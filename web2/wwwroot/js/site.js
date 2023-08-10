document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById("backgroundCanvas"),
        ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = '01010101010101010101010101010101';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 24,
        columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < drops.length; i++) {
            var text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = 'rgba(255, 0, 221, 0.9)';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            var text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = 'rgba(255, 0, 221, 0.9)';

            // Calculate a random x position for each letter
            var x = Math.floor(Math.random() * canvas.width);

            // Calculate the y position of the letter based on the drop count (drops[i])
            var y = drops[i] * fontSize;

            ctx.fillText(text, x, y);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                drops[i] = 0;
            }
        }


    }

    // Loop the animation
    setInterval(draw, 33);
});
