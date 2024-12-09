/*
1. Promise.all : - 
Let’s say we want many promises to execute in parallel and wait until all of them are ready.

For instance, download several URLs in parallel and process the content once they are all done.

That’s what Promise.all is for.

The syntax is:

let promise = Promise.all(iterable);
Promise.all takes an iterable (usually, an array of promises) and returns a new promise.

The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
*/

//Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.
//If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error. 
//If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.
//Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”. EX: Promise.all([p1, 2, 3 ]) =>> [val1, 2, 3]


