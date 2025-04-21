document.getElementById("bmr").addEventListener("click", setBmr);

function setBmr(e) {
  e.preventDefault();

  let gender = document.getElementById("gender");
  const age = document.getElementById("age");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const walking = document.getElementById("walking");
  const cardio = document.getElementById("cardio");

  let bmr =
    10 * +weight.value +
    6.25 * +height.value -
    5 * +age.value +
    (gender.value === "male" ? 5 : -161);
  bmr += (+walking.value * 60 * ((0.03 * +weight.value * 1) / 0.45)) / 7;
  bmr += (+cardio.value * 60 * ((0.07 * +weight.value * 1) / 0.45)) / 7;

  const bmi = (
    +weight.value /
    ((+height.value * +height.value) / 10000)
  ).toFixed(2);

  const bmiText = document.createElement("p");
  bmiText.innerHTML = `${bmi}`;
  document.querySelector(".bmi").appendChild(bmiText);

  const bmrText = document.createElement("p");
  bmrText.innerHTML = `${Math.round(bmr)}`;
  document.querySelector(".bmr").appendChild(bmrText);

  let rate = Number(220 - age.value);
  let lowRate = Math.round(rate * 0.6);
  let highRate = Math.round(rate * 0.7);

  const rateText = document.createElement("p");
  rateText.innerHTML = `Low rate: ${lowRate} 
                        Upper rate: ${highRate}`;
  document.querySelector(".rate").appendChild(rateText);

  if (
    gender.value === "" ||
    age.value === "" ||
    height.value === "" ||
    weight.value === "" ||
    walking.value === "" ||
    cardio.value === ""
  ) {
    alert("Please add a value");
    location.reload();
    return;
  }

  let targetGainWeight = Math.round(bmr + 300);
  let targetMaintain = Math.round(bmr);
  let targetLoseWeight = Math.round(bmr - 500);

  $("#calc-target-gain span").html(targetGainWeight + " calories");
  $("#calc-target-maintain span").html(targetMaintain + " calories");
  $("#calc-target-lose span").html(targetLoseWeight + " calories");

  gender.value = "";
  age.value = "";
  height.value = "";
  weight.value = "";
  walking.value = "";
  cardio.value = "";

  // this._tracker.setLimit(+limit.value);
  // limit.value = "";

  // const modalEl = document.getElementById("limit-modal");
  // const modal = bootstrap.Modal.getInstance(modalEl);
  // modal.hide();
}
