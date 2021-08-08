const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('respondiendo a tu solicitud v2');
})

const puerto = 3000;
server.listen(puerto,()=>{
    console.log(`escuchando puerto ${puerto}`);
})