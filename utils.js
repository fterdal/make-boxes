// You do not need to edit this file.

//
function makeBox(color, text) {
  console.log('making a box...')
  const container = document.getElementById('container')
  const newBox = document.createElement('DIV')
  newBox.classList.add('box')
  // newBox.style.width = '5em';
  // newBox.style.height = '5em';
  // newBox.style.border = '1px solid black';
  if (color) {
    newBox.style.backgroundColor = color
  }
  if (text) {
    newBox.innerText = text
    newBox.style.textAlign = 'center';
  }
  container.appendChild(newBox)
}

window.makeBox = makeBox
