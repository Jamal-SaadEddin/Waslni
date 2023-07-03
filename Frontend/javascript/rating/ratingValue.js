let star = document.querySelectorAll(".inp");
let showValue = document.querySelector("#rating-value");

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    i = this.value;

    showValue.innerHTML = i + " out of 5";
  });
}
