var tempoAlerta = 3000; // 3 segundos

function alerta(){
	swal({
  title: "Mensagem enviada!",
  text: "Em breve retornarei o seu contato, desde já agradeço!",
  icon: "success",

});
function redirecionarProximaPagina() {
  window.location.href = "https://andreviniciussg.github.io/Site_Profissional-FlexBox-Andre/contato.html";
}
setTimeout(redirecionarProximaPagina, tempoAlerta);
}