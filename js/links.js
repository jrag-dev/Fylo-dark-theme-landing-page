const d = document;


export default function focusLink(link, img1, img2) {
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