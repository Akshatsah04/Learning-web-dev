const http =require('http')

const server=http.createServer((req , res) => {
    if(req.url=== '/'){
        res.write('welcome')
        res.end()
    }
    if(req.url=== '/about'){
        res.write('about')
        res.end()
    }
    
})


server.listen(5000)