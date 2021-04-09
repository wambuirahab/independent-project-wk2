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

function getAkanName(day_of_week, gender) {
  var male_akan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
  var female_akan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

  if (gender == "male") {
    if (day_of_week == "Sunday") {
      male_akan_name = male_akan[0];

    }
    if (day_of_week == "Monday") {
      male_akan_name = male_akan[1];

    }
    if (day_of_week == "Tuesday") {
      male_akan_name = male_akan[2];
    }
    if (day_of_week == "Wednesday") {
      male_akan_name = male_akan[3];
    }
    if (day_of_week == "Thursday") {
      male_akan_name = male_akan[4];
    }
    if (day_of_week == "Friday") {
      male_akan_name = male_akan[5];
    }
    if (day_of_week == "Saturday") {
      male_akan_name = male_akan[6];
    }

    return male_akan_name;
  }

  if (gender == "female") {
    if (day_of_week == "Sunday") {
      female_akan_name = female_akan[0];
    }
    if (day_of_week == "Monday") {
      female_akan_name = female_akan[1];

    }
    if (day_of_week == "Tuesday") {
      female_akan_name = female_akan[2];
    }
    if (day_of_week == "Wednesday") {
      female_akan_name = female_akan[3];
    }
    if (day_of_week == "Thursday") {
      female_akan_name = female_akan[4];
    }
    if (day_of_week == "Friday") {
      female_akan_name = female_akan[5];
    }
    if (day_of_week == "Saturday") {
      female_akan_name = female_akan[6];
    }

    return female_akan_name;
  }

}