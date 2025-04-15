

const myPromise = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        const success = false;
        if(success){
            resolve("promise success")
        }
        else{
            reject("promise reject")
        }
    },2000)
})

//without async and await 

// myPromise.then((result)=> console.log(result))
// .catch((error)=>{
//     console.log(error)
// })

// async and await with

async function checkPromise(){
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
checkPromise();

