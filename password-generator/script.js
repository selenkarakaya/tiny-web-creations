$(document).ready(() => {
  // Creating an object that maps the character types to their respective functions
  const $randomFunc = {
    lower: getRandomLower, // Function to get a random lowercase letter
    upper: getRandomUpper, // Function to get a random uppercase letter
    number: getRandomNumber, // Function to get a random number
    symbol: getRandomSymbol, // Function to get a random symbol
  };

  // When the clipboard button is clicked
  $("#clipboard").on("click", function () {
    const password = $("#result").text(); // Get the generated password from the result element

    if (!password) {
      // If there is no password, return early
      return;
    }

    // Copy the password to the clipboard
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!"); // Notify the user that the password was copied
      })
      .catch((err) => {
        console.error("Failed to copy: ", err); // Log an error if copying fails
      });
  });

  // When the 'Generate' button is clicked
  $("#generate").on("click", () => {
    // Get values from user input
    const $length = +$("#length").val(); // Convert the password length to a number
    const $hasLower = $("#lowercase").prop("checked"); // Check if lowercase letters are selected
    const $hasUpper = $("#uppercase").prop("checked"); // Check if uppercase letters are selected
    const $hasSymbol = $("#symbols").prop("checked"); // Check if symbols are selected
    const $hasNumber = $("#numbers").prop("checked"); // Check if numbers are selected

    // Generate a password and display it in the result element
    $("#result").text(
      generatePassword($hasLower, $hasUpper, $hasSymbol, $hasNumber, $length)
    );
  });

  // Function to generate a random password based on user-selected options
  function generatePassword(lower, upper, number, symbol, length) {
    let $generatedPassword = ""; // Variable to store the generated password
    const $typesCount = lower + upper + number + symbol; // Count how many types of characters are selected
    // Using jQuery $.grep to filter the character types that are selected (true)
    const $typesArr = $.grep(
      [{ lower }, { upper }, { number }, { symbol }],
      (item) => Object.values(item)[0]
    );

    if ($typesCount === 0) {
      // If no character type is selected, return an empty string
      return "";
    }

    // Loop to generate the password by adding one character of each type at a time
    for (let i = 0; i < length; i += $typesCount) {
      // Iterate through each selected character type
      $.each($typesArr, function (_, type) {
        const $funcName = Object.keys(type)[0]; // Get the character type key (e.g., "lower")
        $generatedPassword += $randomFunc[$funcName](); // Call the corresponding function and append the result
      });
    }

    return $generatedPassword.slice(0, length); // Trim the password if it exceeds the desired length
  }

  // Function to generate a random lowercase letter
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // ASCII code for lowercase 'a' to 'z'
  }

  /*
      1) Math.random() * 26 generates a number between 0 and 25.
      2) + 65 shifts it to the ASCII range for uppercase letters (A-Z).
      3) String.fromCharCode(...) converts that number to a character.
    */
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // ASCII code for uppercase 'A' to 'Z'
  }

  // Function to generate a random number
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // ASCII code for numbers (0-9)
  }

  /*
      1) The string 'symbols' contains a list of common symbols.
      2) Math.random() * symbols.length generates a random index within the range of the symbols string.
      3) symbols.charAt(...) returns the character at the randomly generated index.
    */
  function getRandomSymbol() {
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`"; // List of symbols
    return symbols.charAt(Math.floor(Math.random() * symbols.length)); // Select a random symbol
  }
});
