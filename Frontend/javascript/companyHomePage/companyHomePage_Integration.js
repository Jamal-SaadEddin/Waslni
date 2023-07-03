function getName(companyID) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://waslni.azurewebsites.net/compannyName/${companyID}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

async function getInfo(companyID) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data;

  await fetch(`https://waslni.azurewebsites.net/compannyInfo/${companyID}`, requestOptions)
    .then((response) => response.json())
    .then((result) => (data = result))
    .catch((error) => console.log("error", error));
  return data;
}

async function getOrders(companyID) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data;

  await fetch(
    `https://waslni.azurewebsites.net/companyOrders/${companyID}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result.orders;
    })
    .catch((error) => console.log("error", error));
  return data;
}

function getOrder(companyID, orderID) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://waslni.azurewebsites.net/orderInfo/${companyID}/${orderID}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

async function getOffers(companyID) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data;

  await fetch(
    `https://waslni.azurewebsites.net/companyOffers/${companyID}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (data = result.CompanyOffers))
    .catch((error) => console.log("error", error));
  return data;
}

function newOffer(offer, companyID) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(offer);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`https://waslni.azurewebsites.net/newOffers/${companyID}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

async function getClient(clientSSN) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data;
  await fetch(`https://waslni.azurewebsites.net/clientInfo/${clientSSN}`, requestOptions)
    .then((response) => response.json())
    .then((result) => (data = result))
    .catch((error) => console.log("error", error));
  return data;
}

async function getClientName(clientSSN) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"SSN":${clientSSN}}`,
  };

  let data;
  await fetch("https://waslni.azurewebsites.net/name_from_ssn", options)
    .then((response) => response.json())
    .then((response) => (data = response[0].Name))
    .catch((err) => console.error(err));
  return data;
}
