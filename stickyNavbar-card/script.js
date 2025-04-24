$(document).ready(() => {
  const fixedNav = () => {
    if (window.scrollY > $(".hero").outerHeight() * 0.843) {
      $(".nav").addClass("active");
    } else {
      $(".nav").removeClass("active");
    }
  };

  $(window).on("scroll", fixedNav);

  // animated text
  const $textEl = $("#text");
  const text = "Nature Awaits, Explore the Beauty!";
  let idx = 1;
  const speed = 150; // sabit hız (milisaniye)

  function writeText() {
    $textEl.text(text.slice(0, idx));
    idx++;

    if (idx > text.length) {
      idx = 1; // tekrar başa sar
    }

    setTimeout(writeText, speed);
  }

  writeText();

  // image carousel

  let index = 0;

  setInterval(run, 2000);

  function run() {
    index++;
    changeImage();
  }
  function changeImage() {
    // if image ends
    if (index > $("#imgs img").length - 1) {
      index = 0; // back to begining
    } else if (index < 0) {
      index = $("#imgs img").length - 1;
    }

    $("#imgs").css("transform", `translateX(${-index * 350}px)`);
  }
});
