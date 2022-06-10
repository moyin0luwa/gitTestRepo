//create promise 
var hasFineFace = false;
const promise = new Promise((resolve, reject) => {
    if (hasFineFace){
        baesDetails = {
            name : 'Assumpta',
            location: "KFC",
        }
        resolve(baesDetails)
    }
    else{
        reject(new Error('No date today'))
    }
})

var dateOn = () => {
promise.then((done) => {
    msg = done.name + '! we are going on a date'
    console.log(msg)
}).catch((error) => {
    console.log(error.message)
})
}

dateOn()