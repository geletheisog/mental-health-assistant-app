const bird = document.getElementById('bird');
const obstaclesContainer = document.getElementById('obstacles');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const playAgainButton = document.getElementById('play-again');
let birdPosition = 100; // Initial position of the bird
let score = 0;
let isGameOver = false;
let obstacleInterval; // To store the obstacle interval ID
const gravity = 3; // Gravity that pulls the bird down
const jumpStrength = 50; // How high the bird moves on tap or swipe
const gap = 150; // Gap size between obstacles

// Control the bird using keyboard (for desktop play)
document.addEventListener('keydown', (event) => {
    if (!isGameOver) {
        if (event.key === 'ArrowUp') {
            birdPosition -= jumpStrength; // Move up on "up arrow"
            if (birdPosition < 0) birdPosition = 0; // Prevent flying off the top
        }
        bird.style.top = birdPosition + 'px'; // Update the bird's position
    }
});

// Control the bird using touch (for mobile play)
document.addEventListener('touchstart', () => {
    if (!isGameOver) {
        birdPosition -= jumpStrength; // Move up on screen tap
        if (birdPosition < 0) birdPosition = 0; // Prevent flying off the top
        bird.style.top = birdPosition + 'px'; // Update bird position
    }
});

// Gravity: Pull the bird down continuously
function applyGravity() {
    if (!isGameOver) {
        birdPosition += gravity; // Bird falls down by the gravity value
        if (birdPosition > window.innerHeight - 50) {
            birdPosition = window.innerHeight - 50; // Prevent bird from falling below screen
        }
        bird.style.top = birdPosition + 'px'; // Update bird position
    }
}

// Call the gravity function every 20ms
setInterval(applyGravity, 20);

// Create obstacles
function createObstacle() {
    // Randomly set the height for the top obstacle
    const topHeight = Math.random() * (window.innerHeight - gap - 100) + 50; // Avoids hitting the top and leaves space for the gap
    const bottomHeight = window.innerHeight - topHeight - gap; // Set height of the bottom obstacle based on the gap

    // Create the top obstacle
    const topObstacle = document.createElement('div');
    topObstacle.classList.add('obstacle');
    topObstacle.style.left = '100%'; // Start position on the right
    topObstacle.style.height = topHeight + 'px'; // Set the height of the top obstacle
    topObstacle.style.top = '0'; // Position at the top of the screen
    obstaclesContainer.appendChild(topObstacle); // Add the top obstacle to the container

    // Create the bottom obstacle
    const bottomObstacle = document.createElement('div');
    bottomObstacle.classList.add('obstacle');
    bottomObstacle.style.left = '100%'; // Start position on the right
    bottomObstacle.style.height = bottomHeight + 'px'; // Set the height of the bottom obstacle
    bottomObstacle.style.bottom = '0'; // Position it at the bottom of the screen
    obstaclesContainer.appendChild(bottomObstacle); // Add the bottom obstacle to the container

    // Move the obstacles
    const obstacleMovement = setInterval(() => {
        let topObstacleLeft = parseInt(window.getComputedStyle(topObstacle).getPropertyValue('left'));
        let bottomObstacleLeft = parseInt(window.getComputedStyle(bottomObstacle).getPropertyValue('left'));

        // Check if the obstacles are off-screen
        if (topObstacleLeft < -30 && bottomObstacleLeft < -30) {
            clearInterval(obstacleMovement);
            obstaclesContainer.removeChild(topObstacle);
            obstaclesContainer.removeChild(bottomObstacle);
            score += 2; // Increment score for avoiding both obstacles
            scoreDisplay.textContent = score; // Update score display
        } else {
            // Collision detection
            const birdHeight = 50; // Bird's height
            const birdBottomPosition = birdPosition + birdHeight; // Calculate bird's bottom position

            // Check collision with top obstacle
            if (topObstacleLeft < 70 && birdPosition < topHeight) {
                clearInterval(obstacleMovement);
                endGame();
            }

            // Check collision with bottom obstacle
            if (bottomObstacleLeft < 70 && birdBottomPosition > (window.innerHeight - bottomHeight)) {
                clearInterval(obstacleMovement);
                endGame();
            }

            topObstacle.style.left = topObstacleLeft - 5 + 'px'; // Move top obstacle left
            bottomObstacle.style.left = bottomObstacleLeft - 5 + 'px'; // Move bottom obstacle left
        }
    }, 20);
}

// End the game
function endGame() {
    isGameOver = true;
    showMessage('Game Over! Your score: ' + score);
    playAgainButton.style.display = 'block'; // Show the Play Again button
    clearInterval(obstacleInterval); // Stop creating new obstacles
}

// Function to display game over message
function showMessage(message) {
    messageDisplay.textContent = message; // Set the message text
    messageDisplay.style.display = 'block'; // Show the message
}

// Function to reset the game
function resetGame() {
    birdPosition = 100; // Reset bird position
    score = 0; // Reset score
    isGameOver = false; // Reset game over status
    scoreDisplay.textContent = score; // Update score display
    messageDisplay.style.display = 'none'; // Hide message
    playAgainButton.style.display = 'none'; // Hide Play Again button
    obstaclesContainer.innerHTML = ''; // Clear obstacles
    bird.style.top = birdPosition + 'px'; // Reset bird position
    startGame(); // Start the game again
}

// Start the game loop
function startGame() {
    obstacleInterval = setInterval(() => {
        if (!isGameOver) {
            createObstacle(); // Create a new obstacle every 2 seconds
        }
    }, 2000);
}

// Event listener for the Play Again button
playAgainButton.addEventListener('click', resetGame);

// Start the game for the first time
startGame();