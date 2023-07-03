window.onload = function () {
  var table = document.getElementById("table"),
    selected = table.getElementsByClassName("selected");
  table.onclick = highlight;
  function highlight(e) {
    if (selected[0]) selected[0].className = "";
    e.target.parentNode.className = "selected";
  }

  fetch("https://waslni.azurewebsites.net/newCompanyReisted")
    .then((response) => {
      return response
        .json()
        .then((data) => {
          console.log(data);

          const tableTemplate = `
      <div class="oval">
      <div class="table">     
          <table id="myTable" class="mytbl">
            <thead>
              <tr id="p1">
                <th id="c1">ID</th>
                <th id="c2">Name</th>
                <th id="c3">Email</th>
                <th id="c4">Phone</th>
                <th id="c5">Capacity</th>
                <th id="c6">Status</th>
                <th >
                 
                </th>
              </tr>  
            </thead>
            <tbody > 
            <tr id="col">
            ${
              data.length > 0
                ? data
                    .map(
                      (item) => `
              <tr>
                <td id="ID">${item.id}</td>
                <td>${item.name}</td>
                <td id="col3">${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.capacity}</td>
                <td>${item.status}</td>
                <td><input type="button" id="tst" value=" Show Details" onclick="detailsFunction(${item.id});" /></td>
                <td><input type="button" id="tst" value=" Approve" onclick="confirmCompanyStatus(${item.id}, 'approve');" /></td>
                <td><input type="button" id="tst" value=" Reject" onclick="confirmCompanyStatus(${item.id}, 'reject');" /></td>
              </tr>
            `
                    )
                    .join("")
                : `<h1>No new companies available!</h1>`
            }
          </tr> 
            </tbody>   
          </table>
      </div>  
    </div>
      `;
          const tableContainer = document.getElementById("table");
          tableContainer.innerHTML = tableTemplate;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    //  .then(response => (console.log(response.body),response.json()))

    .catch((error) => console.error(error));
};
