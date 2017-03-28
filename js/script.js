//var resposta = confirm("Deseja excluir?"); // declaração de uma variavel, para uma função de confirmação.
//console.log(resposta); // chamada da função acima

// função de soma, mostrando no console no final
function somar (a , b){

	return a + b;
}

console.log(somar (2,5));

// document.getElementById("id da tag HTML").onClick "parametro que bisca a ação do botão criado no HTML";
// document.getElementById("valor-a").value; "Pega o valor dos INPUTS criados no HTML através do ID dos mesmos";
// alert "Exibe na tela para o usuario o valor de retorno da função";

document.getElementById("btn-calcular").onclick = function(){

	var valorA = document.getElementById("valor-a").value;
	var valorB = document.getElementById("valor-b").value;

	alert(parseInt(valorA) + parseInt(valorB));
}