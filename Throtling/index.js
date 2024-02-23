// throtling
/*Throttling in JavaScript is a technique used to limit the rate at which a function can be called. This is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.
For example, if you have a function that updates the position of an element on the screen based on the scroll position, you might want to throttle it so that it is only called every 100 milliseconds. This will prevent the function from being called too frequently, which can improve the performance of the page.
There are a few different ways to implement throttling in JavaScript. One common approach is to use a timer. For example, the following code will throttle a function so that it is only called every 100 milliseconds:*/

function throttle(fn, delay) {
    let timer = null;
  
    return function() {
      if (timer === null) {
        timer = setTimeout(() => {
          fn();
          timer = null;
        }, delay);
      }
    };
  }