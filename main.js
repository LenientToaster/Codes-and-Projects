function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
  function handleClick() {
    const things = $(".thing");
    // things.toggleClass("--now-it-is-red");
  }

  let twoDigitNumber = getRandomNumber(10, 99);
  const twoDigitNumberOutput = $("#number1a");
  twoDigitNumberOutput.html(twoDigitNumber);

  let threeDigitNumber = getRandomNumber(100, 999);
  const threeDigitNumberOutput = $("#number1b");
  threeDigitNumberOutput.html(threeDigitNumber);

  // let threeDigitNumber = getRandomNumber(100, 999);
  // const threeDigitNumberOutput = $("#number1b");
  // threeDigitNumberOutput.html(threeDigitNumber);

  // let threeDigitNumber = getRandomNumber(100, 999);
  // const threeDigitNumberOutput = $("#number1b");
  // threeDigitNumberOutput.html(threeDigitNumber);

  let operatorSelector = ("#add","#subtract","#multiply","#divide");
  const operatorSelectorOutput = $("#operator1");
  operatorSelectorOutput.html(threeDigitNumber);

  

  const toggleButton = $("#toggle-colour");
  toggleButton.on("click", handleClick);

  const specialThing = $("#special-thing");
  const output = $("#key-press");

  $(document).on("keydown", function (event) {
    output.html(event.key);
    switch (event.key) {
      case "a":
        console.log("YOU PRESSED THE a KEY");
        break;
      case "b":
        console.log("YOU PRESSED THE b KEY");
        break;
    }
  });
});
