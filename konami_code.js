const code = [38, 38, 40, 40];
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener("keydown", onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = e.which;
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

init();
