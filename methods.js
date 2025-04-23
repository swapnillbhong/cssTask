const fruit =[
    {name : 'apple' , qty : 2},
    {name : 'banana', qty : 5},
    {name : 'orange', qty : 3}
]

const uppercase = fruit.map( word=> word.name.toUpperCase())

const totalqty = fruit.reduce((total,fru)=> total+fru.qty ,0 )

const dout = fruit.filter( (total) => total.qty> 2)

console.log(uppercase);
console.log(totalqty);
console.log(dout);

