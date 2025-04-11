function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// go to view -> output -> select github copilot log.
// you will see the following log, which is the similar code found by github copilot

// 2025-04-11 14:47:40.609 [info] file:///d%3A/copilot-training/js/fizz-buzz.js Similar code at  [Ln 1, Col 22] for (let i = 1; i <= 100; i++) {  if (i % 3 === 0 && i % 5 === 0) {  conso...
// 2025-04-11 14:47:40.609 [info] License: unknown, URL: https://github.com/marcperez/Katas/blob/868e898e2e64eacd504490b70ea21779f51eca23/fizzbuzz/fizzbuzz.js
// 2025-04-11 14:47:40.609 [info] License: unknown, URL: https://github.com/the8thsign/Fizzbuzz/blob/a177e65026f12cb6457f6cc680946f6d20cbb40f/Fizzbuzz.js
// 2025-04-11 14:47:40.609 [info] License: unknown, URL: https://github.com/svodnik/JS-SF-10-homework/blob/9c2d0436a235dc9dbe806a1ad28a2ae2c2f9d493/nathalia-nsainez/Homework-1/fizzbuzz/app.js
