const btn = document.getElementById("btn");

let clicked = 0;
btn.addEventListener("click", () => {
  clicked++;
  btn.style.backgroundColor = "red";
});
