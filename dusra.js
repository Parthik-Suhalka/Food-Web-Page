
// function hello(){
//     console.log("Hello")
// }

// const hello = document.querySelector('.hamburger');

// hello.addEventListener('click', show());

// function show(){
//     console.log("hello")
// }

// function myFunc(){
//     var element = document.querySelector(".vertical-items");
//     console.log('hey there',element);
//     element.classList.toggle('.vertical-items2');
// }

var element = document.querySelector(".hamburger");
var elementOne = document.querySelector(".vertical-items");

element.addEventListener('click', function(){
    elementOne.classList.toggle('vertical-items2')
})