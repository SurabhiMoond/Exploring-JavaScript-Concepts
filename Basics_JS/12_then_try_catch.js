// We're getting data from a certain web address.
let url = 'https://jsonplaceholder.typicode.com/posts/1';

// We're trying to get some data from JSON.
let p = fetch(url);
console.log(p);

// We're getting data from JSON. After that, we're converting that data to a form we can use.

fetch(url)
  .then(res => res.json()) // Converting data to a usable form
  .then(data => new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(data); // Showing the converted data
    }, 5000)//  we're waiting for 5 seconds before we do anything with it.
  }))
  .then((d) => console.log(d)) // will logging the converted data
  .catch(err => console.log(err)); // If something goes wrong, it will excute.

/***************************************************/


function demo() {
  try {
    console.log(obj.x); // We're trying to look at a certain piece of information.
    console.log("Hummm"); 

  } catch(err) {
    console.log(err.message); // If we can't get that information, we'll get the error message.
  }
  
}

demo();

console.log("Hello"); 
