async function getOrder(orderID) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data;
  await fetch(
    `https://waslni.azurewebsites.net/orderSearchById/${orderID}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (data = result.orders[0]))
    .catch((error) => console.log("error", error));

  return data;
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

async function updateStatus(orderID, orderStatus) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Status: orderStatus,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(`https://waslni.azurewebsites.net/update_order/${orderID}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

async function deleteOrder(orderID, companyID) {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  await fetch(
    `https://waslni.azurewebsites.net/delete_order/${orderID}/${companyID}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
