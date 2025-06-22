//Q1
const person = {
    name:"Utsav",
    age:21,
    gender:"Male"
}

console.log(person.name);
//q2
const square = (num)=>{
  return num*num;
}

console.log(square(2))
//Q3
const multiplyByTwo = (num)=>{
       num*2;
}
//Q4
arr =[1,2,3,4,5,6,7,8,9];
const filterEvenNos = arr.filter((elem)=>{
    return elem%2==0;
})
console.log(filterEvenNos)
//Q5
const squares = arr.map((elem)=>{
    return elem*elem;
})

const filterOddNos = arr.filter((elem)=>{
    return elem%2!=0;
})
console.log(filterOddNos)

const sum = arr.reduce((sum,acc)=>{
    return sum+acc;
})
console.log(sum);
//Q6
const findmax = ()=>{
    return Math.max(...arr);
}
console.log(findmax);

//q7
const Employee = [{
    name:"Utsav",salary:6000
},
  {
    name:"Nanu", salary:5000
  }
]

const salary = Employee.filter((elem)=>{
    return elem.salary>5000;
})

const sales =[{
    sales:40, name:"Utsuh"
},
{
    sales:50,name:jbkjsj
}
]

//q8
const totalSales = sales.reduce((acc,elem)=>{
    return acc + elem.sales;
})
console.log(totalSales)