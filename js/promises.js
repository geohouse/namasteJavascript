// This is currently from learn javascript

const waitTime = (timeToWait) => {
  //The ()=>{} within the Promise is the executor and it runs immediately.
  // If given, the executor's first argument is the name of a function that is called when the promise has done what it needs. Usually called `resolve`.
  // Any arguments to this return function are what get returned as arguments to the callback function in the .then() Promise method once the promise has resolved
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timeToWait + 1);
    }, timeToWait);
  });
};

waitTime(1000).then((returnedTime) =>
  console.log(`The returned time is: ${returnedTime}`)
);
