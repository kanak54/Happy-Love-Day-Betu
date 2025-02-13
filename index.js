function playAudio() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    // Remove the onclick attribute to prevent multiple plays
    document.querySelector('.drawBox').removeAttribute("onclick");
  }
