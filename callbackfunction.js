const { callbackify } = require("util");


function greet(name,callback){
    console.log("hello"+name);
    callback()
}
function goodbye(){
    console.log("goodbye")
}
greet("Sushant",goodbye)