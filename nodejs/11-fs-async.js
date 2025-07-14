const {readFile , writeFile} = require('fs')

readFile('./subfolder/first.txt' , 'utf8', (err , result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;

    readFile('./subfolder/second.txt' , 'utf8', (err , result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second =result;

        writeFile('./subfolder/result-async.txt' , `here is th result : ${first},${second}`,{flag:'a'} , (err , result)=>{
            if(err){
                console.log(err)
            }
        })
    })

})