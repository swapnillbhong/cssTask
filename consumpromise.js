const consume = new Promise((resolve,reject)=>{
 setTimeout(()=>{
    const success =false;
    if(success){
        console.log("promise resolve successfully")
    }
    else{
        console.log("promise reject badly");
        
    }
 },1000)
})


async function checkavaiblility() {
    try{
        const result= await consume;
        console.log(result);
    }
    catch(error){
        console.log(error)
    }
}

checkavaiblility();
