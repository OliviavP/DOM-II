import './less/index.less'

// Your code goes here!

//1
window.addEventListener('mouseover', (evt) => {
  evt.target.style.color = 'purple'
})

//2
const nope = document.querySelector('.intro h2')
document.addEventListener('contextmenu', () => {
  nope.style.color = 'red'
  nope.textContent = 'Nope!'
})

const nopeTwo = document.querySelector('.intro p')
document.addEventListener('contextmenu', () => {
  nopeTwo.style.color = 'orange'
  nopeTwo.textContent = 'Try again!'
})

const nopeThree = document.querySelector('.text-content h2')
document.addEventListener('contextmenu', () => {
  nopeThree.style.color = 'yellow'
  nopeThree.textContent = 'Join an adventure instead of trying to inspect!'
})

const nopeFour = document.querySelector(' .inverse-content h2')
document.addEventListener('contextmenu', () => {
  nopeFour.style.color = 'green'
  nopeFour.textContent = 'Keep reading!'
})

const nopeFive = document.querySelector('.content-destination h2')
document.addEventListener('contextmenu', () => {
  nopeFive.style.color = 'blue'
  nopeFive.textContent = 'Come on! Choose a trip!'
})

//3
const thirdImg = document.querySelector('.inverse-content img')
thirdImg.addEventListener('drag', () => {
  nopeFour.textContent =
    'You can take your own pic like this! Choose a destination!'
  nopeFour.style.color = 'chartreuse'
})

const secImg = document.querySelector('.content-section img')
secImg.addEventListener('drag', () => {
  nopeThree.textContent = 'Get your own map!'
  nopeThree.style.color = 'cyan'
})

const firstImg = document.querySelector('.intro img')
firstImg.addEventListener('drag', () => {
  nope.textContent = 'Get your own Fun Bus!'
  nope.style.color = 'deepskyblue'
  nopeTwo.textContent = "I know it's adorable:)"
  nopeTwo.style.color = 'springgreen'
})

const fourthImg = document.querySelector('.content-destination img')
fourthImg.addEventListener('drag', () => {
  nopeFive.textContent = 'Pick an adventure and take your own photo!'
  nopeFive.style.color = 'seagreen'
})

//4

firstImg.addEventListener('dragend', () => {
  nope.textContent = 'I do love the cute Fun Bus!'
  nope.style.color = 'forestgreen'
  nopeTwo.textContent = "Just admire it's cuteness"
  nopeTwo.style.color = 'fuchsia'
})

secImg.addEventListener('dragend', () => {
  nopeThree.textContent = 'Use a map instead of your phone!'
  nopeThree.style.color = 'teal'
})

thirdImg.addEventListener('dragend', () => {
  nopeFour.textContent =
    "I think this is Italy...could be wrong...but why don't you pick a trip and find out!"
  nopeFour.style.color = 'lawngreen'
})

fourthImg.addEventListener('dragend', () => {
  nopeFive.textContent = 'Phuket, Thailand is on my bucketlist too!'
  nopeFive.style.color = 'lightseagreen'
})

//5

firstImg.addEventListener('dblclick', () => {
  firstImg.style.height = '400px'
})

secImg.addEventListener('dblclick', () => {
  secImg.style.height = '400px'
})

thirdImg.addEventListener('dblclick', () => {
  thirdImg.style.height = '400px'
})

fourthImg.addEventListener('dblclick', () => {
  fourthImg.style.height = '400px'
})

//6

const adventure = document.querySelector('.destination h4')
window.addEventListener('wheel', () => {
  adventure.textContent = 'Go on an adventure!'
  adventure.style.color = 'orangered'
})

//7

const pydPara = document.querySelector('.content-destination p')
window.addEventListener('keydown', () => {
  pydPara.textContent = 'Sign up for an adventure!'
  pydPara.style.fontSize = '5rem'
  pydPara.style.color = 'aquamarine'
})

//8

document.body.addEventListener('click', (event) => {
  event.target.style.color = 'black'
})

//9

const funbus = document.querySelector('.main-navigation h1')
window.addEventListener('load', () => {
  funbus.style.color = 'goldenrod'
  funbus.style.fontSize = '8rem'
})

//10

funbus.addEventListener('mouseleave', () => {
  funbus.style.color = 'green'
})
