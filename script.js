(() => {
  const roulette = document.querySelector('.roulette')
  const playButton = document.querySelector('.button')
  let deg = 0

  playButton.addEventListener('click', () => {
    playButton.style.pointerEvents = 'none';
    deg = Math.floor(3000 + Math.random() * 3000);
    roulette.style.transition = 'all 10s ease-out';
    roulette.style.transform = `rotate(${deg}deg)`;
    console.log(deg)
  })

  roulette.addEventListener('transitionend', () => {
    playButton.style.pointerEvents = 'auto';
    roulette.style.transition = 'none';
    const actualDeg = deg % 360;
    console.log(actualDeg)
    roulette.style.transform = `rotate(${actualDeg}deg)`;
  })
})();