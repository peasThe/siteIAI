// Function to toggle background color and login/signup button color based on scroll position
function toggleScrollEffects() {
    const menu = document.querySelector('.menu');
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');

    if (window.scrollY > 0) {
        menu.classList.add('white-bg'); // Add class to change background color
        loginButton.classList.add('bg-color');
        signupButton.classList.add('bg-color');
    } else {
        menu.classList.remove('white-bg'); // Remove class to revert to transparent background
        loginButton.classList.remove('bg-color');
        signupButton.classList.remove('bg-color');
    }
}

// Function to scroll to a specific position
function scrollToPosition(position) {
    const scrollPosition = position * window.innerHeight; // Calculate scroll position based on viewport height
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Enable smooth scrolling animation
    });
}

// Event listener for scroll event
window.addEventListener('scroll', toggleScrollEffects);


var movingDiv = document.querySelector('.animation');

// Set the initial position and target position
var currentPosition = 0;
var firstElement = document.getElementById('img1');
var firstElementWidth = firstElement.offsetWidth;
var targetPosition = -800-2*firstElementWidth; // Change this to your desired position

// Define the animation function
function animateDiv() {
  // Increment the current position
  currentPosition -= 0.5;
  
  // Move the div
  movingDiv.style.left = currentPosition + 'px';
  
  // Check if the div has reached the target position
  if (currentPosition <= targetPosition) {
    // Reset the position
    currentPosition = 90;
  }
  
  // Call the function again to create animation loop
  requestAnimationFrame(animateDiv);
}

// Start the animation
animateDiv();

document.addEventListener('DOMContentLoaded', function () {
    var infoTiles = document.querySelectorAll('.info-tile');
    var excludedElement = document.getElementById('info-title');
    
    window.addEventListener('scroll', function () {
        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY;
        
        infoTiles.forEach(function(tile) {
            // Check if the current tile is the excluded element
            if (tile !== excludedElement) {
                var tileTop = tile.getBoundingClientRect().top;
                var tileOpacity = 1 - (tileTop / windowHeight);
                var translateY = tileOpacity < 0.5 ? 50 * (1 - tileOpacity * 2) : 0; // Move up by 50px if opacity < 0.5
                tile.style.opacity = Math.max(0, Math.min(1, tileOpacity)); // Ensure opacity stays between 0 and 1
                tile.style.transform = 'translateY(' + translateY + 'px)';
            }
        });
    });
});

function revealA(idName, className) {
    const a = document.getElementById(idName);
    const qa = document.querySelector('.' + className);
    a.classList.toggle('reveal-a');
    let isToggled = a.classList.contains('reveal-a'); // Check if 'reveal-a' class is present
    let totalHeight;
    if(isToggled) {
        totalHeight = qa.clientHeight +  a.clientHeight;
        qa.style.height = totalHeight + 'px';
        isToggled = false;
    } else {
        totalHeight = qa.clientHeight - a.clientHeight;
        qa.style.height = totalHeight + 'px';
        isToggled = true;
    }
}

