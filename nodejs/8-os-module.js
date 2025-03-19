const os = require("os");

//info about current user 

const user = os.userInfo();
console.log(user);

//method return the system uptime in sec

console.log(`the system uptime is ${os.uptime()} second`);

const currntOs = {
    name : os.type(),
    release :os.release(),
    totalMem : os.freemem(),
    freeMem : os.freemem()
}
console.log(currntOs)