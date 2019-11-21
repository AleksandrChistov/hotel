import './slider-room.styl'

let clicked = true;

$('.slider-room-arrow-left').on("click", function() {
  if (clicked) {
    clicked = false;
    const img = $(this).closest(".slider-room").children(".slider-room-block-img");
    let marginLeft = img.css("marginLeft");
    
    const li = $(this).closest(".slider-room").find(".slider-room-indicator");
    li.removeClass("slider-room-indicator_bg_white");
    let liNumber = Math.abs(Math.ceil(parseInt(marginLeft) / 271));
    
    if (parseInt(marginLeft) >= 0) {
      const countImages = img.find(".slider-room-img").length;
      img.animate({marginLeft: -(countImages - 1) * 271 + "px"}, 500);
      $(li[li.length - 1]).addClass("slider-room-indicator_bg_white");
      setTimeout(() => clicked = true, 500);
      return false;
    }

    img.animate({marginLeft: "+=271px"}, 500);
    $(li[liNumber - 1]).addClass("slider-room-indicator_bg_white");
    setTimeout(() => clicked = true, 500); 
  }
})

$('.slider-room-arrow-right').on("click", function() {
  if (clicked) {
    clicked = false;
    const img = $(this).closest(".slider-room").children(".slider-room-block-img");
    let marginLeft = img.css("marginLeft");
    const countImages = img.find(".slider-room-img").length;

    const li = $(this).closest(".slider-room").find(".slider-room-indicator");
    li.removeClass("slider-room-indicator_bg_white");
    let liNumber = Math.abs(Math.floor(parseInt(marginLeft) / 271));
    
    if (parseInt(marginLeft) <= -(countImages - 1) * 271) {
      img.animate({marginLeft: "0px"}, 500);
      $(li[0]).addClass("slider-room-indicator_bg_white");
      setTimeout(() => clicked = true, 500);
      return false;
    }

    img.animate({marginLeft: "+=-271px"}, 500);
    $(li[liNumber + 1]).addClass("slider-room-indicator_bg_white");
    setTimeout(() => clicked = true, 500);
  }
})