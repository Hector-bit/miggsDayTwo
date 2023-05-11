const myArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//FOREACH EXAMPLE

// const myOtherFunction = () => {
//   //mycode
// }

let idkFor =  myArr.forEach((ele, i) => {
 let num = (ele * 2)
  console.log(num)
})


//MAP EXAMPLE
let idkMap = myArr.map((ele, i)=> {
  return ele * 3
})

console.log('foreach return result', idkFor)
console.log('map return result: ', idkMap)