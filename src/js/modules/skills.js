function skills() {
	const counterList = document.querySelectorAll('.rating-item__counter'),
		lineList = document.querySelectorAll('.rating-item__line span')
	lineList.forEach((item, i) => {
		item.style.width = counterList[i].textContent
	})
}
export default skills
