const fs = require('fs')
const emojiList = require('./emojilist')

const entries = Object.entries(emojiList)

const notFound = entries.filter(([, codepoints]) => !fs.existsSync(`svg/emoji_u${codepoints}.svg`))

console.log(notFound.length)
console.log(notFound.map(([name, cps]) => `${name} (${cps})`).join('\n'))