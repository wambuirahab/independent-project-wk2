function getDate() {
  var date_value;
  var gender;
  date_value = document.getElementById("txt_bday").value;
  gender = document.getElementById("select_gender").value;
  var [year, month, day] = date_value.split("-");
  cc = year.substring(0, 2);
  yy = year.toString().substr(-2);
  var akan_name = getAkanName(day_of_week, gender);
}

function getDayofWeek(CC, YY, MM, DD) {
  var _day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
  day = Math.trunc(parseInt(_day));

  if (day == 0) {
    day_of_week = "Sunday";
  }
  if (day == 1) {
    day_of_week = "Monday";
  }
  if (day == 2) {
    day_of_week = "Tuesday";
  }
  if (day == 3) {
    day_of_week = "Wednesday";
  }
  if (day == 4) {
    day_of_week = "Thursday";
  }
  if (day == 5) {
    day_of_week = "Friday";
  }
  if (day == 6) {
    day_of_week = "Saturday";
  }

  return day_of_week
}