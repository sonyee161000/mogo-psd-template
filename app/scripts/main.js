// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

var headerToggle = document.querySelector(".header-top__toggle");
var headerMenu = document.querySelector(".header-top__menu");
var expand = "expand";
headerToggle.addEventListener("click", function () {
  headerMenu.classList.add(expand);
});

window.addEventListener("click", function (e) {
  if (
    !headerMenu.contains(e.target) &&
    !e.target.matches(".header-top__toggle")
  ) {
    headerMenu.classList.remove(expand);
  }
});

// Slick slider
$(document).ready(function () {
  $(".slide-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
