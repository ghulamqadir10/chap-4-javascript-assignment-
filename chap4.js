// // assignment 04

// counter

let counter= localStorage.getItem("counter");
if (counter === null){
    counter=0;
}
else{
    counter= parseInt(counter)
};
counter++
 localStorage.setItem("counter",counter);
alert("You have visited " + counter + " times ");

// let counter= localStorage.getItem("counter")
// if (counter === null){
//     counter=0;
// }
// else {
// counter =parseInt(counter);
// }
// counter++;
// localStorage.setItem("counter",counter);
// alert("you have visited " + counter + " times " );
//  declare 3 variables in one statments;


let student={
name: "ghulam qadir",
age: 20,
institution: "saylani mass it training",
};
console.log(student);

// 4 legal and illegal variables;

let legal1 = "$car"
let legal2 = "_car"
let legal3 = "car"
let legal4 = "$my_div"


// illegal variables
let illegal1="#car"
let illegal2="@car"
let illegal3="#my@div"
let illegal4="1num"


// text content to show in browser  

 document.write("<h2 class='hello'>  Rules for naming JS variables  </h2> " + "<br>" )
 document.write(" <p class='hello'> 1- variable are only contain $ and _ for example $my_name" + "<br>" )
 document.write("<p class='hello'> 2-variable must begin with $,letter or _ . for example $name , _name or name" + "<br>" )
 document.write("<p class='hello'> 3- variables are case sensitive" + "<br>" )
 document.write("<p class='hello'> 4- variables name should not be js keyword" + "<br>" )
