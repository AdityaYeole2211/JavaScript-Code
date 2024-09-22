//In the early days of the web, it was difficult to perform asynchronous requests across websites; developers had to use clumsy approaches to interact across multiple networks.

//Internet Explorer 5 changed this in 1998 with the introduction of XMLHttpRequest, an API meant to overcome this limitation. Initially, XMLHttpRequest was designed to fetch XML data via HTTP, hence the name. Sometime after it was released, however, support for other data formats — primarily JSON, HTML, and plaintext — was added.

//The XMLHttpRequest API worked like a charm back then, but as the web grew, it became so difficult to work with that JavaScript frameworks, notably jQuery, had to abstract it to make implementation easier and success/error handling smoother

//In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, and it has subsequently become the de facto standard for making asynchronous calls in web applications. One significant advantage Fetch has over XMLHttpRequest is that it leverages promises, allowing for a simpler and cleaner API while avoiding callback hell.

//Though the Fetch API has been around for a while now, it hasn’t been included in Node.js core due to some limitations.
//it was noted that the browser’s Fetch API implementation is dependent on a browser-based Web Streams API and the AbortController interface (for aborting fetch requests), which wasn't available in Node.js until recently. As such, it was difficult to decide on the best approach to include it in Node.js core.
//the request module was the most popular method for making HTTP requests in Node. But the JavaScript ecosystem at large quickly evolved, and newly introduced patterns made request obsolete. A crucial example here is async/await; there was no provision for this in the request API, and the project was later deprecated due to these limitation
//The Fetch API is provided as a high-level function, and in its most basic version, it takes a URL and produces a promise that resolves to the response:
fetch("http://example.com/api/endpoint")
  .then((response) => {
    // Do something with response
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });
//You may also change how the fetch process is carried out by appending an optional object after the URL, which allows you to change things like request methods, request headers, and other options. The request's response is an object that contains the returned metadata for our request, which consists of elements like response data, headers, request date, and so on.

// The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available. The promise resolves to the Response object representing the response to your request.

//VVIMP: 
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.


//REFER DIAGRAM IN WORD FILE 