async function getLowestPrice(start, end) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"startCity":"${start}","endCity":"${end}"}`,
  };

  let data;
  await fetch("https://waslni.azurewebsites.net/Lowestprice", options)
    .then((response) => response.json())
    .then((response) => (data = response.results))
    .catch((err) => console.error(err));
  return data;
}

async function getHighestPrice(start, end) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"startCity":"${start}","endCity":"${end}"}`,
  };

  let data;
  await fetch("https://waslni.azurewebsites.net/Highestprice", options)
    .then((response) => response.json())
    .then((response) => (data = response.results))
    .catch((err) => console.error(err));
  return data;
}

async function getFastDeliveries(start, end) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"startCity":"${start}","endCity":"${end}"}`,
  };

  let data;
  await fetch("https://waslni.azurewebsites.net/FastTimeDeliveries", options)
    .then((response) => response.json())
    .then((response) => (data = response.results))
    .catch((err) => console.error(err));
  return data;
}

async function getVillageDeliveries(start, end) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"startCity":"${start}","endCity":"${end}"}`,
  };

  let data;
  await fetch("https://waslni.azurewebsites.net/Villagedelivery", options)
    .then((response) => response.json())
    .then((response) => (data = response.results))
    .catch((err) => console.error(err));
  return data;
}

async function getCompanyName(companyID) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"id":"${companyID}"}`,
  };

  let data;
  await fetch("https://waslni.azurewebsites.net/getcompanyname", options)
    .then((response) => response.json())
    .then((response) => (data = response[0].name))
    .catch((err) => console.error(err));
  return data;
}

async function getRatedCompanies(according, start, end) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data;
  await fetch(
    `https://waslni.azurewebsites.net/best_rate/${according}/${start}/${end}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => (data = response))
    .catch((err) => console.error(err));
  return data;
}

async function insertRequest(
  clientSSN,
  companyID,
  offerID,
  size,
  discription,
  postal,
  street,
  date,
  start,
  end,
  price
) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"client_ssn":"${clientSSN}","companyId":${companyID},"offerid":${offerID},"size":"${size}","discription":"${discription}","postal":"${postal}","street":"${street}","date":"${date}","start":"${start}","end":"${end}","price":"${price}"}`,
  };

  await fetch("https://waslni.azurewebsites.net/insertRequest", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  openPopup();
}

async function getCompanyIdByOfferId(offerID) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"offerid":${offerID}}`,
  };

  let data;
  await fetch(
    "https://waslni.azurewebsites.net/company_id_from_offer_id",
    options
  )
    .then((response) => response.json())
    .then((response) => (data = response[0].CompanyID))
    .catch((err) => console.error(err));
  return data;
}
