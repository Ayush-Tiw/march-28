//promise

const url="https://62481d4e4bd12c92f407a5a7.mockapi.io/ayush/friends";

//withput promise

// function guvi(data){
//   console.log(data)
// }

// function suman(url,callback_function){
//   let request = new XMLHttpRequest()
//   request.open("GET",url);
//   request.onload=function(){
//     if(request.status==200){
//       callback_function(this.responseText)
//     }else{
//       callback_function(this.status)
//     }
//   };
//   request.send();
// }
// suman(url,guvi)


//with promise
// function suman(data){
//   console.log(data)//here we can do get element id inner html we can display it on webpage
// }
// or
// function suman(data){
//   let first=document.getElementById("first");
//   first.innerHTML=data
// }



// let suman_promise= new Promise(function(resolve,reject){//its a call back and object also
//   let request=new XMLHttpRequest()
//   request.open("GET",url);
//   request.onload=function(){
//     if(request.status==200){
//       resolve(request.responseText)
//     }else{
//       reject(request.status)
//     }
//   };
//   request.send()
// })
// //calling of promise

// suman_promise.then(function(value){
// suman(value);

// },
// function(error){
//   suman(error)
// }
// )

const data = [
    {
        name: "suman",
        gender: "male",
        age: 38,
    },
    {
        name: "nitin",
        gender: "male",
        age: 32,
    },
    {name: "tanushree",
    gender: "female",
    age: 40,
},
{name: "krishna",
gender: "female",
age: 28,
},
{name: "iqbal",
gender: "male",
age: 18,
},
{name: "swetha",
gender: "female",
age: 39,
},
];
let first = document.getElementById("first");
let result = data.filter((data) => data.name == "suman");
first.innerHTML=JSON.stringify(result[0].name)


// class Task
// i have given a code search json object.now task is to create a table
// 1.create a table that will hold all the json data in tabular format 
// 2.at the top of your page create an input box and a buttton
// 3.when yoy search with name /gender/age the data will be displayed either as an alert or better display data as MODAl
// 4.use css,html,+js

// ----
// Class task
// document.getElementById("btn1").addEventListener("click", function () {
//     let male = document.getElementById("male");
//     let female = document.getElementById("female");
  
//     if (male.checked == true && female.checked == false) {
//       alert("The Gender is = MALE");
//     } else if (female.checked == true && male.checked == false) {
//       alert("The Gender is = FEMALE");
//     } else if (male.checked == true && female.checked == true) {
//       alert("ERROR # YOU CANNOT CHECK BOTH BOXES");
//     } else if (male.checked == false && female.checked == false) {
//       alert("WARNING # Please select your Gender !");
//     }
//   });

https://bright-griffin-005f4f.netlify.app/