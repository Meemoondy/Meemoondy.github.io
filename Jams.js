document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audio-player');
  const playlistItems = document.querySelectorAll('.playlist li');

  playlistItems.forEach(item => {
    item.addEventListener('click', function () {
      const songSrc = this.getAttribute('data-src');
      audioPlayer.src = songSrc;
      audioPlayer.play();
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audio-player');
  const playlistItems = document.querySelectorAll('.playlist li');
  let currentSongIndex = 0;


  function playCurrentSong() {
    const songSrc = playlistItems[currentSongIndex].getAttribute('data-src');
    audioPlayer.src = songSrc;
    audioPlayer.play();

    audioPlayer.addEventListener('ended', playNextSong);
  }

 
  function playNextSong() {
    audioPlayer.removeEventListener('ended', playNextSong);
    currentSongIndex++;

    if (currentSongIndex < playlistItems.length) {
      playCurrentSong();
    }
  }

 
  playCurrentSong();


  playlistItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      currentSongIndex = index;
      playCurrentSong();
    });
  });
});


const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.logo',{delay:510, origin:'top'});
sr.reveal('.page',{delay:500, origin:'left'});




