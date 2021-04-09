function getDate() {
  var date_value;
  var gender;
  date_value = document.getElementById("txt_bday").value;
  gender = document.getElementById("select_gender").value;
  var [year, month, day] = date_value.split("-");
  cc = year.substring(0, 2);
  yy = year.toString().substr(-2);
}

function getDayofWeek(CC, YY, MM, DD) {
  var _day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
  day = Math.trunc(parseInt(_day));
}