const d = document;


export default function validarForm(form, input, btn, field) {
	const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const $form = d.querySelector(form);
	const $input = d.querySelector(input);
	const $btn = d.querySelector(btn);
	
	d.addEventListener('click', (e) => {
		if (e.target.matches(btn)) {
			if (expresion.test($input.value)) {
				d.querySelector(field).classList.remove('contact__field-error')
				$form.reset();
				d.querySelector(field).classList.add('contact__field-exito')
				
				setTimeout(() => {
					d.querySelector(field).classList.remove('contact__field-exito')
				}, 5000);
			} else {
				d.querySelector(field).classList.add('contact__field-error')
				d.querySelector(field).classList.remove('contact__field-exito')
			}
		}
		e.preventDefault();
	})
}










/*

console.log($input.value)

const campos = {
	email: false
};

const validarForm = (e) => {
	if (e.target.name === 'email') {
		validarField(expresion, e.target, 'email');
	} 
}

const validarField = (expresion, input, campo) => {
	console.log(expresion.test($input.value))
	if (expresion.test($input.value)) {
		campos[campo] = true
		console.log('paso')
	} else {
		console.log('falló')
	}
}
	
$form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if (campos.email) {
		console.log('enviandoo....')
	} else {
		console.log('msg error...')
	}
})

*/