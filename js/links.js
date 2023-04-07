const d = document;


export function focusLink(link, img1, img2) {
	const $link = d.querySelector(link);

	d.addEventListener('mouseover', (e) => {
		if (e.target.matches(link) || e.target.matches(`${link} *`)) {
			d.querySelector(img1).classList.remove('active')
			d.querySelector(img2).classList.add('active')
		} else {
			d.querySelector(img1).classList.add('active')
			d.querySelector(img2).classList.remove('active')
		}
		e.preventDefault();
	})
}


export const focusLinkSocial = (link, img1, img2) => {
	const $img = d.querySelectorAll(img1);
	const $imgHover = d.querySelectorAll(img2);

	d.addEventListener('mouseover', (e) => {
		if (e.target.matches(link) || e.target.matches(`${link} *`)) {
			if (e.target.classList.contains(link.slice(1,))) {
				e.target.classList.add('footer__social-active')
			} else {
				e.target.parentElement.classList.add('footer__social-active')
			}
		}
	})

	d.addEventListener('mouseout', (e) => {
		if (e.target.matches(link) || e.target.matches(`${link} *`)) {
			if (e.target.classList.contains(link.slice(1,))) {
				e.target.classList.remove('footer__social-active')
			} else {
				e.target.parentElement.classList.remove('footer__social-active')
			}
		}
	})
}