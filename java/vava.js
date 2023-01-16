function layoutArmas() {
	let recuperar = document.getElementById('armas')
	let testar = document.getElementById('agentes')

	// if (testar.style.display === "contents") {
		testar.style.display = "none";
		recuperar.style.display = "contents"
		
	// } else {
	// 	recuperar.style.display = "contents"
	// }	
}



function layoutAgentes() {
	let recuperar = document.getElementById('agentes')
	let testar = document.getElementById('armas')


	// if (testar.style.display === "contents") {
		testar.style.display = "none";
		recuperar.style.display = "contents"
	// } else {
	// 	recuperar.style.display = "contents"
	// }

}

function aviso(){
	alert('Ainda não programei este botão. Tente selecionar Outro!!!.')
}




//função skills campeao

function legendaSkill(value){
	
	if (value === 'q') {
		let recuperar = document.getElementById('skillRazeQ')
		recuperar.style.display = "contents"

		let esconderC = document.getElementById('skillRazeC')
		let esconderE = document.getElementById('skillRazeE')
		let esconderX = document.getElementById('skillRazeX')

		esconderC.style.display = "none"
		esconderE.style.display = "none"
		esconderX.style.display = "none"
	}

	if (value === 'c') {
		let recuperar = document.getElementById('skillRazeC')
		recuperar.style.display = "contents"

		let esconderQ = document.getElementById('skillRazeQ')
		let esconderE = document.getElementById('skillRazeE')
		let esconderX = document.getElementById('skillRazeX')

		esconderQ.style.display = "none"
		esconderE.style.display = "none"
		esconderX.style.display = "none"
	} 

	if (value === 'e') {
		let recuperar = document.getElementById('skillRazeE')
		recuperar.style.display = "contents"

		let esconderQ = document.getElementById('skillRazeQ')
		let esconderC = document.getElementById('skillRazeC')
		let esconderX = document.getElementById('skillRazeX')

		esconderQ.style.display = "none"
		esconderC.style.display = "none"
		esconderX.style.display = "none"

	} 
	if (value === 'x') {
		let recuperar = document.getElementById('skillRazeX')
		recuperar.style.display = "contents"

		let esconderQ = document.getElementById('skillRazeQ')
		let esconderE = document.getElementById('skillRazeE')
		let esconderC = document.getElementById('skillRazeC')

		esconderQ.style.display = "none"
		esconderE.style.display = "none"
		esconderC.style.display = "none"
	}  	
}




