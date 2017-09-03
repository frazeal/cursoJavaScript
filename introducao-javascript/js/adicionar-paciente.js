var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", adicionarPaciente);

function apagarMensagensErro(erros) {
    var listaErros = document.querySelector("#lista-erros");
    listaErros.innerHTML = "";
}

function adicionarPaciente(event) {
    event.preventDefault();
    
    var formulario = document.querySelector("#form-adicionar-paciente");
    var paciente = obterPacienteDoFormulario(formulario);

    var errosFormulario = validarFormulario(paciente);
    
    if (errosFormulario.length > 0) {
        exibirMensagensErro(errosFormulario);
    } else {
        apagarMensagensErro();
        criarPacienteTr(paciente);
    }
    //limparFormulario(formulario);
    formulario.reset();
}

function exibirMensagensErro(erros) {
    var listaErros = document.querySelector("#lista-erros");
    listaErros.innerHTML = "";
    erros.forEach(function(erro) {
        var itemLista = document.createElement("li");
        itemLista.classList.add("mensagem-alerta");
        itemLista.textContent = erro;
        listaErros.appendChild(itemLista);
    });
}

function obterPacienteDoFormulario(formulario) {
    var paciente = { 
        nome : formulario.nome.value,
        peso : formulario.peso.value,
        altura : formulario.altura.value,
        gordura : formulario.gordura.value,
        imc : calcularImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function criarPacienteTr(paciente) {
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
    document.querySelector("#tabela-pacientes").appendChild(trPaciente);

    var tdNome = document.createElement("td");
    tdNome.classList.add(".info-nome");
    tdNome.textContent = paciente.nome;
    trPaciente.appendChild(tdNome);

    var tdPeso = document.createElement("td");
    tdPeso.classList.add(".info-peso");
    tdPeso.textContent = paciente.peso;
    trPaciente.appendChild(tdPeso);

    var tdAltura = document.createElement("td");
    tdAltura.classList.add(".info-altura");
    tdAltura.textContent = paciente.altura;
    trPaciente.appendChild(tdAltura);

    var tdGordura = document.createElement("td");
    tdGordura.classList.add(".info-gordura");
    tdGordura.textContent = paciente.gordura;
    trPaciente.appendChild(tdGordura);

    var tdImc = document.createElement("td");
    tdImc.classList.add(".info-imc");
    tdImc.textContent = paciente.imc;
    trPaciente.appendChild(tdImc);
}

function limparFormulario(formulario) {
    formulario.nome.value = "";
    formulario.peso.value = "";
    formulario.altura.value = "";
    formulario.gordura.value = "";
}

function validarFormulario(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode estar em branco.");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode estar em branco.");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode estar em branco.");
    }
    if (paciente.gordura.length == 0) {
        erros.push("O percentural de gordura  não pode estar em branco.");
    }
    if (validarPeso(paciente.peso) == false) {
        erros.push("O peso é inválido.");
    }
    if (validarAltura(paciente.altura) == false) {
        erros.push("A altura é inválida.");
    }
    return erros;
}