const fs = require('fs')
const emojiList = require('./emojilist')

const entries = Object.entries(emojiList)

const notFound = entries.filter(([, codepoints]) => !fs.existsSync(`svg/emoji_u${codepoints}.svg`))

console.log(notFound.length)
console.log(notFound.map(([name, cps]) => `${name} (${cps})`).join('\n'))

const found = entries.filter(([, codepoints]) => fs.existsSync(`svg/emoji_u${codepoints}.svg`))
const o = {}
found.forEach(([n, cp]) => o[n] = cp)

fs.writeFileSync('emojilist-gen.js', `const emojiList = ${JSON.stringify(o, undefined, 2)}\n\nif(typeof window != 'undefined') window.emojiList = emojiList\nelse if(module) module.exports = emojiList\n`)
