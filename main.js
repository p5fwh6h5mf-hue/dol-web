document.getElementById("startButton").addEventListener("click", function() {
    const frame = document.getElementById("gameFrame");
    frame.src = "Degrees of lewdity 0.5.5.9.html";
    document.getElementById("gameContainer").classList.remove("hidden");
    this.style.display = "none";
});
