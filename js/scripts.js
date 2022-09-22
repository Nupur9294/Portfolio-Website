console.log('Hi! Welcome to My Portfolio Site');

function menuToggle() {
  var x = document.getElementById('myNavToggle');

  if (x.className === 'navtoggle row') x.className += ' responsive row';
  else x.className = 'navtoggle row';
}

$(document).ready(function () {
  $('.fade').css('display', 'none');
  $('.fade').fadeTo(2000, 1);
});
