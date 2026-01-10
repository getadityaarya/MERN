//Task 1: Create a Promise that resolves with the message 'Hello JavaScript'. Print it using .then().
let message = new Promise((resolve, reject)=>{
    resolve("Hello Javascripts")
}) 
message.then(print =>{
    console.log(print)
})


// Task 2: Create a Promise that rejects with the message 'Error occurred'. Handle it using .catch().
let myPromise = new Promise((resolve, reject) => {
    reject("Error occurred");
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Task 3: Create a Promise that resolves after 3 seconds using setTimeout.


// Task 4: Write an async function that returns the message 'Async is easy' and print it.
async function printfunction(){
    console.log("Async is easy")
}
printfunction()

// Task 5: Use async/await with try/catch to handle a Promise that rejects.
async function handlePromise() {
  try {
    let promise = new Promise((resolve, reject) => {
      reject("Something went wrong");
    });

    let result = await promise;
    console.log(result);

  } catch (error) {
    console.error("Error:", error);
  }
}

handlePromise();


// Task 6: Fetch user data from https://jsonplaceholder.typicode.com/users using async/await.
async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchUsers();

// Task 7: Convert the fetch async/await code into Promise (.then) style.
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });


// Task 8: Show 'Loading...' before fetch and 'Data Loaded' after fetch using console.log.
async function fetchWithLoading() {
  try {
    console.log("Loading...");

    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    console.log("Data Loaded");
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
  }
}

fetchWithLoading();


// Task 9: Create a small app logic where data is fetched and stored in localStorage.
async function fetchAndStore() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    localStorage.setItem("users", JSON.stringify(data));
    console.log("Data stored in localStorage");

  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndStore();

//To read data from localStorage:
let users = JSON.parse(localStorage.getItem("users"));
console.log(users);



