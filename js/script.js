document.getElementById("botao").addEventListener("click", validaFormulario);


function validaFormulario(){
  if(document.getElementByID("nome").value != "" && document.getElementByID("email").value != "" && document.getElementByID("telefone").value != ""  ){
    alert("Prontinho! Você receberá as novidades por email.");
  }else{
    alert("Por favor, preencha os campos nome e email!");
  }
}




