function promo() {
	const smoothLinks = document.querySelectorAll("a[href^='#']")

	smoothLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault()
			const _href = link.getAttribute('href')
			document.querySelector(_href).scrollIntoView({
				behavior: 'smooth'
			})
		})
	})
}
export default promo
