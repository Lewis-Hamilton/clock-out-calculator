function calc()
{
  var clockIn             = document.getElementById('clockIn').value;
  var clockOutMeal        = document.getElementById('clockOutMeal').value;
  var clockInMeal         = document.getElementById('clockInMeal').value;

  var clockInHours        = clockIn.slice(0, 2);
  var clockOutMealHours   = clockOutMeal.slice(0, 2);
  var clockInMealHours    = clockInMeal.slice(0, 2);

  var clockInHourMin      = clockInHours * 60;
  var clockOutMealHourMin = clockOutMealHours * 60;
  var clockInMealHourMin  = clockInMealHours * 60;

  var clockInMin          = clockIn.slice(3, 6);
  var clockOutMealMin     = clockOutMeal.slice(3, 6);
  var clockInMealMin      = clockInMeal.slice(3, 6);



  // document.getElementById('clockOut').value = f6;

  console.log(clockInHourMin);
  console.log(clockOutMealHourMin);
  console.log(clockInMealHourMin);
}

$(document).ready(function(){
    $('.timepicker').timepicker();
  });
