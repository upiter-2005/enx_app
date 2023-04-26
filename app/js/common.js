$(function ($) {
  if ($(window).width() > 992) {
    $(".slider-galeria").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      asNavFor: ".slider-galeria-thumbs",
    });
    $(".slider-galeria-thumbs").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".slider-galeria",
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      infinite: false,
    });
  } else {
    $(".slider-galeria").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      asNavFor: ".slider-galeria-thumbs",
    });
    $(".slider-galeria-thumbs").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".slider-galeria",
      vertical: false,
      verticalSwiping: false,
      focusOnSelect: true,
      infinite: false,
    });
  }
  const a = $(window).width();
  console.log(a);
  $(".advantageItem").equalHeights();
  $(".clientItem").equalHeights();

  $(".open-mobMnu").on("click", function (e) {
    $("#mob-list").addClass("active");
    e.preventDefault();
  });

  $(".close").on("click", function (e) {
    $("#mob-list").removeClass("active");
    e.preventDefault();
  });
  // $(".mob-link").on("click", function (e) {
  //   $("#moby-mnu").removeClass("active");
  //   e.preventDefault();
  // });

  $(".connection").magnificPopup({
    type: "inline",
    scr: "#connect",
    midClick: true,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<img src='images/prev.png' />", "<img src='images/next.png' />"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
