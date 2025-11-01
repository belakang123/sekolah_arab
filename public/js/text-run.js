  const marquee = document.querySelector('.marquee');

  marquee.addEventListener('touchstart', () => {
    marquee.classList.add('paused');
  });

  marquee.addEventListener('touchend', () => {
    marquee.classList.remove('paused');
  });
