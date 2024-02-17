/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(student => {if(student.marks > 50){
    console.log(student);
  }})

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {if(student.marks > 50){
    console.log(student);
  }})
}

function addData() {
  //Write your code here, just console.log
   const newObj = {id:4,name:"susan",age:"20",marks:45};
   arr.push(newObj);
   console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const UpdatedArr = arr.filter(student => student.marks >= 50)
  console.log(UpdatedArr);

}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [
    { id: 4, name: "john Abraham", age: "28", marks: 60 },
    { id: 5, name: "jacki Dada", age: "30", marks: 75 },
    { id: 6, name: "karun Nair", age: "29", marks: 45 },
  ];
  const newArr = arr.concat(arr2);
  console.log(newArr);
}
