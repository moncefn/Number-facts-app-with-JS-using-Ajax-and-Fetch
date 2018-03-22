const inp = document.querySelector('input');
const factcont = document.querySelector('.fact');

function write(e){
}

function getajax(){
	let xhr = new XMLHttpRequest();
	let num = inp.value
	xhr.open('GET', 'http://numbersapi.com/'+num);

	xhr.onload = function(){
		if(this.status == 200 && num != ''){
			factcont.innerHTML = this.responseText;
		} else {
			factcont.innerHTML = '';

		}
	}
	xhr.send();
}

inp.addEventListener('input', getajax);