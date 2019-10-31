// Write your code in this file!
/* global makeBox */

const colors = [
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

colors.forEach(color => {
  makeBox(color, `This  box is ${color}`)
})
