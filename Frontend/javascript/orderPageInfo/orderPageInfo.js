var companyID = 4; // which comes after the company logs in the system
var orderID;
var clientSSN;

async function showOrder(orderId) {
  orderID = orderId;
  const order = await getOrder(orderID);
  clientSSN = order.ClientSSN;
  const client = await getClient(clientSSN);

  document.getElementById("order-client-name").value = client.Name;
  document.getElementById("order-id").value = order.id;
  document.getElementById("order-status").value = order.Status;
  document.getElementById("order-price").value = order.OrderPrice;
  document.getElementById("order-start-point").value =
    order.Start_Point_Location;
  document.getElementById("order-end-point").value = order.End_Point_Location;
  document.getElementById("order-size").value = order.Size;
  document.getElementById("order-street").value = order.Street;
  document.getElementById("order-request-date").value = order.dateOfRequest;
  document.getElementById("order-postal-code").value = order.postalCode;
  document.getElementById("order-description").value = order.Description;
  document.getElementById("client-name").value = client.Name;
  document.getElementById("client-phone-number").value = client.PhoneNumber;
  document.getElementById("client-email-address").value = client.Email;
}

var orderStatus = "Pending";
async function setPending() {
  orderStatus = "Pending";
  await updateStatus(orderID, orderStatus);
  document.getElementById("order-status").value = orderStatus;
  location.reload();
}
async function setInProgress() {
  orderStatus = "In progress";
  await updateStatus(orderID, orderStatus);
  document.getElementById("order-status").value = orderStatus;
  location.reload();
}
async function setDelivered() {
  orderStatus = "Delivered";
  await updateStatus(orderID, orderStatus);
  document.getElementById("order-status").value = orderStatus;
  location.reload();
}

async function declineOrder() {
  await deleteOrder(orderID, companyID);
  location.reload();
}
