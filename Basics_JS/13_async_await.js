// Define the URL from which to fetch data
let url = "https://jsonplaceholder.typicode.com/posts/180";

// Define an asynchronous function to fetch data from URL
async function getData(url) {
  try {
    // fetch data from the specifice URL
    let res = await fetch(url); //it return one response 

    // Consume the response to JSON format

    let data = await res.json();
    console.log(data);

  } catch (err) {
    console.log(err.message);
  }
}

// Call getData function with the URL to fetch and log data
getData(url);
