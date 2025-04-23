$(document).ready(() => {
  const fixedNav = () => {
    if (window.scrollY > $(".hero").outerHeight() * 0.843) {
      $(".nav").addClass("active");
    } else {
      $(".nav").removeClass("active");
    }
  };

  $(window).on("scroll", fixedNav);

  const getData = () => {
    $("#header").html(
      '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    );
    $("#title").text("Lorem ipsum dolor sit amet");
    $("#excerpt").text(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
    );
    $("#profile_img").html(
      '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    );
    $("#name").text("John Doe");
    $("#date").text("Oct 08, 2020");

    $("#animated_bg").removeClass("animated-bg");
    $("#animated_bg_text").removeClass("animated-bg-text");
  };

  setTimeout(getData, 2500);

  const $textEl = $("#text");
  const text = "We Love Programming!";
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
});
