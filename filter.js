// const number =[ 1, 2, 3, 4, 5];
// const even = number.filter(num => num%2 == 0)
// //console.log(even);

const students = [
    { name: 'Sushant', marks: 45 },
    { name: 'Sejal', marks: 80 },
    { name: 'Swapnil', marks: 60 },
  ];

 const result = students.filter( std=>std.marks>=50)
  console.log(result)


//  function swapnil(a,b){
//     return a+b
//  }

// const num1= 10;
// const num2= 15;
// console.log(swapnil(num1,num2));


const emails = ['a@example.com', '', '   ', 'b@example.com'];

const emailvaild = emails.filter( (email)=>email.trim()!=='')
console.log(emailvaild);

