//setTimeout
console.log("Order ice cream");

setTimeout(()=> {
    console.log("Eat Ice Cream");
},3000);

console.log("Play Games");

//promise keyword

let iceCream = new Promise((resolve, reject)=>{ // new promise = I promise something
    reject("Ice Cream Ready")
})

iceCream.then(message =>{ // .then = tell me the result 
    console.log(message)
})

// async funtion
//this function will get the data from backend (slow work).

// Await
// wait for the data but dont stop the app. Keeps showing animation/loader.

async function loaduser(){
    let response = await  fetch("");
    let users = await response.json();
    console.log(users);
}
loaduser()

/*
 Important:-
 async/await and Promise do the same work
 Async/awaits is just a cleaner way to write promise code.
*/
