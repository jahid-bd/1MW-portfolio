//work section scripts
const playBtn = document.getElementById('playBtn');
const playBtn2 = document.getElementById('playBtn2');
const pauseBtn = document.getElementById('pauseBtn');
const videoThumbnail = document.getElementById('videoThumbnail');
const video = document.getElementById('video');

playBtn2.addEventListener('click', () => {
  videoThumbnail.style.display = 'none';
  video.style.display = 'block';
  video.play();
});
playBtn.addEventListener('click', () => {
  video.play();
  playBtn.style.display = 'none';
});

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();

    playBtn.style.display = 'none';
  } else {
    video.pause();
    playBtn.style.display = 'block';
  }
});

video.addEventListener('ended', () => {
  video.style.display = 'none';
  videoThumbnail.style.display = 'block';
});
