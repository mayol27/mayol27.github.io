// Check active classes
var checkClass = function () {
  if ($(".item").hasClass("hide")) {
    $(".item").removeClass("hide");
  }
};

// Category filters
$(".filter-button.all").click(function () {
  checkClass();
});
$(".filter-button.filter-website").click(function () {
  checkClass();
  $(".item:not(.filter-website)").toggleClass("hide");
});
$(".filter-button.filter-design").click(function () {
  checkClass();
  $(".item:not(.filter-design)").toggleClass("hide");
});
$(".filter-button.filter-logo").click(function () {
  checkClass();
  $(".item:not(.filter-logo)").toggleClass("hide");
});

// Active tag
$(".filter-button").click(function () {
  $(".filter-button").removeClass("active");
  $(this).addClass("active");
});
