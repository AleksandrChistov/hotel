$(".like__button").on("click", function() {
  let value = $(this).text();
  $(this).text(+value + 1);
});