function submitemail(){

var maile = document.getElementById('eadd').value;
if (maile='email address') {
	alert('invalid email address');

}else{
	alert('Thank you for Subscribing');
	document.getElementById('eadd').value='';

}

}