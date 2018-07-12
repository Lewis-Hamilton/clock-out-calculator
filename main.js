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

  var clockInMinTotal     = Number(clockInHourMin) + Number(clockInMin );
  var clockOutMealTotal   = Number(clockOutMealMin) + Number(clockOutMealHourMin);
  var clockInMealTotal    = Number(clockInMealMin) + Number(clockInMealHourMin);

  // document.getElementById('clockOut').value = f6;

  console.log(clockInMinTotal);
  console.log(clockOutMealTotal);
  console.log(clockInMealTotal);
}

$(document).ready(function(){
    $('.timepicker').timepicker();
  });
