let min = 100;
let max = 999;

// let firstNumber = Math.floor((Math.random() * 100) + 1);
// let secondNumber = Math.floor((Math.random() * 100) + 1);

function getRandomNumberBetween(){
  return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function() {
  $("#1stnum").html(getRandomNumberBetween());
  $("#2ndnum").html(getRandomNumberBetween());
})  

console.log(getRandomNumberBetween());

// //   $(document).on("keydown", function (event) {
// //     output.html(event.key);
// //     switch (event.key) {
// //       case "a":
// //         console.log("YOU PRESSED THE a KEY");
// //         break;
// //       case "b":
// //         console.log("YOU PRESSED THE b KEY");
// //         break;
// //     }
// //   });
// // });
