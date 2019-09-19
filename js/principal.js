var botaoBuscar = document.querySelector("#botao-adicionar");
botaoBuscar.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var evento = document.querySelector("#nome").textContent;
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagenDeErro(erros);
        return;
    }