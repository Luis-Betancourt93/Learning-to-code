// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   //Conditionals go here
//   if ( day == "tuesday"  || day === "thursday" ) {
//     alert("CLASS DAY!!")
//   } else if( day === "saturday" || day === "sunday" ) {
//     alert("Weekend")
//   } else {
//     alert("Boring!!")
//   }

//   document.querySelector("#placeToSee").textContent = day;

// }



// ----------------- Class 12 first javaScript Task --------------------------

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// let newName = "John";
// let admin = newName;
// console.log(admin);

// Challange 2 

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// const planet = "Earth";
// let currentUser = "";

// ----------------- Class 12 first javaScript Task --------------------------


// document.querySelector('#convert').addEventListener('click', convert)

// function convert() {
//   const temperature = document.querySelector("#temp").value * 1.8 + 32;
  
//   document.querySelector("#placeToSee").textContent = `It's ${temperature} Fahrenheit! `;
  
// }


// ----------------- Class 16 Task --------------------------

//--- Easy
//create a variable and assign it a number
// let randomNumber = 40;

//minus 10 from that number
// let newNumber = randomNumber - 10 ;

//print that number to the console
// console.log(newNumber);

//--- Medium
//create a variable that holds a value from the input
// let yourAge = parseInt(prompt("What is your age"));

//add 25 to that number
// yourAge += 25;


//alert that number
// alert(yourAge);


//--- Hard
//create a variable that holds the h1
// let title = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables

// document.querySelector("h1").addEventListener("click", addNumbers);

// function addNumbers(){
//   console.log(newNumber + yourAge);
// }


// ------------------ AGE Checker -----------------

//Create a conditonal that checks their age

// document.querySelector("button").addEventListener("click", howOldAreYou);

// function howOldAreYou(){
//   let userAge = parseInt(document.querySelector("#danceDanceRevolution").value);
//   if (userAge < 16) {
//     document.querySelector("h1").innerHTML = "Sorry you can not drive, your not 16 yet.";
//   } else if (userAge < 18) {
//     document.querySelector("h1").innerHTML = "You cant hate out ouside of the club, because you cant even get in.";
//   } else if (userAge < 21) {
//     document.querySelector("h1").innerHTML = "Sorry you cant drink your not 21.";
//   } else if (userAge < 25) {
//     document.querySelector("h1").innerHTML = "You can not rent cars affordably.";
//   } else if (userAge < 30) {
//     document.querySelector("h1").innerHTML = "You cant rent fancy cars affordably.";
//   } else if (userAge >= 30) {
//     document.querySelector("h1").innerHTML = "Sorry your old. There is nothing left to look forwards too";
//   }
// }


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


// ------------------ Simple Functions -----------------

//---Easy
//create a function that subtracts two numbers and alerts the difference
//  function subtractNum(num1, num2) {
//    alert(num1 - num2);
//  }

//  subtractNum(100, 5);


//create a function that divides three numbers and console logs the quotient
//  function devidThree( a, b, c ) {
//   console.log(a / b / c);
//  }

//  devidThree(100, 10, 2);



//create a function that multiplys three numbers and returns the product
//  

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
//  function takesThree(num1, num2, num3) {
//       sumTwo = (num1 + num2) % num3;
// 
//       return sumTwo;
//  }

//  takesThree(100, 100, 2);
//  console.log(sumTwo);

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

// function takesFour(num1, num2, num3, num4) {
//   multTwo = num1 * num2;
//   if (multTwo > 100) {
//     sumTotal = multTwo + num3 + num4;
//     console.log(sumTotal);
//   } else if (multTwo < 100) {
//     subtrackTwo = multTwo - num3 - num4;
//     console.log(subtrackTwo);
//   } else if (multTwo === 100 ) {
//     multiplyThree = num1 * num2 * num3;
//     alert(multiplyThree / num4);
//   }
// }


// takesFour(12, 12, 2, 2);


// ------------------ 21 savage Loop -----------------

//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//  function savage() {
//   for(let i = 1; i < 22; i++) {
//     console.log("21");
//   }
//  }
//  savage();




//Bonus can you make it print '21' 21 times to the dom?

// ------------------ Practice For Loops -----------------

// console log even numbers 0 - 20 

// for(i=0; i<=20; i+=2 ) {
//   console.log(i);
// }


// console log from 100 to 0 going down by 10

// for(i=100; i>=0; i-=10){
//   console.log(i);
// }


// console log from 25 to 0 going down 5 time each time 
// for(i=25; i>=0; i-=5){
//   console.log(i);
// }

// console log ever name in the array and make them uper case
// let people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for(i=0; i<=people.length; i++){
//   console.log(people[i].toUpperCase())
// }