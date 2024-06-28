var arr=[
    {name:"abc", marks:80},
    {name:"xyz", marks:30},
    {name:"qwe", marks:70},
    {name:"deewana", marks:36},
]



var ans1=arr.reduce((accumulator,Element)=>{
    // if(Element.marks>35)
       return accumulator+= Element.marks
},0)
console.log(ans1)

// console.log(arr);
var ans2=arr.map((Element)=>{
    return Element.marks;
    // if(Element.marks>35)
    //     console.log(Element.name); 
})
// console.log(ans2);

// arr.map((Element)=>{
//     console.log(Element.name,":",Element.marks)
// }
// )
// arr.map((Element)=>{
    
//     console.log(Element.name,":",Element.marks)
//    }
// )
// console.log("numb in progress");
// var numb=[10,20,30,40]
// var kux =numb.forEach((val)=>{
//    return  val+=10;
//     console.log(val);
// })
// console.log(numb)
// console.log(kux);


////////////
// var arr2=[10,20,30,40,50]
// arr2.forEach((Element)=>{
//     Element+=10;
//    console.log(Element)
// })
// console.log(arr2);
// console.log("for each ended");
// arr2.map((Element)=>{
//     Element+=10;
//     console.log(Element)
// })
// console.log(arr2);