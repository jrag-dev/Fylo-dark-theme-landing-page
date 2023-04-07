import validarForm from './form.js';
import { focusLink, focusLinkSocial } from './links.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
	console.log('DOMContentLoaded');
	validarForm('.contact__form', '.contact__input', '.contact__btn', '.contact__field');
	focusLink('.team__cta', '.team__cta-img-green', '.team__cta-img-white');
	focusLinkSocial('.footer__social', '.socials__img-normal', '.socials__img-hover');
})