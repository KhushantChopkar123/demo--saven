// synchronous in js in sequence
// console.log("one")
// console.log("two")
// console.log("three")

// Asynchronus in js (2s=2000 ms)

// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hello")
// },2000)
// console.log("third")
// console.log("four")

// Call back in js as synchronous

// function sum(a,b) {
//     console.log(a+b)

// }
// function calculater(a,b,sumcallback) {
//    sumcallback(a,b)

// }
// calculater(1,2,sum) or
// calculater(1,2,(a,b)=>{
//     console.log(a+b)
// })

// call back in js as asynchronous
// const hum=()=>{
//         console.log("hello dosto")
//     }
//     setTimeout(hum,2000) call throw function called call back

//     setTimeout(()=>{
//         console.log("hello frinds")direct insidethe timeout 
//     },2000) both are right


// call back hell.

// function getdata(dataId,data2,data3,data4,data5) {
//     setTimeout(()=>{
//         console.log("data=",dataId)
//     },2000)
//     setTimeout(()=>{
//         console.log("data=",data2)
//     },4000)
//     setTimeout(()=>{
//         console.log("data=",data3)
//     },6000)
//     setTimeout(()=>{
//         console.log("data=",data4)
//     },8000)
//     setTimeout(()=>{
//         console.log("data=",data5)
//     },10000)
// }
// getdata(1,2,3,4,5)

// or
// // function getdata(dataid,getnextdata) {
//     pro

// // setTimeout(()=>{
// //     console.log("data:-", dataid)
// //      if (getnextdata) {
// //         getnextdata()/* if is use to identify if the function getnextdata is present then only print call back value*/

// //     }

// // },2000)


// }getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4,()=>{
//                 getdata(5)
//             })
//         })
//     })
//  })






// promices in js

// let a=new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve("sucess")/*both are posssible with pending*/
//     // reject("order is unplaced")


// })
// console.log(a)



// function getdata(dataid,getnextdata) {

//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // console.log("data:-", dataid)
//         // resolve("sucessfully resolve")
//         reject("error")
//          if (getnextdata) {
//             getnextdata()/* if is use to identify if the function getnextdata is present then only print call back value*/

//         }

//     },2000)
//   })
// }
// getdata(123)


// function givevalue(value) {


//  return new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//   console.log(value)
//   resolve("tq processis succesfully complete")
//   // reject("error")
//  },5000) 
// })
// }

// let a=givevalue(890)

// Promise.then
// Promise.catch

// function getvalue(value) {
//   return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log(value)
//     resolve("succeful")
//     // reject("unused")


//    },3000) 
//   })
//  }
//  let a=getvalue("i am happy")
//  a.then((res)=>{
//   console.log("succed",res)
//  })
//  a.catch((err)=>{
//   console.log("unsuccesfully used",err)
//  })

// promise chain
// function data1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1")
//       resolve("succeful1")
//     }, 3000)

//   })
// }

// function data2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2")
//       resolve("succeful")
//     }, 3000)

//   })

// }
// console.log("loading....")
// let a = data1()
// a.then((res) => {
//   console.log(res)
//   console.log("loading....")
//   let b = data2()
//   b.then((res) => {
//     console.log(res)
//   })
// })
//  console.log("loading....")
//  let b =data2() 
//  b.then((res)=>{
//   console.log(res)
//  })
/*call the function is complasure /n jarori nhi ahi ki alwys parameter pass kile pahiji apn khi direct print kro skto*/


// function dataid(ids) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", ids)
//       resolve("succesul")

//     }, 3000)
//   })
// }
// console.log("loading.....")
// let a =dataid(1)
// a.then((res)=>{
// console.log(res)
// console.log("loading.....")
// let b =dataid(2)
// b.then(()=>{
//   console.log(res)
// })
// })


// async and await

// function Api(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:-", value)
//             resolve("sucefully work done")
//         },2000)
//     })
// }
//   async function calling() {
//     await Api(1)
//     await Api(2)
//     await Api(3)
//  }
// IIFE function use to direct run the function with out calling the function.()();

//  (async function () {
//     await Api(1)
//     await Api(2)
//     await Api(3)
//  })()



// function dataid(ids) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("data", ids)
//           resolve("succesul")

//         }, 1000)
//       })
//     }

// (async function () {
//     await dataid(123)
//     await dataid(678)
//     await dataid(133)
//     await dataid(12333)
// })();
//  api()

// function sum(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log(value)
//       resolve("khushant")
//     },5000)

//   })
// }
//  let a =sum(12)
//  a.then((res)=>{
//   console.log(res)
//   let b =sum(2334)
//   b.then((res)=>{
//     console.log(res)
//   })
//  })

// function order(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("order:-", num)
//       resolve("order 1 and 2 succefully get")


//     },5000)
//   })

// }
// console.log("loading...order1")
// let a = order(1)
// a.then((res) => {
//   console.log(res)
//   console.log("loading...order2")
//   let b = order(2)
//   b.then((res) => {
//     console.log(res)
//   })
// })




// function order(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("order:-", num)
//       resolve("order 1 and 2 succefully get")


//     },2000)
//   })

// }
// async function orderman() {
//   await order(1)
//   await order(2)
//   await order(3)
//   await order(4)
//   console.log("orders get succefully")
// }



// function sum(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         console.log(value)
//         resolve("succes")
//     },2000)
//     })
    
    
// }
// let a=sum(1)
// a.then((res)=>{
//   console.log(res)
// let b =sum(2)
// b.then((res)=>{
//   console.log(res)
// })
// })


// // function sum(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         console.log(value)
//         resolve("succes")
//     },5000)
// })
// }
// async function name() {
//     await sum(1)
//     await sum(2)
//     await sum(3)
//     await sum(4)
// }
//     name()

// function sum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("sucess")
//         })
//     })
    
// }