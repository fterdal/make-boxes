// Write your code in this file!
/* global makeBox */

const colors = [
  '#820263', // purple
  '#D90368', // dogwood
  '#EADEDA', // gainsboro
  '#FFD400', // yellow
  '#016FB9', // spanish blue
  '#EDF2F4', // anti-flash white
  'cyan', // cyan
]

colors.forEach(color => {
  makeBox(color, `This  box is ${color}`)
})
