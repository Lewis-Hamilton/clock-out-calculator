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

  var clockOutMin         = clockInMinTotal + 480;
  var mealTime            = clockInMealTotal - clockOutMealTotal;
  var clockOutMinFinal    = mealTime + clockOutMin;

  var clockOutHour = parseInt(clockOutMinFinal / 60);
  var clockOutMin = clockOutMinFinal % 60;

  var clockOutHourFinal = clockOutHour - 12;

  var clockOutTime = clockOutHourFinal + ":" + clockOutMin;

  document.getElementById('hh').value = clockOutTime;


  var clockIn      = document.getElementById('clockIn').value;
  var clockOutMeal = document.getElementById('clockOutMeal').value;
  var clockInMeal  = document.getElementById('clockInMeal').value;

  var inHours      = clockIn.slice(0, 2);
  var outMealHours = clockOutMeal.slice(0, 2);
  var inMealHours  = clockInMeal.slice(0, 2);

  var inMinutes      = clockIn.slice(3, 6);
  var outMealMinutes = clockOutMeal.slice(3, 6);
  var inMealMinutes  = clockInMeal.slice(3, 6);



  // document.getElementById('clockOut').value = f6;

  console.log(inMinutes);
  console.log(outMealMinutes);
  console.log(inMealMinutes);
  console.log(inMealHours);
  console.log(outMealHours);
  console.log(inHours);

}

$(document).ready(function(){
    $('.timepicker').timepicker();
  });
