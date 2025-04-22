document.querySelector("#btnSearch").addEventListener("click", () => {
  let activity = document.querySelector("#txtSearch").value.trim();
  if (activity === "") {
    alert("Please add a workout.");
  } else {
    document.querySelector("#loading").style.display = "block";
    getWorkout(activity);
  }
});

document
  .querySelector("#txtSearch")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btnSearch").click();
    }
  });

function getWorkout(activity) {
  fetch(`https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`, {
    method: "GET",
    headers: {
      "X-Api-Key": "K/EWGzuNKY0CNdL9ZpLnqg==aGC2P1EOqR0WIwwS",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      document.querySelector("#loading").style.display = "none";
      if (result.length === 0) {
        const html = `
          <div class="alert alert-warning mt-2" role="alert">
            <h1><i class="fa-solid fa-bolt"></i> 0 results found for ${activity}</h1>
            <hr>
            <p>We're sorry, your search for "${activity}" did not match any documents.</p>
            <ul>
              <li>Make sure you've spelled the search term correctly.</li>
              <li>Don't search for measurements or serving sizes.</li>
              <li>Try using different words that mean the same thing.</li>
            </ul>
          </div>`;
        document.querySelector("#errors").innerHTML = html;
        setTimeout(() => {
          document.querySelector("#errors").innerHTML = "";
        }, 5000);
        document.querySelector("#txtSearch").value = "";
      } else {
        for (let data of result) {
          let div = document.createElement("div");
          div.classList.add("div", "d-flex", "flex-column");
          div.innerHTML = `
            <div class="btn-group-vertical">
              <button type="button" class="btn btn-outline-dark">${data.name}</button>
            </div>`;
          div
            .querySelector("button")
            .addEventListener("click", () => renderWorkout(data));
          document.getElementById("all").appendChild(div);
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function renderWorkout(data) {
  document.querySelector("#all").innerHTML = "";
  const tbody = document.getElementById("tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${data.name}</td>
    <td>${data.duration_minutes}</td>
    <td class="size">${data.total_calories}</td>
    <td><input onblur="lineTotal(this);" class="form-control" type="number" min="0" /></td>
    <td class="kalori"><input onblur="lineTotal(this);" class="form-control" readonly /></td>
    <td><button class="btnDelete" onclick="removeItem(this)"><i class="fa-regular fa-trash-can"></i></button></td>
  `;

  tbody.appendChild(row);
  document.querySelector("#txtSearch").value = "";
}

function removeItem(e) {
  const row = e.closest("tr");
  row.remove();
  calculateDueAmount();
}

function lineTotal(e) {
  const row = e.closest("tr");
  const calories = parseFloat(row.children[2].textContent);
  const minutes = parseFloat(row.children[3].querySelector("input").value) || 0;
  const totalInput = row.children[4].querySelector("input");
  totalInput.value = ((calories / 60) * minutes).toFixed(2);
  calculateDueAmount();
}

function calculateDueAmount() {
  document.querySelector(".totalW").style.opacity = 1;
  let total = 0;
  document.querySelectorAll("#tbody tr").forEach((row) => {
    const val = parseFloat(row.children[4].querySelector("input").value) || 0;
    total += val;
  });
  document.getElementById("total").innerText = total.toFixed(2);
}

document.querySelector("#btn").addEventListener("click", calculateDueAmount);
