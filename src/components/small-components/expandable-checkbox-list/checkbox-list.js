import '../dropdown/img/icon-dropdown.svg'

$("#checkList").on("click", function() {
  $(this).siblings(".checkbox__modal").slideToggle("checkbox__modal_display_none");
  $(this).parent().toggleClass(["checkbox_img_arrow", "checkbox_img_arrow_transform"]);
})