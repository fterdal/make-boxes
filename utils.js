function makeBox() {
  console.log('making a box...')
  const container = document.getElementById('container')
  const newBox = document.createElement('DIV')
  newBox.innerText = 'New Box'
  container.appendChild(newBox)
}

window.makeBox = makeBox
