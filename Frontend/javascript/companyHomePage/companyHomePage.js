var companyID = 4; // which comes after the company logs in the system

async function showOrders() {
  document.getElementsByClassName("trackContainer")[0].style.display = "none";
  document.getElementsByClassName("offersContainer")[0].style.display = "none";
  document.getElementsByClassName("ordersContainer")[0].style.display = "block";

  const orders = await getOrders(companyID);
  let clientNames = [];
  for (let i = 0; i < orders.length; i++) {
    clientNames[i] = await getClientName(orders[i].ClientSSN);
  }

  const ordersRows = orders
    .map(
      (order, i) =>
        `<tr>
        <td>
         ${clientNames[i]}
        </td>
        <td>
         ${order.Start_Point_Location}
        </td>
        <td>
         ${order.End_Point_Location}
        </td>
        <td>
         ${order.Street}
        </td>
        <td>
         ${order.postalCode}
        </td>
        <td>
        $${order.OrderPrice}
        </td>
        <td>
         ${order.dateOfRequest}
        </td>
        <td>
         ${order.Status}
        </td>
    </tr>`
    )
    .join("");
  document.getElementById("ordersTable").innerHTML = ordersRows;
}

async function showOffers() {
  document.getElementsByClassName("trackContainer")[0].style.display = "none";
  document.getElementsByClassName("offersContainer")[0].style.display = "block";
  document.getElementsByClassName("ordersContainer")[0].style.display = "none";

  const offers = await getOffers(companyID);
  const offersRows = offers
    .map(
      (offer) =>
        `<tr>
        <td>
         ${offer.id}
        </td>
        <td>
         ${offer.startCity}
        </td>
        <td>
         ${offer.endCity}
        </td>
        <td>
         ${offer.vehicleSize}
        </td>
        <td>
         $${offer.standardPrice}
        </td>
        <td>
         $${offer.overheadPriceExpress}
        </td>
        <td>
         ${offer.timeDeliverExpress}
        </td>
        <td>
         $${offer.overheadPriceVillage}
        </td>
    </tr>`
    )
    .join("");
  document.getElementById("offersTable").innerHTML = offersRows;
}

function createOffer() {
  var offer = {
    StartCity: document.getElementById("start-city").value,
    EndCity: document.getElementById("end-city").value,
    VeichelSize: VehicleSize,
    priceStandard: document.getElementById("standard-price").value,
    overheadPriceExpress: document.getElementById("overhead-fast").value,
    overheadPriceVilage: document.getElementById("overhead-village").value,
    timeDelivarExpress: document.getElementById("time-for-fast-delivery").value,
  };
  newOffer(offer, companyID);
}

var VehicleSize = "Small";
function smallSize() {
  VehicleSize = "Small";
}
function meduimSize() {
  VehicleSize = "Meduim";
}
function bigSize() {
  VehicleSize = "Big";
}

async function getCompanyInfo() {
  const companyInfo = await getInfo(companyID);

  document.getElementById("company-name").value = companyInfo.name;
  document.getElementById("company-phone-number").value = companyInfo.phone;
  document.getElementById("company-email-address").value = companyInfo.Email;

  document.getElementsByClassName("companyName")[0].innerText =
    companyInfo.name;
  document.getElementsByClassName("companyName")[1].innerText =
    companyInfo.name;
}
