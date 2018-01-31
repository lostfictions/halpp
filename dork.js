/* global emojiList */

let [emojiName, codepoint] = randomInArray(Object.entries(emojiList))

console.log('original: ', codepoint)
codepoint = codepoint.replace(/-/g, '_').replace(/_fe0f/g, '')

console.log(emojiName, codepoint)
// console.log(`svg/emoji_u${codepoint.replace(/-/g, '_')}.svg`)

const o = document.createElement('object')
o.type = 'image/svg+xml'
o.data = `svg/emoji_u${codepoint}.svg`
document.body.appendChild(o)

console.log(o.contentDocument.getElementsByClassName('g'))
// console.dir(o.contentDocument.querySelectorAll('g'))


function randomInArray(arr) { return arr[Math.floor(Math.random() * arr.length)] }
