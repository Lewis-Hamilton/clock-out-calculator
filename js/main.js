function calc()
{
  var f1 = document.getElementById('f1').value;
  var f2 = document.getElementById('f2').value;
  var f3 = document.getElementById('f3').value;

  document.getElementById('f4').value = f3 - f2;
  document.getElementById('f5').value = f4 + f1;
  document.getElementById('f6').value = f5 + 8;
}
