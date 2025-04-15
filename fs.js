const { error } = require('console')
const fs= require('fs')

fs.readFile('exaple.txt','utf8',(err,data)=> {
    if(err){
        console.error("error in reading file",err)
        return ;
    }
    console.log(data);
})