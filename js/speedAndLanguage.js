function speakText() {
	let voice = new SpeechSynthesisUtterance();
	const message = document.getElementById('voice').value
	voice.lang = document.getElementById('language').value
	voice.rate = document.getElementById('velocity').value
	voice.text = message
	window.speechSynthesis.speak(voice)
}

function clean() {
	document.getElementById('voice').value = ""
}

function changeTheme() {
	const themes = [
		'../assets/future.gif',
		'../assets/game1.gif',
		'../assets/78448.gif',
		'../assets/sapo.gif']

	const index = getTheme()
	const novaPostion = (index + 1) % themes.length
	document.body.style.backgroundImage = `url('${themes[novaPostion]}')`
	saveTheme(novaPostion)
}

function saveTheme(themePosition) {
	localStorage.setItem("theme", themePosition)
}

function getTheme() {
	const themePosition = localStorage.getItem("theme")


	if (!themePosition || isNaN(themePosition)) {
		saveTheme(0)
		return 0
	}

	return parseInt(themePosition, 10)
}

document.addEventListener('DOMContentLoaded', () => {
	const index = getTheme()
	const themes = [
		'../assets/future.gif',
		'../assets/game1.gif',
		'../assets/78448.gif',
		'../assets/sapo.gif']

	document.body.style.backgroundImage = `url('${themes[index]}')`
})