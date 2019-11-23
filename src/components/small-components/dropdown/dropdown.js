import './img/icon-dropdown.svg'
import './img/icon-dropdown-active.svg'

const guest = [
  ['гость', 'гостя', 'гостей'],
  ['гость', 'гостя', 'гостей'],
  ["младенец", "младенца", "младенцев"],
  [2, 0, 1, 1, 1, 2],
  ['Сколько гостей'],
  ["0guest", "1guest", "2guest"],
  "guest"
]

const accommodations = [
  ['спальня', 'спальни', 'спален'],
  ['кровать', 'кровати', 'кроватей'],
  ["ванная комната", "ванные комнаты", "ванных комнат"],
  [2, 0, 1, 1, 1, 2],
  ['Выберите удобства'],
  ["0accommodations", "1accommodations", "2accommodations"],
  "accommodations"
]

let nameDrop;

$(".dropdown").on('mousedown', function(e) {
  nameDrop = $(this).children(".dropdown__input").attr("id");
  nameDrop = nameDrop === "accommodations" ? accommodations : guest;
});

$('.dropdown__input').on('mousedown', function(e) {
	e.preventDefault();
});

$('.dropdown__title').on('click', function(e) {
	e.preventDefault();
});

$(".dropdown__input").on("click", function() {
  $(this).toggleClass("dropdown__input_active");
  $(this).siblings(".dropdown-window").slideToggle("dropdown-window_display_none");
});

$(".dropdown-window__increment").on("click", function() {
  let value = +$(this).siblings(".dropdown-window__value").text();
  increment($(this), value);
  if (value === 0) {
    const decrement = $(this).siblings(".dropdown-window__decrement");
    decrement.addClass("dropdown-window__decrement_active");
  }
  if (value === 9) {
    $(this).removeClass("dropdown-window__increment_active");
  }
});

$(".dropdown-window__decrement").on("click", function() {
  let value = +$(this).siblings(".dropdown-window__value").text();
  decrement($(this), value);
  if (value === 1) {
    $(this).removeClass("dropdown-window__decrement_active");
  }
  if (value === 10) {
    const increment = $(this).siblings(".dropdown-window__increment");
    increment.addClass("dropdown-window__increment_active");
  }
});

$(".dropdown-window__apply").on("click", function() {
  if (+$(`#drop_${nameDrop[6]}`).find(".dropdown-window__value").text() !== 0) {
    $(`#${nameDrop[6]}`).toggleClass("dropdown__input_active");
    $(`#drop_${nameDrop[6]}`).slideToggle("dropdown-window_display_none");
  }
});

$(".dropdown-window__clear").on("click", function() {
  clearDropdown($(this));
});

function increment(el, value) {
  if (value < 10) {
    let id = +el.siblings(".dropdown-window__value").attr("id").match(/[0-9][0-9]*/g);
    let currentValue = [];
    nameDrop[5].forEach(el => {
      let val = $(`#${el}`).text();
      currentValue.push(val);
    });
    el.siblings(".dropdown-window__value").text(value + 1);
    if (nameDrop === guest) {
      changeInputValueGuest(id, value + 1, currentValue);
    } else {
      changeInputValue(id, value + 1, currentValue);
    }
  } 
  if ($(`#drop_${nameDrop[6]}`).children(".dropdown-window__clear").is(":hidden")) {
    $(`#drop_${nameDrop[6]}`).children(".dropdown-window__clear").show(300);
  }
}

function decrement(el, value) {
  if (value > 0) {
    let id = +el.siblings(".dropdown-window__value").attr("id").match(/[0-9][0-9]*/g);
    let currentValue = [];
    nameDrop[5].forEach(el => {
      let val = $(`#${el}`).text();
      currentValue.push(val);
    });
    el.siblings(".dropdown-window__value").text(value - 1);
    if (nameDrop === guest) {
      changeInputValueGuest(id, value - 1, currentValue);
    } else {
      changeInputValue(id, value - 1, currentValue);
    }
  }  
  if (+$(`#drop_${nameDrop[6]}`).find(".dropdown-window__value").text() === 0) {
    $(`#drop_${nameDrop[6]}`).find(".dropdown-window__clear").hide(300);
    $(`#${nameDrop[6]}`).val(nameDrop[4]);
  }
}

function changeInputValue(id, value, currentValue) {
  let [val1, val2, val3] = currentValue;
  [val1, val2, val3] = [+val1, +val2, +val3];
  if (val1 + val2 + val3 === 0) {
    $(`#${nameDrop[6]}`).val(`1 ${nameDrop[id][0]}`);
    return false;
  }
  if (id === 0 && value === 0) {
    if (val2 === 0) {
      let nam3 = val3 === 0 ? "" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));
      return false;
    } else {
      let nam2 = `${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;
      let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));
      return false;
    }
  } else if (id === 0) {
    let nam1 = `${value} ${calcCorrectEndings(value, nameDrop[0])}`;
    let nam2 = val2 === 0 ? "" : `, ${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;
    let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
    $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));
    return false;
  }
  if (id === 1 && value === 0) {
    if (val1 === 0) {
      let nam3 = val3 === 0 ? "" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));
      return false;
    } else {
      let nam1 = val1 === 0 ? "" : `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;
      let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam3}`));
      return false;
    }
  } else if (id === 1) {
    let nam1 = val1 === 0 ? "" : `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;
    let nam2 = val1 === 0 ? `${value} ${calcCorrectEndings(value, nameDrop[1])}` : `, ${value} ${calcCorrectEndings(value, nameDrop[1])}`;
    let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
    $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));
    return false;
  }
  if (id === 2 && value === 0) {
    if (val1 > 0) {
      let nam1 = `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;
      let nam2 = val2 === 0 ? "" : `, ${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}`));
      return false;
    } else {
      let nam2 = val2 === 0 ? "" : `${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}`));
      return false;
    }
  } else if (id === 2) {
    if (val1 === 0 && val2 === 0) {
      let nam3 = `${value} ${calcCorrectEndings(value, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));
      return false;
    } else if (val1 > 0 && val2 > 0) {
      let nam1 = `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;
      let nam2 = `, ${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;
      let nam3 = `, ${value} ${calcCorrectEndings(value, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));
      return false;
    } else {
      let nam1 = val1 === 0 ? "" : `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;
      let nam2 = val2 === 0 ? "" : `${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;
      let nam3 = `, ${value} ${calcCorrectEndings(value, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));
      return false;
    }
  }
}

function changeInputValueGuest(id, value, currentValue) {
  let [val1, val2, val3] = currentValue;
  [val1, val2, val3] = [+val1, +val2, +val3];
  if (val1 + val2 + val3 === 0) {
    $(`#${nameDrop[6]}`).val(`1 ${nameDrop[id][0]}`);
    return false;
  }
  if (id === 0 && value === 0) {
    if (val2 === 0) {
      let nam3 = val3 === 0 ? "" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));
      return false;
    } else {
      let nam2 = `${val2} ${calcCorrectEndings(val2, nameDrop[0])}`;
      let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));
      return false;
    }
  } else if (id === 0) {
    let nam1 = value + val2;
    nam1 = `${nam1} ${calcCorrectEndings(nam1, nameDrop[0])}`;
    let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
    $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam3}`));
    return false;
  }
  if (id === 1 && value === 0) {
    if (val1 === 0) {
      let nam3 = val3 === 0 ? "" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));
      return false;
    } else {
      let nam2 = val1 + value;
      nam2 = `${nam2} ${calcCorrectEndings(nam2, nameDrop[0])}`;
      let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));
      return false;
    }
  } else if (id === 1) {
    let nam2 = val1 + value;
    nam2 = `${nam2} ${calcCorrectEndings(nam2, nameDrop[0])}`;
    let nam3 = val3 === 0 ? "" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;
    $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));
    return false;
  }
  if (id === 2 && value === 0) {
    if (val1 > 0 || val2 > 0) {
      let nam1 = val1 + val2;
      nam1 = `${nam1} ${calcCorrectEndings(nam1, nameDrop[0])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}`));
      return false;
    } else {
      $(`#${nameDrop[6]}`).val(``);
      return false;
    }
  } else if (id === 2) {
    if (val1 === 0 && val2 === 0) {
      let nam3 = `${value} ${calcCorrectEndings(value, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));
      return false;
    } else {
      let nam1 = val1 + val2;
      nam1 = `${nam1} ${calcCorrectEndings(nam1, nameDrop[0])}`;
      let nam3 = `, ${value} ${calcCorrectEndings(value, nameDrop[2])}`;
      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam3}`));
      return false;
    }
  }
}

// Функция ставит троеточие в конце, если в строке больше 20 символов
function trimEnd(str) {
  if (str.length > 19) {
    return str.match(/[0-9][0-9]*\s[а-я][а-я]*\,\s[0-9][0-9]*\s[а-я][а-я]*/g) + "...";
  }
  return str;
}

// Функция вычисляет правильные окончания
function calcCorrectEndings(number, name) {
  return name[ (number % 100 > 4 && number % 100 < 20) ? 2 : nameDrop[3][(number % 10 < 5) ? number % 10 : 5] ];  
}

function clearDropdown(el) {
  $(`#${nameDrop[6]}`).val(nameDrop[4][0]);
  $(`#drop_${nameDrop[6]}`).find(".dropdown-window__value").text("0");
  $(`#drop_${nameDrop[6]}`).find(".dropdown-window__decrement").removeClass("dropdown-window__decrement_active");
  $(`#drop_${nameDrop[6]}`).find(".dropdown-window__increment").addClass("dropdown-window__increment_active");
  el.hide(500);
}