// // // console.log("akshat");
// // // console.log("hello js");

// // // let fullname="tony";
// // // console.log(fullname);

// // // // let age=29;
// // // console.log(age);

// // const student = {
// //     fullName : "akshat",
// //     age : 19,
// //     cgpa : 8.1,
// //     isPass :true,
// // };

// // console.log(student["fullName"]);
// // console.log(student.age);
// // console.dir(student);

// // // this is a single line comment

// // /*this is a multiple line 
// // comment*/

// // // arthimetic operators

// // let a=3;
// // let b=2;

// // console.log("a=" , a  , "b=" , b);
// // console.log("a+b=" , a+b);
// // console.log("a-b=" , a-b);
// // console.log("a*b=" , a*b);
// // console.log("a/b=" , a/b);
// // console.log("a%b=" , a%b);
// // console.log("a**b=" , a**b);



// // let age = 16;

// if( age >=18){
//     console.log("you can vote");
// }
// if( age <18){
//     console.log("you can't vote");
// }

// let num1=20;
// if(num1%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// // let result = age>=18? "adult" : "not adult" ;
// // console.log(result);

// age=21

// age>=18? console.log("adult") : console.log("not adult") ; //compact if else statement



// // let score = prompt("enter a number");

// // if(score<=100 && score >=90){
// //     console.log("grade A")
// // }else if (score<=89 && score >=70){
// //     console.log("grade B")
// // }else if(score<=69 && score >=60){
// //     console.log("grade C")
// // }else if(score<=59 && score >=50){
// //     console.log("grade D")
// // }else if(score<=49 && score >=0){25
// //     console.log("grade F")
// // }else{
// //     console.log("not valid")
// // }


// for(let i=1 ; i<=5 ; i++){
//     console.log("hello");
// }


// // game

// // let gameNum = 40;
// // let userGuess = prompt("guess the number");40
// // while(userGuess != gameNum){
// //     console.log("its a worng gusses")
// //     userGuess = prompt("guess the number again");
// // }
// // console.log("you have entered the right number")

// let str = "akshat";
// console.log(str.length);
// console.log(str[0]);

// console.log(str.slice(2,5));

// // fullName=prompt("enter your full name");
// // let userName= "@"+fullName+fullName.length;
// // console.log(userName);

//  let maRks = [89 , 38 , 84 , 44 , 23];
//  let heRo = ["spiderman" , "antman" , "ironman"];

//  console.log(maRks);
//  console.log(heRo.length);

//  let price = [250,645,300,900,50];

//  for(let i = 0 ; i< price.length ; i++){
//     price[i] = price[i] - price[i]/10;
//  }
//  for(let jn of price){
//     console.log(jn);
//  }

//  function print(){
//     console.log("hello world");
//  }

//  print();
//  print();

//  function myFun(x , y){
//     s = x+y;
//     return s;
//  }

//  console.log(myFun(2 , 3));



//  function noVowels(str){
//     let noV =0;
//     for(let i=0 ; i<str.length ; i++){
//         if("a"==str[i] || "e"==str[i] ||"i"==str[i] ||"o"==str[i] ||"u"==str[i] ){
//             noV++;
//         }
//     }
//     console.log(noV);
//  }

//  noVowels("jaeiounrtyw");

//  let giveNum=[1 , 2, 3, 4, 5, 6];

//  giveNum.forEach((val)=>{
//     console.log(val*val);
//  });


//  let giveScore = [89 , 90 , 78 , 92 , 94 , 66];

//  let final = giveScore.filter((val)=>{
//     return val>"90";
//  })

//  console.log(final);

 
let headin = document.getElementById("head");
console.log(headin);
console.dir(headin);

let elemen = document.querySelector(".head2");
console.log(elemen);
console.dir(elemen);

let hhh = document.querySelector("h2");
console.log(hhh);

hhh.innerText = "new heading";

let classss = hhh.getAttribute("class");
console.log(classss);

// hhh.setAttribute("class" , "head3")

// hhh.style.backgroundColor= "green";

// let newBut = document.createElement("button");
// newBut.innerText="click me";
 
// hhh.after(newBut);

// let heading =document.createElement("h1");
// heading.innerHTML="<i>from js</i>";
// document.querySelector("body").prepend(heading);

// let neBu=document.createElement("button");
// neBu.innerText= "click me";
// neBu.style.backgroundColor="red";
// neBu.style.color="white";

// document.querySelector("body").prepend(neBu);

// hhh.classList.add("underline");


let bt1 = document.querySelector("#bt1");
let body = document.querySelector("body");

// bt1.onclick = () => {
//     body.style.backgroundColor="blue";
// }
// bt1.ondblclick = () => {
//     body.style.backgroundColor="white";
// }

// bt1.addEventListener("click" , ()=>{
//     console.log("hello1")
// })
// bt1.addEventListener("click" , ()=>{
//     console.log("hello2")
// })
let mode ="light";
bt1.addEventListener("click" , ()=>{
    if(mode==="light"){
        console.log("dark");
        body.classList.add("darkmode")
        body.classList.remove("lightmode")
        mode="dark";
    }else{
        console.log("light");
        body.classList.add("lightmode")
        body.classList.remove("darkmode")
        mode="light";
    }
})
