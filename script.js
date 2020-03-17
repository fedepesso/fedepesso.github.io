const button = document.getElementById("instruction-btn")
const button2 = document.getElementsByClassName("char-btn")
const text = document.getElementById("txt-lbl")
const counter = document.getElementsByClassName("contatore-lbl")
const rndbtn = document.getElementById("rnd")


const show_hide = () => {
	if (text.innerHTML===""){
  text.innerHTML = "Press arrows to move or fight, P to collect objects or weapons; with I you'll open an inventary box whenever you need it"
	}
	else{
		text.innerHTML=""
	}
}

const random_stats = () => {
	for (let i=0; i<counter.length; i++){
		counter[i].innerHTML= Math.floor(Math.random() * 10 + 1)
	}
}

const add_val = (stat, delta) => {
	let element = document.getElementById(stat + '_val')
	element.innerHTML = parseInt(element.innerHTML) + parseInt(delta);
}