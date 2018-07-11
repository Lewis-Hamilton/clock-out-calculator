function calc()
{
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
