const path = require("path")

console.log(path.sep)

const filePath = path.join("/contant/","subfolder", "text.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'contant','subfolder','text.txt')
console.log(absolute)
