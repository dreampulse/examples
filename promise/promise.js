/**
 *  - JavaScript: Event/driven architecture
 *  - Es gibt in JS keine Möglichkeit syncrone / blockierende Aufrufe durchzuführen
 *  - Für für asyncrone (einmalige) Events kann man sich mit einer Callback Funktion registieren,
 *    die gerufen wird wenn das Event eintritt
 *
 */

var Q = require('q');

var asyncFunction = function(callback) {
  // async
  setTimeout(function() {
    callback('some result value');
  }, 500);  // return result after 0.5sec
};


var asyncFunctionN = function(n, callback) {
  // async
  setTimeout(function() {
    callback('some result value of function ' + n);
  }, 500);  // return result after 0.5sec
};

var asyncFunction1 = function(callback) {
  return asyncFunctionN(1, callback);
};

var asyncFunction2 = function(callback) {
  return asyncFunctionN(2, callback);
};

var asyncFunction3 = function(callback) {
  return asyncFunctionN(3, callback);
};



// example 1
var eventHandler = function (result) {
  // react to the event

};
// call asyncFunction
asyncFunction(eventHandler);


// example 2: using anonymous functions
asyncFunction(function(result) {
  // react to async event
  console.log(result);
});


// example 3: three calls after each other
asyncFunction1(function(result1) {
  // after async call finished call another

  console.log(result1);

  asyncFunction2(function(result2) {
    // the call even one more

    console.log(result2);

    asyncFunction3(function(result3) {
      // ...
      // "CALLBACK HELL"

      console.log(result3);

    });
  });
});


// how to deal callback hell

// szenarien:
// A -> B -> C -> D (sequential)
// A, B, C and after all call D  (fork and join)

// concurrency abstraction (Promises (or Futures))

// eine asyncrone Funktion gibt anstatt eines Ergebnis (nimmt kein callback an), sondern gibt eine Promise (ein versprechen zurück)
// Die Funktion verspricht nun vlt ein Ergebnis zu einem später Zeitpunkt zurück zu geben
// entweder erfolg oder fehlschlag

// http://promises-aplus.github.io/promises-spec/  (spec)

//create a promise
var asyncFunctionQ = function(n) {
  var defer = Q.defer();

  setTimeout(function() {
    defer.resolve('some result value of function ' + (n || 0));
  }, 500);  // return result after 0.5sec

  return defer.promise;
};

// using a promise
asyncFunctionQ()
  .then(function(res){
    console.log(res);
  })
  .fail(function(err) {
    // someting went wrong
  });

// jede promise ist then-able (implementiert immer then, fail)

// sequental call of async functions

Q()
  .then(function() {
    return asyncFunctionQ(1);
  })
  .then(function(result1) {

    return asyncFunctionQ(2);
  })
  .then(function(result2) {

    return asyncFunctionQ(3);
  })
  .then(function(result3) {

  });


// join example

Q.all([
  asyncFunctionQ(1),
  asyncFunctionQ(2),
  asyncFunctionQ(3)
])
  .then(function(res) {  // wenn alles geklappt hat
    result1 = res[0];
    result2 = res[1];
    result3 = res[2];
    // ..
  });

Q.all([
  asyncFunctionQ(1),
  asyncFunctionQ(2),
  asyncFunctionQ(3)
])
  .spread(function(result1, result2, result3) {  // spread als ersatz für then

  });
