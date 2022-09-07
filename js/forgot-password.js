function showPassword() {
	let cambiar = document.getElementById ('show-password');

	if(cambiar.type == 'password') {
		cambiar.type = 'text';
		$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
	}else{
		cambiar.type = 'password'
		$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
	}
}

function showPassword2() {
	let cambiar2 = document.getElementById ('show-password2');

	if(cambiar2.type == 'password') {
		cambiar2.type = 'text';
		$('.icon2').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
	}else{
		cambiar2.type = 'password'
		$('.icon2').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
	}
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function passBox(){
	let next = document.getElementById ('codigo1');
	let next2 = document.getElementById ('codigo2');
	let next3 = document.getElementById ('codigo3');

	if (next.value.length == codigo1.getAttribute('maxlength')) {
	  codigo2.focus();
	}
	if (next2.value.length == codigo2.getAttribute('maxlength')) {
	  codigo3.focus();
	}
	if (next3.value.length == codigo3.getAttribute('maxlength')) {
	  codigo4.focus();
	}
}