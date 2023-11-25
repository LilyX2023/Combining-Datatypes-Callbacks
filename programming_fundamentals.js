//Write a ~1 sentence summary for each one

//DRY: To aviod repetition by utilizing programming constructs such as loops, functions, classes, and other abstractions whenever there is a reccurence of code.

//KISS: Keep to code simple and stupid so that the code is maintainable.

// Avoid creating a YAGNI: Don't create the function if you don't need it.

// Do the simplest thing that could possibly work: Go for the simplest design that works when programming

// Don't make me think: It is important to write code that is easily comprehensible with less or none congnitive effort. 

// Write code for the maintainer: Prioritzing clarity and documentation to make it easier for a stranger to maintain in the future.

// Single responsibility principle: To ensure that each component of code performs a single, well-defined task.

// Avoid premature optimization: Only optimize code when it's functional but slower than expected.

// Separation of concerns: The distinct areas of functionality are handled by minimally overlapping modules of code


// Which ones surprise you (if any)? Single responsibility principle. I thought ppl write multitasking code if they are very seasoned SDE.

// Which one is currently giving you the most struggle? DRY is giving me most struggle at this stage.

///////////////////////////////////////////////////

// Function f have l as a parameter
const f = l => {
    //let the variable es = 0 p = 0, c = 1, n = 0
    let es = 0, p = 0, c = 1, n = 0
    // A while loop, it loops when c less or equal to l
    while (c <= l) {
      n = c + p; // Calculates the number n by adding the number c and number p.
      [c, p] = [n, c] // To have the c equal to n's value and updates the p and c numbers for the next iteration.
      es += (c % 2 === 0) ? c : 0 // If c is an even number (c % 2 === 0 is true), then es is incremented by c. If c is not an even number, then es is incremented by 0
    }
    return es // return the value of es
  }
  
  console.log(f(55))

//In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand? 

//The name of this function should be evenFibonacciNumSum

//If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

//f2

//Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

//The semi-colon is necessary

  /////////////////////////////////////////////

