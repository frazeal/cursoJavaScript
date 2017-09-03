var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event) {
    event.preventDefault();
    
    var formulario = document.querySelector("#form-adicionar-paciente");
    var paciente = obterPacienteDoFormulario(formulario);

    criarPacienteTr(paciente);
    //limparFormulario(formulario);
    formulario.reset();
}

function obterPacienteDoFormulario(formulario) {
    var paciente = { 
        nome : formulario.nome.value,
        peso : formulario.peso.value,
        altura : formulario.altura.value,
        gordura : formulario.gordura.value,
        imc : calcularImc(peso, altura)
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