const rate = document.querySelectorAll(".rate");

for (let i = 0; i < rate.length; i++) {
  const options = {
    attributes: true,
  };

  function callback(mutationList, observer) {
    mutationList.forEach(async function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const modalBody = rate[i].childNodes[1].childNodes[1].childNodes[3];
        if (rate[i].classList.contains("show")) {
          modalBody.appendChild(document.createElement("div"));
          modalBody.lastChild.setAttribute("id", "starsRating");
          $(function () {
            $("#starsRating").load("stars.html");
          });
        } else {
          await setRateValue(document.getElementById("rating-value").innerText);
          modalBody.lastChild.remove();
        }
      }
    });
  }

  const observer = new MutationObserver(callback);
  observer.observe(rate[i], options);
}
