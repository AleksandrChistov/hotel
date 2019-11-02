import './img/icon-dropdown.svg'
import './img/icon-dropdown-active.svg'

const guest = ['гость', 'гостя', 'гостей'];
const baby = ["младенец", "младенца", "младенцев"];
// Массив для вычисления правильных окончаний
const cases = [2, 0, 1, 1, 1, 2];

$('.dropdown__input').on('mousedown', function(e) {
	e.preventDefault();
});

$(".dropdown__input").on("click", function() {
  $(this).toggleClass("dropdown__input_active");
  $(".dropdown-window").slideToggle("dropdown-window_display_none");
});

$(".dropdown-window__increment").on("click", function() {
  increment($(this));
  if (+$(this).siblings(".dropdown-window__value").text() === 1) {
    const decrement = $(this).siblings(".dropdown-window__decrement");
    decrement.addClass("dropdown-window__decrement_active");
  }
  if (+$(this).siblings(".dropdown-window__value").text() === 10) {
    $(this).removeClass("dropdown-window__increment_active");
  }
});

$(".dropdown-window__decrement").on("click", function() {
  decrement($(this));
  if (+$(this).siblings(".dropdown-window__value").text() === 0) {
    $(this).removeClass("dropdown-window__decrement_active");
  }
  if (+$(this).siblings(".dropdown-window__value").text() === 9) {
    const increment = $(this).siblings(".dropdown-window__increment");
    increment.addClass("dropdown-window__increment_active");
  }
});

$(".dropdown-window__apply").on("click", function() {
  if (+$(".dropdown-window__value").text() !== 0) {
    $(".dropdown__input").toggleClass("dropdown__input_active");
    $(".dropdown-window").slideToggle("dropdown-window_display_none");
  }
});

$(".dropdown-window__clear").on("click", function() {
  clearDropdown($(this));
});

function increment(el) {
  let value = el.siblings(".dropdown-window__value").text();
  if (value < 10) {
    el.siblings(".dropdown-window__value").text(+value + 1);
    let name = el.parent(".dropdown-window__wrap-value").siblings(".dropdown-window__name").text();
    changeInputValue(true, name, +value + 1);
  } 
  if ($(".dropdown-window__clear").is(":hidden")) {
    $(".dropdown-window__clear").show(300);
  }
}

function decrement(el) {
  let name = el.parent(".dropdown-window__wrap-value").siblings(".dropdown-window__name").text();
  let value = el.siblings(".dropdown-window__value").text();
  if (value > 0) {
    el.siblings(".dropdown-window__value").text(+value - 1)
    changeInputValue(false, name, +value - 1);
  } 
  if (+$(".dropdown-window__value").text() === 0) {
    $(".dropdown-window__clear").hide(300);
    $(".dropdown__input").val("Сколько гостей");
    return false;
  }
  if (name === "Младенцы" && +el.siblings(".dropdown-window__value").text() === 0) {
    let currentValue = $(".dropdown__input").val();
    let nameInput = currentValue.split(", ");
    let [name1] = nameInput.slice(0, 1);
    $(".dropdown__input").val(name1);
  }
}

function changeInputValue(sign, name, value) {
  let currentValue = $(".dropdown__input").val();
  let [name1, name2] = currentValue.split(",");
  if (name === "Взрослые" || name === "Дети") {
    if (currentValue === "Сколько гостей") {
      $(".dropdown__input").val("1 гость");
      return false;
    }
    let [name1WithoutNumbers] = name1.match(/[а-я][а-я]*/g);
    if (baby.includes(name1WithoutNumbers)) {
      name2 = name1;
      name1 = "0 гостей";
    }
    name2 = name2 === undefined ? "" : ", " + name2.trim();
    name1 = name1.match(/[0-9][0-9]*/g) || "0";
    name1 = sign ? +name1 + 1 : +name1 - 1;
    if (name1 === 0) {
      $(".dropdown__input").val(name2.replace(', ', ''));
      return false;
    }
    name1 += ' ' + calcCorrectEndings(name1, guest);
    $(".dropdown__input").val(name1 + name2);
  } else {
    if (currentValue === "Сколько гостей") {
      $(".dropdown__input").val("1 младенец");
      return false;
    }
    let [name1WithoutNumbers] = name1.match(/[а-я][а-я]*/g);
    if (!guest.includes(name1WithoutNumbers)) {
      value += ' ' + calcCorrectEndings(value, baby);
      $(".dropdown__input").val(value);
      return false;
    }
    name2 = name2 === undefined ? "" : name2.trim();
    name2 = name2.match(/[0-9][0-9]*/g) || "0";
    name2 = sign ? +name2 + 1 : +name2 - 1;
    name2 += ' ' + calcCorrectEndings(name2, baby);
    $(".dropdown__input").val(name1 + ", " + name2);
  }
}

// Функция вычисляет правильные окончания
function calcCorrectEndings(number, name) {
  return name[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];  
}

function clearDropdown(el) {
  $(".dropdown__input").val("Сколько гостей");
  $(".dropdown-window__value").text("0");
  $(".dropdown-window__decrement").removeClass("dropdown-window__decrement_active");
  el.hide(500);
}