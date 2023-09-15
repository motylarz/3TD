let btn = document.querySelector('button');
let form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let klasa = document.querySelector('select[name="klasa"');
	let imie = document.querySelector('input[name="imie"]');
	let nazwisko = document.querySelector('input[name="nazwisko"]');
	let stanowisko = document.querySelector('select[name="stanowisko"');

	let jklasa = JSON.stringify({klasa : klasa.value});
	let jimie = JSON.stringify({imie : imie.value});
	let jnazwisko = JSON.stringify({nazwisko : nazwisko.value});
	let jstanowisko = JSON.stringify({stanowisko : stanowisko.value});

	console.log(jklasa+jimie+jnazwisko+jstanowisko);
	localStorage.setItem("klasa",jklasa);
	localStorage.setItem("imie",jimie);
	localStorage.setItem("nazwisko",jnazwisko);
	localStorage.setItem("stanowisko",jstanowisko);
});
