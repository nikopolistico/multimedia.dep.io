// Introduction ! Section
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const icon = document.getElementById('icon').querySelector('img'); // Select the img inside the span

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        icon.src = "./icons/pause.gif"; // Change to pause icon
    } else {
        audioPlayer.pause();
        icon.src = "./icons/play.gif"; // Change back to play icon
    }
});

// Hobbies Section
const audioPlayer1 = document.getElementById('audioPlayer1');
const playPauseButton1 = document.getElementById('playPauseButton1');
const icon1 = document.getElementById('icon1').querySelector('img'); // Select the img inside the span

playPauseButton1.addEventListener('click', () => {
    if (audioPlayer1.paused) {
        audioPlayer1.play();
        icon1.src = "./icons/pause.gif"; // Change to pause icon
    } else {
        audioPlayer1.pause();
        icon1.src = "./icons/play.gif"; // Change back to play icon
    }
});


const handleButtonClick = () => {
    audioPlayer.pause();
    audioPlayer1.pause();  
};

prev.addEventListener('click', handleButtonClick);
next.addEventListener('click', handleButtonClick);