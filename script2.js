//let yourName="Kim";
//if(confirm("Are you "+ yourName+ "?")){
 //   console.log("Hello " + yourName);
//}


//console.log("1" == 1); //true
//console.log("1" === 1); //false

//let number = 99;
//if(number == 99){
//    console.log ==("The number is correct");
//}

//let num1 = 1;
//let num2 =2;

//if(num1 < num2){
    // if you get here, the statement was true
 //   console.log("num1 is smaller than num2");
//}else{
//    console.log("num2 is smaller than num1");
//}

//let num1 = 1;
//let num2 = 2;
//let num3 = 3;
//let notTrue = false;

//if(num1<num2 && num3>num2){
 //   console.log("num1 is smaller than num2 AND num3 is larger than num2");

//}

//if(num1 == 1 || num2 == 1 || num3 == 1){
//    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
//}
//if(!notTrue){
 //   console.log("not not true!");
//}

// Exercise 
// create a simple login using the prompt

// 1) get from the prompt the variable var email.

// 2) get from the prompt and store the var password.

// 3) display on the console the values (email and password)

// 4) Create an if statement to know if the email is equal to admin@admin.com and password should be Test1234

// 5) If the email and password are correct, you should display on the HTML the next message:
//Welcome + email

// 6) if the credentials are not correct you should display on the console:
//invalid credentials


let userEmail = prompt("Enter your email: ");
let Password = prompt("Enter your password: ");
console.log(userEmail,Password);

if(userEmail == "admin@admin.com" && Password == "Test1234"){
    console.log("valid email");
    document.write("Welcome " + userEmail);
}else{
    document.write("invalid credentials");
}

