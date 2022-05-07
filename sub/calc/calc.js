// old calc functions{{{
function mod()
{
    console.log('mod')
    var x = parseInt(document.getElementsByName('num')[0].value)
    var y = parseInt(document.getElementsByName('base')[0].value)
    var z = x % y
    document.getElementsByName('display')[0].value = z
}

function base2()
{
    console.log('base 2')
    var x = parseInt(document.getElementsByName('numBase2')[0].value)
    if(x < 0)
    {
        console.log('error negative input')
        window.alert('error negative input')
    }
    document.getElementsByName('display2')[0].value = x.toString(2)
}

function AND()
{
    console.log('and')
    var x = parseInt(document.getElementsByName('andNumOne')[0].value)
    var y = parseInt(document.getElementsByName('andNumTwo')[0].value)
    var z = x & y
    document.getElementsByName('display3')[0].value = z
}

function OR()
{
    console.log('or')
    var x = parseInt(document.getElementsByName('orNumOne')[0].value)
    var y = parseInt(document.getElementsByName('orNumTwo')[0].value)
    var z = x | y
    document.getElementsByName('display4')[0].value = z
}

function XOR()
{
    var x = parseInt(document.getElementsByName('xorNumOne')[0].value)
    var y = parseInt(document.getElementsByName('xorNumTwo')[0].value)
    var z = x ^ y
    document.getElementsByName('display5')[0].value = z
}

function NOT()
{
    var x = parseInt(document.getElementsByName('notNumOne')[0].value)
    document.getElementsByName('display6')[0].value = ~x
}

function XNOR()
{
    var x = parseInt(document.getElementsByName('xnorNumOne')[0].value)
    var y = parseInt(document.getElementsByName('xnorNumTwo')[0].value)
    var z = ~(x ^ y)
    document.getElementsByName('display7')[0].value = z
}

function NOR()
{
    var x = parseInt(document.getElementsByName('norNumOne')[0].value)
    var y = parseInt(document.getElementsByName('norNumTwo')[0].value)
    var z = x | y
    document.getElementsByName('display8')[0].value = z
}
// }}}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
