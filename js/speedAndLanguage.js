function falaVelocidade(){
	console.log("passando")
	var a = document.getElementById('velo').value

	var voice = new SpeechSynthesisUtterance();
	let msg = document.getElementById('fala').value
	voice.lang = document.getElementById('idioma').value
	voice.text = msg;
	voice.rate = document.getElementById('velo').value
	window.speechSynthesis.speak(voice);

}

function limparTela(){
	document.getElementById('fala').value = ""
}