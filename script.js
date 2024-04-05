//let fname=prompt("give fname ");
//let lname=prompt("give lmname ");
//let msg="hello "+fname+" "+lname+" you are using js!!"
//alert(msg);
let favmovie = "avengers";
let guess;

while ((guess !== favmovie) && (guess !== "quit")) {
    guess = prompt("Guess my favourite");
}
    
if (guess === favmovie) {
console.log("congrats baby");
}


else (guess === "quit") ; 
{
    console.log("you quitted");
}