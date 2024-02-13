import '../index.html'
import '../styles/scss/style.scss'

import menu from './modules/menu'
import promo from './modules/promo'
import skills from './modules/skills'

window.addEventListener('DOMContentLoaded', function () {
	menu()
	promo()
	skills()
})
