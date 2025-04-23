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
});
