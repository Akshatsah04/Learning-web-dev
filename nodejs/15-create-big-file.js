import {writeFileSync} from 'fs'

for(let i =0 ; i<1000 ; i++){
    
    writeFileSync('./subfolder/big.txt' , `hello world ${i}\n` , {flag:'a'})
    
}