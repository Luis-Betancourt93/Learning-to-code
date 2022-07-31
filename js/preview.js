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






