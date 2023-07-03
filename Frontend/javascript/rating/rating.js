var clientSSN = 406820142; // which comes after the client logs in the system
var offerID = 51;

var SecurityRate = 0,
  SafetyRate = 0,
  TimeRate = 0,
  DeliveryPriceRate = 0;

var rateValue = 0;

function setDeliverySecurity() {
  SecurityRate = rateValue;
}

function setDeliverySafety() {
  SafetyRate = rateValue;
}

function setDeliveryTime() {
  TimeRate = rateValue;
}

async function setDeliveryPrice() {
  DeliveryPriceRate = rateValue;
  setRate(
    clientSSN,
    offerID,
    SecurityRate,
    SafetyRate,
    TimeRate,
    DeliveryPriceRate
  );
}

function setRateValue(str) {
  var regex = /[+-]?\d+(\.\d+)?/g;
  var floats = str.match(regex).map(function (v) {
    return parseFloat(v);
  });
  rateValue = floats[0];
}
