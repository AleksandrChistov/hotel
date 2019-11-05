$('.date-dropdown-window').data('datepicker');

$('.date-dropdown-window').datepicker({
  inline: true,
  range: true,
  clearButton: true,
  applyButton: true,
  onSelect: function(formattedDate, date, inst) {
    const [date1, date2] = formattedDate.split(",");
      $("#dateDropFrom").val(date1);
      $("#dateDropTo").val(date2);
  }
})

$(".datepicker--button").on("click", function() {
  if ($(this).data("action") === "today") {
    $('.date-dropdown-window').fadeToggle("dropdown-window_display_none");
  }
});