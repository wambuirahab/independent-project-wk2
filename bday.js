function getDate() {
  var date_value;
  var gender;
  date_value = document.getElementById("txt_bday").value;
  gender = document.getElementById("select_gender").value;
  var [year, month, day] = date_value.split("-");
  cc = year.substring(0, 2);
  yy = year.toString().substr(-2);
}