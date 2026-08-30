// variables
// var x = 0xa9
// let y = "why"
// const z = "7med"
// let isStudent = true
// let doBackFlip = function(){
//     console.log("Backflipped");
// }

// let fruits = []
// console.log(typeof fruits);

// fruits = "Hello"
// console.log(typeof fruits);

// z = "Ahmed"

// Data Types
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof isStudent);
// console.log(typeof doBackFlip);
// console.log(typeof fruits);
// console.log(typeof newList);

const student1 = {
    ID: "S-882",
    fullName: "Chouchane Louai Abderrahmane",
    gender: "Male",
    address: "Oued Seguin - Mila",
    phoneNumber: "0779609072",
    isFullyPaid: true,
    coursesEnrolled: ["Web Dev", "Cyber Security", "UI/UX"],
    teachers: ["Mahi", "Chouchane Louai", "Yousra"]
}

const course = {
    ID: "C-067",
    coursedName: "Web Dev",
    isPaid: true,
    studentsEnrolled: ["Imane", "Ruba", "Abdou"],
    activeGroups: 3,
    teachers: ["CHouchane Louai"]
}
const student2 = {
    ID: "S-445",
    fullName: "Imane Belaid",
    gender: "Female",
    address: "Taher - Jijel",
    phoneNumber: "0798734521",
    isFullyPaid: true,
    coursesEnrolled: ["Web Dev", "UI/UX", "Mobile Dev"],
    teachers: ["Mahi", "Yousra", "Karim"]
}

const students = [student1, student2]
// for(let index = 0; index < 10 ; index++){
//     console.log("Ruba Understands Loops: "+index);
// }

let age = 17
// while(age <= 18){
//     console.log("You cannot drive "+age);
//     console.log("Asber chwiya");
//     break
    
// }
    
// if(age<18){
//     console.log("You cannot drive");
// }else{
//     if(){

//     }else{

//     }
//     console.log("You CAN drive");
// }

// const method = "GET"
// switch(method){
//     case "GET":
//         getAllBags()
//         break
//     case "POST":
//         createOneBag()
//         break
//     case "DELETE": 
//         deleteOneBag()
//         break
// }

document.querySelector("body").innerHTML = "<h1>Hello There</h1>"
document.querySelector("h1").style.background = "red"
document.querySelector("h1").style.color = "white"

document.querySelector("h1").addEventListener("click", function(){
    document.querySelector("h1").textContent = "You clicked me"
})

document.querySelector("h1").addEventListener("mouseover", function(){
    document.querySelector("h1").textContent = "You hovered over me"
})

document.querySelector("h1").addEventListener("mouseleave", function(){
    document.querySelector("h1").textContent = "You left me"
})

document.querySelector("h1").addEventListener("keyup", function(){
    document.querySelector("h1").textContent = "You key-uped me"
})