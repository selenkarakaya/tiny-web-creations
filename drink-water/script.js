$(document).ready(() => {
  updateBigCup();

  $(".cup-small").each((index, cup) => {
    $(cup).on("click", () => {
      highlightCups(index);
    });
  });

  // Fill small cup
  function highlightCups(index) {
    if (
      $(".cup-small").eq(index).hasClass("full") &&
      !$(".cup-small").eq(index).next().hasClass("full")
    ) {
      index--;
      $("#gasp")[0].play();
    }

    $(".cup-small").each((index2, cup) => {
      if (index2 <= index) {
        $(cup).addClass("full");
        $(".wrapper").css("visibility", "visible");
        setTimeout(() => {
          $(".wrapper").css("visibility", "hidden");
        }, 2000);
      } else {
        $(cup).removeClass("full");
      }
    });

    updateBigCup();
  }

  // Update big cup
  function updateBigCup() {
    const $fullCups = $(".cup-small.full").length;
    const $totalCups = $(".cup-small").length;

    if ($fullCups === 0) {
      $("#percentage").css({ visibility: "hidden", height: 0 });
    } else {
      $("#percentage").css({
        visibility: "visible",
        height: `${($fullCups / $totalCups) * 330}px`,
      });
      $("#percentage").text(`${($fullCups / $totalCups) * 100}%`);
    }

    if ($fullCups === $totalCups) {
      $("#remained").css({ visibility: "hidden", height: 0 });
      $("#tada")[0].play();
    } else {
      $("#remained").css("visibility", "visible");
      $("#liters").text(`${2 - (250 * $fullCups) / 1000}L`);
    }
  }

  $("#reset-button").on("click", () => {
    $(".cup-small").removeClass("full");
    $("#percentage").css({ visibility: "hidden", height: 0 });
    $("#remained").css("visibility", "visible");
    $("#liters").text("2L");
  });

  // Add animation effects to the reset button.

  $("#reset-button").on("click", (e) => {
    // These give the X and Y coordinates of where the user clicked, relative to the entire page.

    const $x = e.pageX;
    const $y = e.pageY;

    //The button's position on the page.

    const $buttonTop = e.currentTarget.offsetTop;
    const $buttonLeft = e.currentTarget.offsetLeft;

    //These calculate the position inside the button where the user clicked.
    const $xInside = $x - $buttonLeft;
    const $yInside = $y - $buttonTop;

    // Append the ripple effect span to the button

    const $circle = $("<span></span>")
      .addClass("circle")
      .css({ top: $yInside + "px", left: $xInside + "px" });

    /*  
If the circle stays in the DOM after the animation:
A new one is added every time you click, and the old ones pile up.
This can decrease performance and also mess up the visual appearance.
 */
    $(e.currentTarget).append($circle);
    setTimeout(() => {
      $circle.remove();
    }, 600);
  });
});
