document.getElementById("bmr").addEventListener("click", setBmr);

function setBmr(e) {
  e.preventDefault();

  let gender = document.getElementById("gender");
  const age = document.getElementById("age");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const walking = document.getElementById("walking");
  const cardio = document.getElementById("cardio");

  // BMR calculation
  let bmr =
    10 * +weight.value +
    6.25 * +height.value -
    5 * +age.value +
    (gender.value === "male" ? 5 : -161);

  // Activity calculations
  bmr += (+walking.value * 60 * ((0.03 * +weight.value * 1) / 0.45)) / 7;
  bmr += (+cardio.value * 60 * ((0.07 * +weight.value * 1) / 0.45)) / 7;

  // BMI calculation
  const bmi = (
    +weight.value /
    ((+height.value * +height.value) / 10000)
  ).toFixed(2);

  // Display BMI
  const bmiText = document.createElement("p");
  bmiText.innerHTML = `${bmi}`;
  document.querySelector(".bmi").appendChild(bmiText);

  // Display BMR
  const bmrText = document.createElement("p");
  bmrText.innerHTML = `${Math.round(bmr)}`;
  document.querySelector(".bmr").appendChild(bmrText);

  // Fat-burning heart rate calculation
  let rate = Number(220 - age.value);
  let lowRate = Math.round(rate * 0.6);
  let highRate = Math.round(rate * 0.7);

  const rateText = document.createElement("p");
  rateText.innerHTML = `Low rate: ${lowRate} Upper rate: ${highRate}`;
  document.querySelector(".rate").appendChild(rateText);

  // Validate input fields
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

  // Target calories calculations
  let targetGainWeight = Math.round(bmr + 300);
  let targetMaintain = Math.round(bmr);
  let targetLoseWeight = Math.round(bmr - 500);

  // Display target calories
  document
    .getElementById("calc-target-gain")
    .querySelector("span").textContent = `${targetGainWeight} calories`;
  document
    .getElementById("calc-target-maintain")
    .querySelector("span").textContent = `${targetMaintain} calories`;
  document
    .getElementById("calc-target-lose")
    .querySelector("span").textContent = `${targetLoseWeight} calories`;

  // Reset fields after calculation
  gender.value = "";
  age.value = "";
  height.value = "";
  weight.value = "";
  walking.value = "";
  cardio.value = "";
}
