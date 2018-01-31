/* global emojiList, Snap */
let [emojiName, codepoint] = randomInArray(Object.entries(emojiList))

console.log(emojiName, codepoint)

const o = document.createElement('object')
o.type = 'image/svg+xml'
o.data = `svg/emoji_u${codepoint}.svg`
o.style.width = '100%'
o.style.height = '100%'
document.querySelector('.container').appendChild(o)

o.addEventListener('load', () => {
  const svg = o.contentDocument.querySelector('svg')
  svg.setAttribute('viewBox', `0 0 128 128`)
  fuckup()
})

function fuckup() {
  Snap('object').selectAll('g').forEach(g => g.transform(`rotate(${Math.random() * 20 - 10}deg)`))
  window.requestAnimationFrame(fuckup)
}

function randomInArray(arr) { return arr[Math.floor(Math.random() * arr.length)] }

window.randomInArray = randomInArray
