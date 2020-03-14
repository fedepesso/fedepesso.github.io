const button = document.getElementById("instruction-btn")
const button2 = document.getElementsByClassName("char-btn")
const text = document.getElementById("txt-lbl")
const counter = document.getElementsByClassName("contatore-lbl")
const rndbtn = document.getElementById("rnd")


const show_hide = () => {
	if (text.innerHTML===""){
  text.innerHTML = "Press arrows to move, enter to fight, P to collect objects or weapons; you'll get a main menu page and an inventary box whenever you need it"
}
else{
	text.innerHTML=""
}
}

const random = () => {
	for (let i=0; i<counter.length; i++){
		counter[i].innerHTML= Math.floor(Math.random() * 11)
	}
}

button.onclick = show_hide

rndbtn.onclick = random