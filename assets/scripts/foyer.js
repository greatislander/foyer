var doorFrame = document.getElementById('doorframe'),
  animationToAjar = document.getElementById('ajar'),
  animationToOpen = document.getElementById('open'),
  animationToClosed = document.getElementById('ajar'),
  button = document.getElementById('open-button');

button.addEventListener('click', function() {
  if (doorFrame.classList.contains('ajar')) {
    doorFrame.classList.remove('ajar');
    doorFrame.classList.add('open');
    animationToOpen.beginElement();
  } else if (doorFrame.classList.contains('open')) {
    doorFrame.classList.remove('open');
    doorFrame.classList.add('closed');
    animationToClosed.beginElement();
  } else if (doorFrame.classList.contains('closed')) {
    doorFrame.classList.remove('closed');
    doorFrame.classList.add('ajar');
    animationToAjar.beginElement();
  }
}, false);
