
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




function agente(x){

	if (x === 'raze') {
		let recuperar = document.getElementById('agentes_personagens');
		let recuperarAgente = document.getElementById('agente_raze');

		let retirarAgente = document.getElementById('agente_sage');
		let retirarAgente2 = document.getElementById('agente_reyna');

		retirarAgente.style.display = "none";
		retirarAgente2.style.display = "none";

		recuperar.style.display = "contents";
		recuperarAgente.style.display = "contents";		
	}

	if (x === 'sage') {
		let recuperar = document.getElementById('agentes_personagens');
		let recuperarAgente = document.getElementById('agente_sage');

		let retirarAgente = document.getElementById('agente_raze');
		let retirarAgente2 = document.getElementById('agente_reyna');

		retirarAgente.style.display = "none";
		retirarAgente2.style.display = "none";

		recuperar.style.display = "contents";
		recuperarAgente.style.display = "contents";		
	}

	if (x === 'reyna') {
		let recuperar = document.getElementById('agentes_personagens');
		let recuperarAgente = document.getElementById('agente_reyna');

		let retirarAgente = document.getElementById('agente_raze');
		let retirarAgente2 = document.getElementById('agente_sage');

		retirarAgente.style.display = "none";
		retirarAgente2.style.display = "none";

		recuperar.style.display = "contents";
		recuperarAgente.style.display = "contents";		
	}
}


//função skills campeao
function legendaSkill(value){

	
	
	if (value === 'q') {

		let marcarBotao = document.getElementById('botaoQ')
		marcarBotao.className += " marcarBotao"
		
		let recuperar = document.getElementById('skillRazeQ')
		recuperar.style.display = "contents"

		let recuperar2 = document.getElementById('skillSageQ')
		recuperar2.style.display = "contents"

		let recuperar3 = document.getElementById('skillReynaQ')
		recuperar3.style.display = "contents"

		let esconderC = document.getElementById('skillRazeC')
		let esconderE = document.getElementById('skillRazeE')
		let esconderX = document.getElementById('skillRazeX')

		let esconderC2 = document.getElementById('skillSageC')
		let esconderE2 = document.getElementById('skillSageE')
		let esconderX2 = document.getElementById('skillSageX')

		let esconderC3 = document.getElementById('skillReynaC')
		let esconderE3 = document.getElementById('skillReynaE')
		let esconderX3 = document.getElementById('skillReynaX')

		esconderC.style.display = "none"
		esconderE.style.display = "none"
		esconderX.style.display = "none"

		esconderC2.style.display = "none"
		esconderE2.style.display = "none"
		esconderX2.style.display = "none"

		esconderC3.style.display = "none"
		esconderE3.style.display = "none"
		esconderX3.style.display = "none"
	} else if (value != 'q') {
		let marcarBotao = document.getElementById('botaoQ')
			marcarBotao.className -= " marcarBotao"
	}





	if (value === 'c') {

		let marcarBotao = document.getElementById('botaoC')
		marcarBotao.className += " marcarBotao"

		let recuperar = document.getElementById('skillRazeC')
		recuperar.style.display = "contents"

		let recuperar2 = document.getElementById('skillSageC')
		recuperar2.style.display = "contents"

		let recuperar3 = document.getElementById('skillReynaC')
		recuperar3.style.display = "contents"

		let esconderQ = document.getElementById('skillRazeQ')
		let esconderE = document.getElementById('skillRazeE')
		let esconderX = document.getElementById('skillRazeX')

		let esconderQ2 = document.getElementById('skillSageQ')
		let esconderE2 = document.getElementById('skillSageE')
		let esconderX2 = document.getElementById('skillSageX')

		let esconderQ3 = document.getElementById('skillReynaQ')
		let esconderE3 = document.getElementById('skillReynaE')
		let esconderX3 = document.getElementById('skillReynaX')

		esconderQ.style.display = "none"
		esconderE.style.display = "none"
		esconderX.style.display = "none"

		esconderQ2.style.display = "none"
		esconderE2.style.display = "none"
		esconderX2.style.display = "none"

		esconderQ3.style.display = "none"
		esconderE3.style.display = "none"
		esconderX3.style.display = "none"
	} else if (value != 'c') {
		let marcarBotao = document.getElementById('botaoC')
			marcarBotao.className -= " marcarBotao"
	}



	if (value === 'e') {

		let marcarBotao = document.getElementById('botaoE')
		marcarBotao.className += " marcarBotao"


		let recuperar = document.getElementById('skillRazeE')
		recuperar.style.display = "contents"

		let recuperar2 = document.getElementById('skillSageE')
		recuperar2.style.display = "contents"

		let recuperar3 = document.getElementById('skillReynaE')
		recuperar3.style.display = "contents"

		let esconderQ = document.getElementById('skillRazeQ')
		let esconderC = document.getElementById('skillRazeC')
		let esconderX = document.getElementById('skillRazeX')

		let esconderQ2 = document.getElementById('skillSageQ')
		let esconderC2 = document.getElementById('skillSageC')
		let esconderX2 = document.getElementById('skillSageX')

		let esconderQ3 = document.getElementById('skillReynaQ')
		let esconderC3 = document.getElementById('skillReynaC')
		let esconderX3 = document.getElementById('skillReynaX')

		esconderQ.style.display = "none"
		esconderC.style.display = "none"
		esconderX.style.display = "none"

		esconderQ2.style.display = "none"
		esconderC2.style.display = "none"
		esconderX2.style.display = "none"

		esconderQ3.style.display = "none"
		esconderC3.style.display = "none"
		esconderX3.style.display = "none"

	} else if (value != 'e') {
		let marcarBotao = document.getElementById('botaoE')
			marcarBotao.className -= " marcarBotao"
	}



	if (value === 'x') {

		let marcarBotao = document.getElementById('botaoX')
		marcarBotao.className += " marcarBotao"

		let recuperar = document.getElementById('skillRazeX')
		recuperar.style.display = "contents"

		let recuperar2 = document.getElementById('skillSageX')
		recuperar2.style.display = "contents"

		let recuperar3 = document.getElementById('skillReynaX')
		recuperar3.style.display = "contents"

		let esconderQ = document.getElementById('skillRazeQ')
		let esconderE = document.getElementById('skillRazeE')
		let esconderC = document.getElementById('skillRazeC')

		let esconderQ2 = document.getElementById('skillSageQ')
		let esconderE2 = document.getElementById('skillSageE')
		let esconderC2 = document.getElementById('skillSageC')

		let esconderQ3 = document.getElementById('skillReynaQ')
		let esconderE3 = document.getElementById('skillReynaE')
		let esconderC3 = document.getElementById('skillReynaC')

		esconderQ.style.display = "none"
		esconderE.style.display = "none"
		esconderC.style.display = "none"

		esconderQ2.style.display = "none"
		esconderE2.style.display = "none"
		esconderC2.style.display = "none"

		esconderQ3.style.display = "none"
		esconderE3.style.display = "none"
		esconderC3.style.display = "none"
	}  else if (value != 'x') {
		let marcarBotao = document.getElementById('botaoX')
			marcarBotao.className -= " marcarBotao"
	}

}


 // alert('!!!Atualização!!! Foi inserido o Layout do Agente: Raze. Seguindo as opções:  Agentes>Raze.')




