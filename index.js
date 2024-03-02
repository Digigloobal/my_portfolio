document.addEventListener('DOMContentLoaded', function() {
    var textToDisplay = "I'm a Full Stack Developer";
    var charIndex = 0;
    var speed = 100; // Adjust the speed (in milliseconds) for a faster or slower effect

    function typeWriter() {
        if (charIndex < textToDisplay.length) {
            document.getElementById("typewriter").innerHTML += textToDisplay.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        }
    }

    // Start the typewriter effect when the page loads
    typeWriter();
});

// Select the image by its id or class
var img = document.querySelector('#img2');

// Add event listener for mouseover
img.addEventListener('mouseover', function() {
    this.style.outline = '5px solid blueviolet';
    this.style.outlineOffset = '-20px '; 
    img.style.paddingTop='0px';
});

// Add event listener for mouseout
img.addEventListener('mouseout', function() {
    this.style.outline = '';
    this.style.outlineOffset = '';
});

// var currentYear = new Date().getFullYear();

// // Select the footer element where you want to display the year
// var footer = document.getElementById('footer');

// // Add the current year to the footer
// footer.innerHTML = "Copyright &copy; " + currentYear;
