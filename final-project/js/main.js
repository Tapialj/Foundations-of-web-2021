let today = new Date().toISOString().split('T')[0];
const picker = document.getElementById('bookDate');

document.getElementsByName("bookDate")[0].setAttribute('min', today);

picker.addEventListener('input', function(e)
{
  var day = new Date(this.value).getUTCDay();

  if([6,0].includes(day))
  {
    e.preventDefault();
    this.value = '';
    alert('We aren\'t open on the weekends. Sorry for any inconvenience!');
  }
});