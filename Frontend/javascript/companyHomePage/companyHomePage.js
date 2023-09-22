var companyID = 4; // which comes after the company logs in the system

async function showOrders() {
  document.getElementsByClassName("trackContainer")[0].style.display = "none";
  document.getElementsByClassName("offersContainer")[0].style.display = "none";
  document.getElementsByClassName("ordersContainer")[0].style.display = "block";

  let orders = await getOrders(companyID);
  if (orders === undefined) {
    orders = [
      {
        ClientSSN: 1001,
        Start_Point_Location: "Nablus",
        End_Point_Location: "Jenin",
        Street: "AlQuds",
        postalCode: "P500484",
        OrderPrice: "50",
        dateOfRequest: "15/9/2023",
        Status: "Pending",
      },
      {
        ClientSSN: 1002,
        Start_Point_Location: "Nablus",
        End_Point_Location: "Ramallah",
        Street: "Al-Ersal",
        postalCode: "P450494",
        OrderPrice: "35",
        dateOfRequest: "22/9/2023",
        Status: "Pending",
      },
      {
        ClientSSN: 1003,
        Start_Point_Location: "Ramallah",
        End_Point_Location: "Hebron",
        Street: "Yafa",
        postalCode: "P900844",
        OrderPrice: "70",
        dateOfRequest: "20/9/2023",
        Status: "In progress",
      },
      {
        ClientSSN: 1004,
        Start_Point_Location: "Qalqilia",
        End_Point_Location: "Jenin",
        Street: "AlQuds",
        postalCode: "P500484",
        OrderPrice: "20",
        dateOfRequest: "12/9/2023",
        Status: "Delivered",
      },
      {
        ClientSSN: 1005,
        Start_Point_Location: "Nablus",
        End_Point_Location: "Tulkarm",
        Street: "Jefara",
        postalCode: "P300425",
        OrderPrice: "15",
        dateOfRequest: "10/9/2023",
        Status: "Delivered",
      },
    ];
  }
  let clientNames = [];
  for (let i = 0; i < orders.length; i++) {
    clientNames[i] = await getClientName(orders[i].ClientSSN);
  }
  if (clientNames[0] === undefined) {
    clientNames[0] = "Jamal SaadEddin";
    clientNames[1] = "Omar Omar";
    clientNames[2] = "Ahmed Afendi";
    clientNames[3] = "Abdullah Moretani";
    clientNames[4] = "Fadi Fakher";
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

  let offers = await getOffers(companyID);
  console.log(offers);
  if (offers === undefined) {
    offers = [
      {
        id: 30,
        startCity: "Nablus",
        endCity: "Jenin",
        vehicleSize: "Small",
        standardPrice: 15,
        overheadPriceExpress: 5,
        timeDeliverExpress: 2,
        overheadPriceVillage: 3,
      },
      {
        id: 31,
        startCity: "Nablus",
        endCity: "Ramallah",
        vehicleSize: "Large",
        standardPrice: 20,
        overheadPriceExpress: 5,
        timeDeliverExpress: 2,
        overheadPriceVillage: 3,
      },
      {
        id: 22,
        startCity: "Ramallah",
        endCity: "Hebron",
        vehicleSize: "Meduim",
        standardPrice: 70,
        overheadPriceExpress: 15,
        timeDeliverExpress: 4,
        overheadPriceVillage: 5,
      },
      {
        id: 25,
        startCity: "Qalqilia",
        endCity: "Jenin",
        vehicleSize: "Large",
        standardPrice: 15,
        overheadPriceExpress: 10,
        timeDeliverExpress: 3,
        overheadPriceVillage: 5,
      },
      {
        id: 15,
        startCity: "Nablus",
        endCity: "Tulkarm",
        vehicleSize: "Large",
        standardPrice: 20,
        overheadPriceExpress: 10,
        timeDeliverExpress: 1,
        overheadPriceVillage: 5,
      },
    ];
  }
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
         ${offer.timeDeliverExpress} days
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

  document.getElementById("company-name").value =
    companyInfo === undefined ? "Wasel" : companyInfo.name;
  document.getElementById("company-phone-number").value =
    companyInfo === undefined ? "+972599098598" : companyInfo.phone;
  document.getElementById("company-email-address").value =
    companyInfo === undefined ? "wasel@gmail.com" : companyInfo.Email;

  document.getElementsByClassName("companyName")[0].innerText =
    companyInfo === undefined ? "Wasel" : companyInfo.name;
  document.getElementsByClassName("companyName")[1].innerText =
    companyInfo === undefined ? "Wasel" : companyInfo.name;
}
