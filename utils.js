// You do not need to edit this file.

// const colors = [
//   'salmon',
//   'crimson',
//   'tomato',
//   'gold',
//   'papayawhip',
//   'peachpuff',
//   'chartreuse',
//   'palegreen',
//   'aquamarine',
//   'turquoise',
//   'skyblue',
//   'plum',
//   'lavander',
//   'pink',
//   'wheat',
// ]

function makeBox(color, text) {
  const container = document.getElementById('container')
  const newBox = document.createElement('DIV')
  newBox.classList.add('box')
  if (color) {
    newBox.style.backgroundColor = color
  }
  if (text) {
    newBox.innerText = text
    newBox.style.textAlign = 'center'
  }
  container.appendChild(newBox)
}

window.makeBox = makeBox
