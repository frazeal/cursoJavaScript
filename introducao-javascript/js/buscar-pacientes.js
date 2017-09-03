var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", buscarPaciente);

function buscarPaciente(event) {
    var xhr = new XMLHttpRequest();
    var url = "https://api-pacientes.herokuapp.com/pacientes";
    xhr.open("GET", url);

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            apagarMensagemErro();
            var resposta = xhr.responseText;
            console.log(resposta);
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                criarPacienteTr(paciente)
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            exibirMensagemErro(xhr.status, xhr.responseText);
        }
        
    });

    xhr.send();
}

function exibirMensagemErro(errorStatus, errorResponseText) {
    var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.remove("invisivel");
    erroAjax.classList.add("mensagem-alerta");
    erroAjax.innerHTML = errorStatus + " " + errorResponseText;
}

function apagarMensagemErro() {
    var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.add("invisivel");
    erroAjax.classList.remove("mensagem-alerta");
    erroAjax.innerHTML = " ";
}