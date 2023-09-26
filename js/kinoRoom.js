let isInCinemaMode = false;

function toggleCinemaMode() {
  const button = document.getElementById('toggleCinemaMode');
  const play = document.getElementById('play');
  const body = document.body;

  isInCinemaMode = !isInCinemaMode;

  if (isInCinemaMode) {
    button.innerText = 'Выйти из кинотеатра';
    body.classList.add('cinema-mode', 'active');
  } else {
    button.innerText = 'Режим кинотеатра';
    body.classList.remove('active');
    setTimeout(() => {
      body.classList.remove('cinema-mode');
    }, 400); // Удаляем класс cinema-mode с задержкой для плавного исчезновения затемнения
  }
}