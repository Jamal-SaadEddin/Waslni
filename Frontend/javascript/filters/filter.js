let clientSSN = 151520; // which comes after the client logs in the system
let companies,
  tableRows,
  startCity,
  endCity,
  selectedOffer,
  selectedRowColor,
  selectedOfferPrice,
  companyID;

async function filterLowPrice() {
  priceCss();

  document.getElementById(
    "priceFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;
  companies = await getLowestPrice(startCity, endCity);
  let companiesNames = [];
  for (let i = 0; i < companies.length; i++) {
    companiesNames[i] = await getCompanyName(companies[i].CompanyID);
  }
  tableRows = companies
    .map(
      (company, i) =>
        `<tr onclick="selectRow(this, ${company.id}, ${company.standardPrice})">
        <td>
         ${companiesNames[i]}
        </td>
        <td>
         ${company.startCity}
        </td>
        <td>
         ${company.endCity}
        </td>
        <td>
         $${company.standardPrice}
        </td>
    </tr>`
    )
    .join("");
  document.getElementById("priceFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function filterHighPrice() {
  priceCss();

  document.getElementById(
    "priceFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;
  companies = await getHighestPrice(startCity, endCity);
  let companiesNames = [];
  for (let i = 0; i < companies.length; i++) {
    companiesNames[i] = await getCompanyName(companies[i].CompanyID);
  }
  tableRows = companies
    .map(
      (company, i) =>
        `<tr onclick="selectRow(this, ${company.id}, ${company.standardPrice})">
        <td>
         ${companiesNames[i]}
        </td>
        <td>
         ${company.startCity}
        </td>
        <td>
         ${company.endCity}
        </td>
        <td>
         $${company.standardPrice}
        </td>
    </tr>`
    )
    .join("");
  document.getElementById("priceFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function filterFastCompanies() {
  extraServicesCss();
  document.getElementsByClassName(
    "extraServiceFilterTable"
  )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[9].innerText =
    "Normal delivery price";
  document.getElementsByClassName(
    "extraServiceFilterTable"
  )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[11].innerText =
    "Fast delivery price";

  document.getElementById(
    "extraServiceFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;
  companies = await getFastDeliveries(startCity, endCity);
  let companiesNames = [];
  for (let i = 0; i < companies.length; i++) {
    companiesNames[i] = await getCompanyName(companies[i].CompanyID);
  }
  tableRows = companies
    .map(
      (company, i) =>
        `<tr onclick="selectRow(this, ${company.id}, ${company.standardPrice})">
          <td>
           ${companiesNames[i]}
          </td>
          <td>
           ${company.startCity}
          </td>
          <td>
           ${company.endCity}
          </td>
          <td>
           ${company.timeDeliverExpress} day
          </td>
          <td>
           $${company.standardPrice}
          </td>
          <td>
           $${company.standardPrice + company.overheadPriceExpress}
          </td>
      </tr>`
    )
    .join("");
  document.getElementById("extraServiceFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function filterVillage() {
  extraServicesCss();
  document.getElementsByClassName(
    "extraServiceFilterTable"
  )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[9].innerText =
    "City delivery price";
  document.getElementsByClassName(
    "extraServiceFilterTable"
  )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[11].innerText =
    "Village delivery price";

  document.getElementById(
    "extraServiceFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;
  companies = await getVillageDeliveries(startCity, endCity);
  let companiesNames = [];
  for (let i = 0; i < companies.length; i++) {
    companiesNames[i] = await getCompanyName(companies[i].CompanyID);
  }
  tableRows = companies
    .map(
      (company, i) =>
        `<tr onclick="selectRow(this, ${company.id}, ${company.standardPrice})">
            <td>
             ${companiesNames[i]}
            </td>
            <td>
             ${company.startCity}
            </td>
            <td>
             ${company.endCity}
            </td>
            <td>
             ${company.timeDeliverExpress} day
            </td>
            <td>
             $${company.standardPrice}
            </td>
            <td>
             $${company.standardPrice + company.overheadPriceVillage}
            </td>
        </tr>`
    )
    .join("");
  document.getElementById("extraServiceFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function rateSecurityFilter() {
  rateCss();

  document.getElementById(
    "rateFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;

  companies = await getRatedCompanies("according_Security", startCity, endCity);
  tableRows = companies
    .map(
      (company) =>
        `<tr onclick="selectRow(this, ${company.offerID}, ${company.standardPrice})">
      <td>
        ${company.companyName}
      </td>
      <td>
        ${startCity}
      </td>
      <td>
        ${endCity}
      </td>
      <td>
        ${company.avgregSecurityRate}
      </td>
      <td>
        $${company.standardPrice}
      </td>
  </tr>`
    )
    .join("");
  document.getElementById("rateFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function rateSafetyFilter() {
  rateCss();

  document.getElementById(
    "rateFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;

  companies = await getRatedCompanies("according_Safety", startCity, endCity);
  tableRows = companies
    .map(
      (company) =>
        `<tr onclick="selectRow(this, ${company.offerID}, ${company.standardPrice})">
      <td>
        ${company.companyName}
      </td>
      <td>
        ${startCity}
      </td>
      <td>
        ${endCity}
      </td>
      <td>
        ${company.avgregSafetyRate}
      </td>
      <td>
        $${company.standardPrice}
      </td>
  </tr>`
    )
    .join("");
  document.getElementById("rateFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function ratePriceFilter() {
  rateCss();

  document.getElementById(
    "rateFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;

  companies = await getRatedCompanies("according_Price", startCity, endCity);
  tableRows = companies
    .map(
      (company) =>
        `<tr onclick="selectRow(this, ${company.offerID}, ${company.standardPrice})">
      <td>
        ${company.companyName}
      </td>
      <td>
        ${startCity}
      </td>
      <td>
        ${endCity}
      </td>
      <td>
        ${company.avgregDeliveryPriceRate}
      </td>
      <td>
        $${company.standardPrice}
      </td>
  </tr>`
    )
    .join("");
  document.getElementById("rateFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

async function rateTimeFilter() {
  rateCss();

  document.getElementById(
    "rateFilterTable"
  ).innerHTML = `Loading <i class="fa-solid fa-spinner fa-spin"></i>`;

  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;

  companies = await getRatedCompanies("according_Time", startCity, endCity);
  tableRows = companies
    .map(
      (company) =>
        `<tr onclick="selectRow(this, ${company.offerID}, ${company.standardPrice})">
      <td>
        ${company.companyName}
      </td>
      <td>
        ${startCity}
      </td>
      <td>
        ${endCity}
      </td>
      <td>
        ${company.avgregTimeRate}
      </td>
      <td>
        $${company.standardPrice}
      </td>
  </tr>`
    )
    .join("");
  document.getElementById("rateFilterTable").innerHTML = tableRows
    ? tableRows
    : `Sorry, No Deliveries going to choosen city! <i class="fa-regular fa-face-frown fa-shake"></i>`;
}

function extraServicesCss() {
  document.getElementsByClassName("rateFilterTable")[0].style.display = "none";
  document.getElementsByClassName("priceFilterTable")[0].style.display = "none";
  document.getElementsByClassName("extraServiceFilterTable")[0].style.display =
    "block";
  document.getElementsByClassName("oval")[0].style.width = "900px";
  document.getElementsByClassName("oval")[0].style.right = "100px";
  document.getElementsByClassName("extraServiceFilterTable")[0].style.width =
    "900px";
}

function priceCss() {
  document.getElementsByClassName("extraServiceFilterTable")[0].style.display =
    "none";
  document.getElementsByClassName("rateFilterTable")[0].style.display = "none";
  document.getElementsByClassName("priceFilterTable")[0].style.display =
    "block";
  document.getElementsByClassName("oval")[0].style.width = "620px";
  document.getElementsByClassName("oval")[0].style.right = "200px";
  document.getElementsByClassName("extraServiceFilterTable")[0].style.width =
    "620px";
}

function rateCss() {
  document.getElementsByClassName("extraServiceFilterTable")[0].style.display =
    "none";
  document.getElementsByClassName("priceFilterTable")[0].style.display = "none";
  document.getElementsByClassName("rateFilterTable")[0].style.display = "block";
  document.getElementsByClassName("oval")[0].style.width = "620px";
  document.getElementsByClassName("oval")[0].style.right = "200px";
  document.getElementsByClassName("extraServiceFilterTable")[0].style.width =
    "620px";
}

async function showDefaultTable() {
  document.getElementsByClassName("extraServiceFilterTable")[0].style.display =
    "none";
  document.getElementsByClassName("rateFilterTable")[0].style.display = "none";
  document.getElementsByClassName("priceFilterTable")[0].style.display =
    "block";
  document.getElementsByClassName("oval")[0].style.width = "620px";
  document.getElementsByClassName("oval")[0].style.right = "200px";
  document.getElementsByClassName("extraServiceFilterTable")[0].style.width =
    "620px";

  await filterLowPrice();
}

async function selectRow(checkedRowColor, offerID, offerPrice) {
  selectedOffer = offerID;
  selectedOfferPrice = offerPrice;
  selectedRowColor ? (selectedRowColor.style.background = "none") : null;
  selectedRowColor = checkedRowColor;
  selectedRowColor.style.background = "#3297FD";
  companyID = await getCompanyIdByOfferId(selectedOffer);
}

async function handleOrderRequest() {
  let size = document.getElementById("packageSize").value;
  let discription = document.getElementById("packageDiscription").value;
  let postal = document.getElementById("packagePostal").value;
  let street = document.getElementById("packageStreet").value;
  let date = document.getElementById("packageDate").value;
  startCity = document.getElementById("start-city").value;
  endCity = document.getElementById("end-city").value;
  selectedOffer
    ? await insertRequest(
        clientSSN,
        companyID,
        selectedOffer,
        size,
        discription ? discription : "",
        postal,
        street,
        date,
        startCity,
        endCity,
        selectedOfferPrice
      )
    : alert("Please select an offer!");
}
