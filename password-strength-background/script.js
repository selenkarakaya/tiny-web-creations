$(document).ready(() => {
  $("#password").on("input", () => {
    const passwordLength = $("#password").val().length;
    const blurValue = 20 - Math.min(passwordLength, 20);
    $(".background").css("filter", `blur(${blurValue}px)`);
    console.log(blurValue);
  });
});
