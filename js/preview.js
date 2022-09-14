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

// ------------------ Practice For Loops (Udemy)-----------------

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



// ------------------ Practice Class 19-----------------

// ------------------ Bring it all or nothin -----------------
// *Variables*
// Declare a variable, assign it a boolean, and alert the value
  // let yesOrNo = "True";
  // console.log(yesOrNo);

// Declare a variable, reassign it to your favorite color, and console log the value
  // let favColor = "blue";
  // console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
  // function takesFour(num1, num2, num3, num4) {
  //   return (num1 + num2 + num3) / num4;
  // }

  // console.log( takesFour(10, 10, 10, 3) );
  

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
//  function takesTwo(number1 , number2) {
//     console.log(Math.pow(number1, number2));
//  }

//  takesTwo(10,2);




// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// function takesBooleanAndString(boolean, string) {
//   if (boolean === true) {
//     alert(string);
//   } else if(boolean === false){
//     console.log(string);
//   }
// }

// takesBooleanAndString(true, "Hello");


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

// function takesOne(num1) {
//   for(let i=1; i<=num1; i++){
//     if (i % 15 == 0) {
//       console.log("FizzBuzz");
//     } else if(i % 3 == 0) {
//       console.log("fizz");
//     } else if (i % 5 == 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }


// takesOne(100);

// ------------------ Arrays In it to win it -----------------

//Create an array of movies with at least three movies.
// let myMovies = ["Bring it on", "Bring It On Again", "Bring it on all or nothing"];


//Using the array from above, store the first movie in a variable
// let bringItOn = myMovies[0];
// console.log(bringItOn);

//Get the length of the original array and store it in a new variable
// let myMoviesLenth = myMovies.length;
// console.log(myMoviesLenth);

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
// let lastMovie = myMovies.slice(-1);
// console.log(lastMovie);


// ------------------ Team TreeHouse Loops -----------------

 

// WHILE LOOP

// function getRandomNumber(upper) {
//   return Math.floor( Math.random() * upper ) + 1;
// }

// let counter = 0;
// while(conter < 10) {
//   console.log(`the random number is ${getRandomNumber(10)}`);
//   conter += 1;
// }



// Do while Loop

// function getRandomNumber(upper) {
//   return Math.floor( Math.random() * upper ) + 1;
// }

// let counter = 0;

// do{
//   console.log(`The random number is ${getRandomNumber(10)}`);
//   counter += 1;
// } while( counter < 10 );



// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
// let secret = prompt("What is the secret password?");

// // This should run after the loop is done executing
// alert("You know the secret password. Welcome!");


// let secret
// do {
//    secret = prompt("What is the secret password?");
// } while (secret !== "sesame");
// alert("You know the sevret password. Welcome");

// ----------------------- Class 19 arrays-fight to the finish ----------------

//Create an array of movie titles. Loop through the array and each element to the h2.
// let movies = ["Bring it on ", "Final Fantasy ", "Kill bill"];
// movies.forEach((element, index) => document.querySelector("h2").innerText += element);


// //Create an array of numbers. Loop through the array and three to each number and replace the old number.
// let nums = [100, 200, 300];
// nums.forEach( (element, index) => console.log(element + 3));


// //Find the average of all the numbers from question three
// let total = 0;
// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// } 

// let avg = total / nums.length;
// console.log(avg);





// ----------------------- Class 20 Review-in-paradise ----------------


// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

  // let favoriteFood = "Pizza";
  // alert(favoriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

  // let randomString = "Hello";
  // alert(randomString.charAt(1));



// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
   
  // function takesThree(num1, num2, num3) {
  //   alert((num1 / num2 ) * num3);
  // }

  // takesThree(100, 10, 5);


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

  // function takesOne (num1) {
  //   console.log(Math.cbrt(num1));
  // }
  // takesOne(576483);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

  // function whichMonth(month) {
  //     if (month === "june" || month === "july" || month === "august") {
  //       alert("YAY");
  //     } else {
  //       alert("BOOOO");
  //     }
  // }

  // whichMonth("octuber");


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

// function skipsNumber (num1) {
//     for(let i = 1; i <= num1; i ++ ) {
//       if (i % 5 !== 0 ) {
//         console.log(i);
//       }   
//     }
// }

//  skipsNumber(80);  

// ----------------------- Class 20 Review-after-paradise ----------------

// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

// let numbers = [100, 200, 300];


// function takeArray(numbers) {
//   if (numbers[0] < numbers[numbers.length - 1] ) {
//     alert("Hi");
//   } else if (numbers[0] > numbers[numbers.length - 1]) {
//     alert("Bye");
//   } else if (numbers[0] === numbers[numbers.length - 1]) {
//     alert("We close in an hour");
//   }
// }



// ----------------------- Class 20 Summer Games ----------------

//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// function multiplyNumbers (arr) {
//   let product = 1
//   for(let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   alert(product);
// }

// multiplyNumbers([100, 200, 300]);



// ----------------------- Class 20 Winter Games ----------------


//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


// function arrayOfNums(nums) {
//   let even = [];
//   nums.forEach( x => {
//     if (x % 2 === 0 ) {
//       even.push(x)
//     }
//   });
  
//   return even;
// }

// console.log( arrayOfNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) );


// ----------------------- Class 21  Mighty Morphin Review ----------------


// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
// let month = "CHRISMAS";
// let myFavHoliday = month;
// console.log(myFavHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
// let lastThree = "Luis";
// alert(lastThree.slice(-3));



// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

// function takesFive (num1, num2, num3, num4, num5){
    //  let difference = (num1 + num2 + num3 + num4 + num5) - 100;
//   alert(Math.abs(difference));
// }

// takesFive(100, 100, 100, 100, 100);



// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
// function takesThree (number1, number2, number3) {
//   console.log(Math.max(number1, number2, number3));
//   console.log(Math.min(number1, number2, number3));f
// }

// takesThree(100, 200, 300);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails(){
//   let results = Math.random();
//   if (results < .5) {
//     return "Heads";
//   } else {
//     return "Tails"
//   }
// }

// console.log(headsOrTails())



//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

// ----------------------- Class 21  Alien Ranger Review ----------------

//Arrays

//Create and array of tv shows. Loop through and print each show to the console

// let movies = ["Pokemon", "Dragon Ball Z", "Attack On Titan"];

// for(let i = 0; i < movies.length; i ++ ) {
//   console.log(movies[i])
// }


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

// let numbers = [ 100, 200, 300, 400];

// let onlyEvens = arry => arry.filter ( n => n % 2 === 0 );

// console.log( onlyEvens(numbers));


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

// function sumSecondLowAndHigh(arr){
//   let sorted = arr.sort((a,b) => a-b);
//   alert( sorted[1] + sorted[ sorted.length - 2]);
// }
// sumSecondLowAndHigh([2, 3, 1, 5, 4]);



// ----------------------- Class 21  objects-zero ----------------

// Create a stopwatch object that has four properties and three methods

// const stopWatch = {};

// stopWatch.brand = "Nike";
// stopWatch.color = "Black";
// stopWatch.shape = "round";
// stopWatch.size = "Small";

// stopWatch.start = function() {
//   console.log("Start");
// }

// stopWatch.stop = function() {
//   console.log("Stop");
// }

// stopWatch.sayBrand = function() {
//   console.log(stopWatch.brand);
// }

// ----------------------- Bpesquet The JS Way Practice  ----------------

// PRESENTATION
// Write a program that displays your name and age. 
// console.log("Luis");
// console.log(28);


// MINIMALISTIC CALCULATOR
// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3. 
// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);

// Values Prediction 
// Observe the following program and try to predict the values it displays.

// console.log( 4 + 5 );
  // should show 9
// console.log("4 + 5");
  // should show 4 + 5
// console.log("4" + "5");
  // should show 45


  // ----------------------- Bpesquet The JS Way Practice Ch3 "Adding Conditions" ----------------


// Following day Challenge
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

//  let todaysDate = prompt("What day is it?");
//  if (todaysDate.toLocaleLowerCase() === "monday") {
//   console.log("Well back to work we go! Tomorrow will be Tuesday");
//  } else if (todaysDate.toLocaleLowerCase() === "tuesday"){
//   console.log("It's Tuesday, I have to go shopping for food. Tomorrow will be Wednesday!!");
//  } else if (todaysDate.toLocaleLowerCase() === "wednesday") {
//   console.log("It's Humbs day!!! Tomorrow will be Thursday ");
//  } else if (todaysDate.toLocaleLowerCase() === "thursday") {
//   console.log("Hopefully today goes by fast, tomorrow will be Friday");
//  } else if (todaysDate.toLocaleLowerCase() === "friday"){
//   console.log("It's Friday!!!!!");
//  } else if (todaysDate.toLocaleLowerCase() === "saturday" || todaysDate.toLocaleLowerCase() === "sunday"){
//   console.log("Its the WEEKEND!!!");
//  }

//  Number comparison Challenge
//  Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

// let numberOne = Number(prompt("Pick a number!"));
// let numberTwo = Number(prompt("Pick another number "));

// if (numberOne < numberTwo) {
//   console.log("Your first number is less then your second number");
// } else {
//   console.log("Your first number is grater then your second number");
// }



// Number of days in a month Challenge
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded.        Incorrect inputs must be taken into account.

// let month = Number(prompt("Please enter the month number we are on."));
// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//   console.log("There are 31 days in that month!");
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log("There are 30 days in that month!");
// } else if (month === 2){
//   console.log("Its February and there are 28 day in that month");
// } else {
//   alert("Not a valid Input");
// }


// ----------------------- Bpesquet The JS Way Practice Ch4 "Loops" ----------------

// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

// let carousel = 10;
// while (carousel <= 10) {
//   console.log(carousel);
//   carousel ++;
// }

// let userInput = Number(prompt("Enter a number to loop how many times."));
// for(i = 1; i <= userInput; i++ ) {
//   console.log(userInput);
// }


// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.


// let userNumber = Number(prompt("Enter a Number"));

// while(userNumber > 100) {
//   alert("Try Again");
//  userNumber = Number(prompt("Enter a Number"));
// }

// console.log("You Finally enter a number less then or equal to 100");


// ----------------------- Class 22 Turbo Review ----------------
// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

// let favDrink = "Water";
// console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

// let randomWords = "mango apple";
// if (randomWords.includes("apple")){
//   console.log("yes is has apple");
// }

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// let choiceNumber = Math.ceil(Math.random() * 3 );

// function rockPapperScissors() {
//   let choiceNumber = Math.ceil(Math.random() * 3 );
//     if (choiceNumber === 1) {
//     return "rock";
//     } else if (choiceNumber === 2){
//       return "paper"
//     } else {
//       return "scissors";
//     }
// }

// rockPapperScissors();
// let computer  = rockPapperScissors();


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

// function didYouWin(player) {
//   let computer  = rockPapperScissors();
//   if( (player === "rock" && computer === "scissors") || (player === "papper" && computer === "rock") || (player === "scissors" && computer === "papper")){
//     console.log("you win");
//   } else if (player === computer  ) {
//     console.log("its a tie");
//   } else {
//     console.log("you loose");
//   }
// }

// didYouWin("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// function playGameXTimes(arr) {
//   arr.forEach( choice => didYouWin(choice) );
// }

// playGameXTimes( ["rock", "papper", "scissors"]);

// ----------------------- Class 22 Space Review ----------------

//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let numbers = [ 1, 2, 4, 5 ];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }
 
// alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not

// ----------------------- Objects Lost Galaxy Review ----------------

//Create a mouse object that has four properties and three methods

// const mouse = {}

// mouse.brand = "LogiTech"
// mouse.color = "Black"
// mouse.model = "MX 3"
// mouse.wireless = true

// mouse.leftClick = function() {
//   console.log("Left Clickkk");
// }

// mouse.rightClick = function() {
//   console.log("Right Click");
// }

// mouse.scroll = function() {
//   console.log("Jump Jump Jump");
// }



// ----------------------- Street Fighter Review ----------------

//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// function StreetFighter (gender,age,origin,finalMove) {
// this.gender = gender;
// this.age = age;
// this.origin = origin;
// this.finalMove = finalMove;

// this.special = function() {
//   alert("Your died");
// }
// this.block = function() {
//   alert("Think Again");
// }

// this.tagTeam = function() {
//   alert("Its 2 vs 1 now!!");
// }

// }

// let fightRyu = new StreetFighter ("Male", "30", "Japan", "Hadoken" );

// console.log(fightRyu);

// let fighterChunLi = new StreetFighter ("Female", "25", "Japan", "Hyakurtsukyaku");

// console.log(fighterChunLi);
// fightRyu.special();


// ----------------------- Class 23 Turbo Review ----------------

// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question.
// let ifQuetion = "What is your Brithday?";
// if (ifQuetion.indexOf("?") >= 0) {
//   alert("We have a Quetion!");
// } else {
//   console.log("Its not a Question");
// }


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

// let randomWords = "jr.dev tech money work from home freedom";
// console.log(randomWords.replace("jr.dev", "software engineer"));


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// function rockPapperScissors (){
//   let choiceNumber = Math.ceil(Math.random() * 3 );
//       if (choiceNumber === 1) {
//       return "rock";
//       } else if (choiceNumber === 2){
//         return "paper"
//       } else {
//         return "scissors";
//       }
// } 

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

// function didYouWin(player) {
//     let computer  = rockPapperScissors();
//     if( (player === "rock" && computer === "scissors") || (player === "papper" && computer === "rock") || (player === "scissors" && computer === "papper")){
//       console.log("you win");
//     } else if (player === computer  ) {
//       console.log("its a tie");
//     } else {
//       console.log("you loose");
//     }
//   }
  

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


// ----------------------- Class 23 Space Review ----------------


//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let numbers = [1, 2, 4, 5, 67];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }

// console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// ******* Class 23 Time: 2:00:00 https://www.youtube.com/watch?v=qnmKELgyXc0&t=3197s&ab_channel=LeonNoel
 
//Create a function that takes string
//Print the reverse of that string to the console

// Program to reverse a String 
// function reverseString (str) {

  // return a new array of strings
  // const arrayString = str.split("");

  // reverse the new created array elements
  // const reverseArray = arrayString.reverse();

  // join all elements of the array into a string
  // const joinArray = reverseArray.join("");

  // return the reversed string 
  // return joinArray;

// }

// Take input from the user 
// const string= prompt("Enter a String");

// const result = reverseString(string);
// console.log(result);


// In the above program, the built-in methods are used to reverse a string.

// First, the string is split into individual array elements using the split() method. str.split("") gives ["h", "e", "l", "l", "o"].
// The string elements are reversed using the reverse() method. arrayStrings.reverse() gives ["o", "l", "l", "e", "h"].
// The reversed string elements are joined into a single string using the join() method. reverseArray.join("") gives olleh.

//Create a function that takes in a string
//Alert if the string is a palindrome or not


// function palindromeOrNot(str) {
//   const arrayString = str.split("");
//   const reverseArray = arrayString.reverse();
//   const joinArray = reverseArray.join("");

//   if (str === joinArray) {
//     console.log("It is a palindrome");
//   } else {
//     console.log("It is not a palindrome");
//   }

// }

// const string = prompt("Let's Check if its a Palindrome");
// palindromeOrNot(string);


//Create a dog object that has four properties and three methods

// let dogHusky = {
//   color: "gray", 
//   age: 8, 
//   gender: "female", 
//   bread: "Husky"
// }

// /Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

// function SkateBoard(stakeBoardBrand, stakeBoardColor, stakeBoardDesign, stakeBoardWheels) {
//   this.brand = stakeBoardBrand
//   this.color = stakeBoardColor
//   this.design = stakeBoardDesign
//   this.wheels = stakeBoardWheels
//   this.flip = function() {
//     console.log("We did a kick Flip!!");
//   }
//   this.rail = function() {
//     console.log("We are raiding on the guard rail");
//   }
// }


// let luisBoard = new SkateBoard("Nike", "Black", "Carbon Fiber", "Red");

// console.log(luisBoard.flip);



// ----------------------- Class 26 Objects Lost Galaxy Review ----------------

//Create a dog object that has four properties and three methods

    // let dog = {};

// Making 4 Properties
    // dog.name = "shadow";
    // dog.breed = "Husky";
    // dog.color = "Black and White";
    // dog.gender = "Male";

// Making 3 METHODS
    // dog.bark = function() {
    //   console.log( "Woof Woof");
    // }

    // dog.bite = function () {
    //   console.log("I'm Bitting You!!!!");
    // }

    // dog.run = function() {
    //   console.log("I'm Sprinting all over the back yard!");
    // }
// Calling the METHODS
    // dog.bark();
    // dog.bite();
    // dog.run();

//Create a Pizza object that has four properties and three methods using "Object Literals"

// let pizza = {};

// Making 4 Properties
    // pizza.shape = "round";
    // pizza.origin = "Dominos";
    // pizza.topping = ["spinach", "onion", "jalapenos"];
    // pizza.sause = "tomato";

    // console.log(`Your pizza has ${pizza.topping[1]} on them`);

// Making 3 METHODS
    // pizza.sizzling = function() {
    //   alert("CareFull I'm Hot");
    // }

    // pizza.timer = function() {
    //   alert("Pizza is done");
    // }

    // pizza.doorBell = function() {
    //   console.log("Pizza delivery guy is here!!");
    // }

// Calling the METHODS
    // pizza.sizzling();
    // pizza.doorBell();
    // pizza.timer();

// *************** Making a Constructor (Old Way)************

// function MakeCar( carMake, carModel, carColor, numOfDoors ) {
//   this.make = carMake;
//   this.model = carModel;
//   this.color = carColor;
//   this.doors = numOfDoors;

//   this.honk = function(){
//     alert("BEEP BEEP FUCKER");
//   }

//   this.lock = function() {
//     alert(`Locked ${this.doors} doors!`);
//   }
// }

// Making a new Object using the Constructor above
    // let hondaCivic = new MakeCar ("Honda", "Civic", "Silver", 4 );
    // let teslaRoadster = new MakeCar('Telsa', 'Roadster', 'Red', 2 );


// ************************************************** ES6 CLASSES ************************************************************************
// Making a Constructor (NEW WAY)
    // class MakeCar {
    //   constructor(carMake, carModel, carColor, numOfDoors) {
    //     this.make = carMake;
    //     this.model = carModel;
    //     this.color = carColor;
    //     this.doors = numOfDoors;
    //   }

    //   honk() {
    //     alert("BEEP BEEP FUCKER!!");
    //   }

    //   lock() {
    //     alert(`Locked ${this.door} doors!`);
    //   }

    // }

// Making a new Object using the new ES6 Syntax
    // let hondaCivic = new MakeCar ( 'Honda', 'Civic', 'Silver', 4 );
    // let teslaRoadster = new MakeCar ('Telsa', 'Roadster', 'Red', 2 );

// ----------------------- Class 26 Objects Constructor Fun Review ----------------

//Create a constructor with 4 properties and 3 methods

// function House ( houseLocation, houseStorys, houseBuilt, houseColor ) {
//   this.location = houseLocation;
//   this.storys = houseStorys;
//   this.built = houseBuilt;
//   this.color = houseColor;

//   this.doorRing = function() {
//     alert('Someone is at the door!');
//   }
//   this.garageOpener = function() {
//     alert('Someone just opened the garage Doors!');
//   }

//   this.pourchLights = function() {
//     alert('Pourch lights turn on');
//   }
// }

// Making Stacy a House 
    // let stacyHouse = new House( "San Diego", 2, 2022, "Dark Blue");

// Putting the "Properties" of the Constructor to work 
    // console.log(`Stacy has a house in ${stacyHouse.location} which is ${stacyHouse.storys} storys tall!`);

// Making her sister a House
    // let mitchellHouse = new House('Texas', 2, 2020, 'Brown');

// Putting the "Properties" of the Constructor to work 
  // console.log(`Mitchell also has a house but she lives in ${mitchellHouse.location} and the color of the house is ${mitchellHouse.color}`);



// ------------------  Class 26 Working with APIs -----------

  //Get a dog photo from the dog.ceo api and place the photo in the DOM


// Class 26 2:20:00 Starts talking how this code works
// https://www.youtube.com/watch?v=WcSTeotmJtw&list=PLBf-QcbaigsJysJ-KFZvLGJvvW-3sfk1S&index=26&ab_channel=LeonNoel

// Dog API

    // fetch("https://dog.ceo/api/breeds/image/random")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data.message)
    //     document.querySelector('img').src = data.message;
    //   })
    //   .catch(err => {
    //     console.log(`error ${err}`)
    //   })

// Shots API

// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM.

      // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data);
      //   console.log(data.drinks);
      //   let myDrink = data.drinks[3];
      //   console.log(myDrink.strDrink);
      //   document.querySelector("img").src = myDrink.strDrinkThumb;
      //   document.querySelector("h1").innerHTML = myDrink.strDrink;
      //   let ingredients = [myDrink.strIngredient1, myDrink.strIngredient2, myDrink.strIngredient3, myDrink.strIngredient4 ]
      //   document.querySelector("h2").innerHTML = ingredients;
      // })
      // .catch(err => {
      //   console.log(`error ${err}`)
      // })

// ----------------------- Class 27 Objects netflix tv show Review ----------------


      //Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


// class Netflix{
//   constructor(showDate, showCategory, showRated, numOfSeries) {
//     this.date = showDate;
//     this.category = showCategory;
//     this.rated = showRated;
//     this.numOfSeries = numOfSeries; 
//   }
//   play() {
//     console.log('Playing...');
//   }
//   stop() {
//     console.log('Stopping');
//   }
//   saveToList() {
//     console.log('Saved to PlayList');
//   }
// }

// let strangerThings = new Netflix(2020, 'Scary', '90%', 8 );

// console.log(strangerThings);



// Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLocaleLowerCase();
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// ------------------  Class 27 War Card Game -----------




// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLocaleLowerCase();
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// ------------------  Class 28 DnD Game -----------
// **************** LOOPS THOUGH AN ARRAY CLASS 28 1:16:00 ***************

//Example fetch using DnD5eAPI - place subclasses in ul
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//        console.log(data);
//       //  document.querySelector('h4.one').innerHTML = data.subclasses[0].name;
//       //  document.querySelector('h4.two').innerHTML = data.subclasses[1].name;
      
//       // Using for each to loop though the array.
//       data.subclasses.forEach(element => {
//         console.log(element.name)
//         // Creat an "li"
//         const li = document.createElement("li");
//         // Add text to "li"
//         li.textContent = element.name;
//         // append the "li" to the "ul"
//         document.querySelector('ul').appendChild(li);
//       }); 
//       })
//       .catch(err => { 
//           console.log(`error ${err}`)
//       });
// }


// ------------------  Class 28 Book Tracker -----------


// document.querySelector('button').addEventListener('click', getFetch)
// // Getting data from local storage on page load
// document.querySelector('h2').innerHTML = localStorage.getItem("books")


// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://openlibrary.org/isbn/${choice}.json`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.title);
//         // put title into local Storage
//         localStorage.setItem("books", data.title);
//         document.querySelector('h2').innerHTML = localStorage.getItem("books");
       
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// ------------------  Class 29 boulder-badge -----------

// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

// bulbasaurRareCandy = 11;
// caterpieRareCandy = 6;
// weedleRareCandy = 6;
// totalRareCandy = bulbasaurRareCandy + caterpieRareCandy + weedleRareCandy;
// console.log(totalRareCandy);



//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

// let temperature = Number(prompt("Who hot is it?"));
// function fahrenheit2Celcius() {
//   let celsius = (temperature - 32) * 5/9;
//   return celsius;
// }

// console.log(fahrenheit2Celcius());

// if (fahrenheit2Celcius() > 0) {
//   console.log('Charmander is able to fight');
// } else {
//   console.log(`It's to cold Charmander cant fight right now`);
// }


//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

// let numOfPokemon = prompt("How many Pokemon do you have?");
// for (let i = 0; i < numOfPokemon; i++ ) {
//   console.log("Pikachu I choose you");
// }



// ------------------  Class 29 Cascade-badge -----------


//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
// function reversePokemon(listOfPokemon) {
//   console.log(listOfPokemon.reverse());

//   for(let i = 0; i < listOfPokemon.length; i++) {
//     console.log(listOfPokemon[i]);
//   }

// }

// reversePokemon(["Pikachu", "Charmander", "Snorlax"]);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// let arrayA = [1,2,3,4,5];
// let arrayB = [1,2,3,4,5,6,7,8,9];

// if (condition) {
  
// } else {
  
// }



//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

















