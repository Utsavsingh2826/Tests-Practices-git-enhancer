// callback-vs-promise.js

// Callback
function getDataCallback(cb) {
  setTimeout(() => cb("Data via Callback"), 1000);
}

// Promise
function getDataPromise() {
  return new Promise(resolve => setTimeout(() => resolve("Data via Promise"), 1000));
}

getDataCallback(console.log);
getDataPromise().then(console.log);
