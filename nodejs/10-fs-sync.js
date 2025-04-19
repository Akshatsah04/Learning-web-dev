const {readFileSync , writeFileSync}=require('fs');
const path = require('path');


const first=readFileSync(path.join(__dirname, 'subfolder', 'first.txt'),'utf8');
const second=readFileSync(path.join(__dirname, 'subfolder', 'second.txt'),'utf8');

console.log(path.join(__dirname, 'subfolder', 'first.txt'))
console.log(first,second);

writeFileSync(path.join(__dirname, 'subfolder', 'result-sync.txt'),`here is th result : ${first},${second}`,{flag:'a'})