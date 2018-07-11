function calc()
{
  var f1 = document.getElementById('f1').value;
  var f2 = document.getElementById('f2').value;
  var f3 = document.getElementById('f3').value;

  var f4 = f3 - f2;
  var f5 = f4 + f1;
  var f6 = f5 + 8;

  document.getElementById('f7').value = f6;
}


$(document).ready(function(){
    $('.timepicker').timepicker();
  });
