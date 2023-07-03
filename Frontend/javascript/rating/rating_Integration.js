async function setRate(
  clientSSN,
  offerID,
  SecurityRate,
  SafetyRate,
  TimeRate,
  DeliveryPriceRate
) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    clientSSN,
    offerID,
    SecurityRate,
    SafetyRate,
    TimeRate,
    DeliveryPriceRate,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch("https://waslni.azurewebsites.net/rate_offer", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
