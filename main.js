// Write your code in this file!
const colors = window.colors
const makeBox = window.makeBox

/* Here are some colors you might make a box:
salmon
crimson
tomato
gold
papayawhip
peachpuff
chartreuse
palegreen
aquamarine
turquoise
skyblue
plum
lavander
pink
wheat
*/

// colors.forEach(color => {
//   makeBox(`This  box is ${color}`, color)
// })
// colors.forEach(color => {
//   makeBox(color, `This  box is ${color}`)
// })

/* EXERCISE 1: Calling a function
  Here are two functions you can use for this exercise: console.log and makeBox.

  Functions need to be "called". We sometimes also say "invoking the function".
  In JavaScript, calling a function means using parethnesis, like this:

  makeBox()

  If you know the name of the function, calling it is as easy as typing the
  name, and adding a pair of parentheses after it.

  In addition, you can call a function _with arguments_. This is useful whenever
  you want to make the function do something specific. Let's call the makeBox
  function with "Hello World":

  makeBox('Hello World')

  Notice how the argument we are passing to the function goes between the
  parentheses. In fact, functions can take several arguments. For instance,
  let's call makeBox with two arguments, some text and a color:

  makeBox('Hello World', 'gold')

  Try these examples for yourself and see what the output looks like.
*/

makeBox()
makeBox('Hello World')
makeBox('Hello World', 'gold')



// EXERCISE 2: Variables and Types
