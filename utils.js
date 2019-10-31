// You do not need to edit this file.

window.colors = [
  'salmon',
  'crimson',
  'tomato',
  'gold',
  'papayawhip',
  'peachpuff',
  'chartreuse',
  'palegreen',
  'aquamarine',
  'turquoise',
  'skyblue',
  'plum',
  'lavander',
  'pink',
  'wheat',
]

window.makeBox = function makeBox(text, color) {
  const container = document.getElementById('container')
  const newBox = document.createElement('DIV')
  newBox.classList.add('box')
  newBox.style.backgroundColor = color ? color : 'white'
  if (text) {
    newBox.innerText = text
    newBox.style.textAlign = 'center'
  }
  container.appendChild(newBox)
}
