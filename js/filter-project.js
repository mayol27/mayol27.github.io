// Check active classes
var checkClass = function () {
  if ($(".item").hasClass("hide")) {
    $(".item").removeClass("hide");
  }
};

// Category filters
$(".all").click(function () {
  checkClass();
});
$(".filter-website").click(function () {
  checkClass();
  $(".item:not(.filter-website)").toggleClass("hide");
});
$(".filter-design").click(function () {
  checkClass();
  $(".item:not(.filter-design)").toggleClass("hide");
});
$(".filter-logo").click(function () {
  checkClass();
  $(".item:not(.filter-logo)").toggleClass("hide");
});

// Active tag
$(".filter-button").click(function () {
  $(".filter-button").removeClass("active");
  $(this).addClass("active");
});
