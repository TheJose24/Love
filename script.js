var botonNo = document.querySelector('.no');
var gifs = document.querySelectorAll('.gifs');
var gifIndex = 0;
var gifTimeout;
var mouseMoveCount = 0;

botonNo.addEventListener('mousemove', function() {
  var x = Math.floor(Math.random() * (window.innerWidth - botonNo.offsetWidth));
  var y = Math.floor(Math.random() * (window.innerHeight - botonNo.offsetHeight));

  botonNo.style.left = x + 'px';
  botonNo.style.top = y + 'px';

  mouseMoveCount++;
  if (mouseMoveCount >= 3) {
    if (!gifTimeout) {
      showGif();
    } else {
      clearTimeout(gifTimeout);
      gifTimeout = null;
      hideGif();
      showGif();
    }
  }
});

var botonSi = document.querySelector('.si');
var mensaje = document.getElementById('mensaje');

botonSi.addEventListener('click', function() {
  mensaje.classList.add('alerta-visible');
});

function showGif() {
  gifs[gifIndex].style.opacity = '1';

  gifTimeout = setTimeout(function() {
    hideGif();
    gifTimeout = null;
  }, 5000);
}

function hideGif() {
  gifs[gifIndex].style.opacity = '0';
  gifIndex++;
  if (gifIndex >= gifs.length) {
    gifIndex = 0;
  }
}
