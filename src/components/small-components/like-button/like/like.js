$(".like-button").on("click", function() {
  let value = $(this).children(".like-button__text").text();
  $(this).children(".like-button__text").text(+value + 1);
});