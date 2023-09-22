window.onload = function () {
  var table = document.getElementById("table"),
    selected = table.getElementsByClassName("selected");
  table.onclick = highlight;
  function highlight(e) {
    if (selected[0]) selected[0].className = "";
    e.target.parentNode.className = "selected";
  }

  // fetch("https://waslni.azurewebsites.net/show_all_order")
  //   .then((response) => response.json())
  //   .then((data) => {
  let data = [
    {
      id: 75,
      Start_Point_Location: "Nablus",
      End_Point_Location: "Jenin",
      OrderPrice: "50",
      dateOfRequest: "23/9/2023",
      Status: "Pending",
    },
    {
      id: 125,
      Start_Point_Location: "Nablus",
      End_Point_Location: "Ramallah",
      OrderPrice: "35",
      dateOfRequest: "22/9/2023",
      Status: "Pending",
    },
    {
      id: 130,
      Start_Point_Location: "Ramallah",
      End_Point_Location: "Hebron",
      OrderPrice: "70",
      dateOfRequest: "20/9/2023",
      Status: "In progress",
    },
    {
      id: 133,
      Start_Point_Location: "Qalqilia",
      End_Point_Location: "Jenin",
      OrderPrice: "20",
      dateOfRequest: "22/9/2023",
      Status: "In progress",
    },
    {
      id: 140,
      Start_Point_Location: "Nablus",
      End_Point_Location: "Tulkarm",
      OrderPrice: "20",
      dateOfRequest: "23/9/2023",
      Status: "In progress",
    },
    {
      id: 142,
      Start_Point_Location: "Nablus",
      End_Point_Location: "Jenin",
      OrderPrice: "50",
      dateOfRequest: "23/9/2023",
      Status: "Pending",
    },
    {
      id: 143,
      Start_Point_Location: "Nablus",
      End_Point_Location: "Ramallah",
      OrderPrice: "35",
      dateOfRequest: "22/9/2023",
      Status: "Pending",
    },
    {
      id: 150,
      Start_Point_Location: "Ramallah",
      End_Point_Location: "Hebron",
      OrderPrice: "70",
      dateOfRequest: "20/9/2023",
      Status: "In progress",
    },
    {
      id: 156,
      Start_Point_Location: "Qalqilia",
      End_Point_Location: "Jenin",
      OrderPrice: "20",
      dateOfRequest: "22/9/2023",
      Status: "In progress",
    },
    {
      id: 160,
      Start_Point_Location: "Nablus",
      End_Point_Location: "Tulkarm",
      OrderPrice: "20",
      dateOfRequest: "23/9/2023",
      Status: "In progress",
    },
  ];
  const tableTemplate = `
        <div class="oval">
        <div class="table">     
            <table id="myTable">
              <thead>
                <tr id="p1">
                  <th id="c1">ID</th>
                  <th id="c2">Start Point</th>
                  <th id="c3">End Point</th>
                  <th id="c4">Order Price</th>
                  <th id="c5">Delivery Time</th>
                  <th id="c6">Status</th>
                </tr>  
              </thead>
              <tbody >
              ${data
                .map(
                  (item) => `
              <tr>
                <td>${item.id}</td>
                <td>${item.Start_Point_Location}</td>
                <td>${item.End_Point_Location}</td>
                <td>${item.OrderPrice}</td>
                <td>${item.dateOfRequest}</td>
                <td>${item.Status}</td>
                <td style="padding-left: 15px;"><button class="btn btn-danger btn-sm" data-bs-target="#orderDetails" data-bs-toggle="modal" onclick="showOrder(${item.id})">Show Order
                details</button></td>
              </tr>
            `
                )
                .join("")}
              </tbody>   
            </table>
        </div>  
      </div>
        `;
  const tableContainer = document.getElementById("table");
  tableContainer.innerHTML = tableTemplate;
  // })
  // .catch((error) => console.error(error));
};
