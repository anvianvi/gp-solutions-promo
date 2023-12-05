function toggleVideo() {
  const img = document.getElementById('hero-img');
  const video = document.getElementById('hero-video');
  const btn = document.getElementById('hero-video-control');

  img.classList.toggle('hide')
  video.classList.toggle('hide')
  btn.classList.toggle('hide')

  video.src = "https://www.youtube.com/embed/VJyNeYk5eEI?si=anzDvc06EyoDKc1y&autoplay=1&volume=50";

}