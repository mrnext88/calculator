let btns = document.querySelectorAll(".keys");
let calculated = false;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let results = document.querySelector("#output");

    if (btn.innerText == "=") {
      results.innerText = eval(results.innerText);
      calculated = true;
    } else {
      if (calculated) {
        results.innerText = "";
        calculated = false;
      }
      results.innerText += btn.innerText;
    }
  });
});
