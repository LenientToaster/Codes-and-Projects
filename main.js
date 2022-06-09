function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function () {
  function handleClick() {
    const things = $(".thing");
    // things.toggleClass("--now-it-is-red");
  }

  let twoDigit = getRandomNumber(10, 99);
  const twoDigitNumberOutput = $("#number1a");
  twoDigitNumberOutput.html(twoDigit);

  let threeDigit = getRandomNumber(100, 999);
  const threeDigitNumberOutput = $("#number1b");
  threeDigitNumberOutput.html(threeDigit);

  // let threeDigitNumber = getRandomNumber(100, 999);
  // const threeDigitNumberOutput = $("#number1b");
  // threeDigitNumberOutput.html(threeDigitNumber);

  // let threeDigitNumber = getRandomNumber(100, 999);
  // const threeDigitNumberOutput = $("#number1b");
  // threeDigitNumberOutput.html(threeDigitNumber);

  // let operatorSelector = ("#add","#subtract","#multiply","#divide");
  // const operatorSelectorOutput = $("#operator1");
  // operatorSelectorOutput.html(operatorSelector);

$("button","#add").on("click",function() {
  $("operator1").html("<p> + </p>");
  })
})

  // switch $("#operator1") {
  //   case $("button.add").click():
  //     $("#operator1").html("+");
  //     break;

  //     case $("button.subtract").click():
  //     $("#operator1").html("-");
  //     break;
  // }

  // console.log(operator)

//   const toggleButton = $("#toggle-colour");
//   toggleButton.on("click", handleClick);

//   const specialThing = $("#special-thing");
//   const output = $("#key-press");

//   $(document).on("keydown", function (event) {
//     output.html(event.key);
//     switch (event.key) {
//       case "a":
//         console.log("YOU PRESSED THE a KEY");
//         break;
//       case "b":
//         console.log("YOU PRESSED THE b KEY");
//         break;
//     }
//   });
// });
