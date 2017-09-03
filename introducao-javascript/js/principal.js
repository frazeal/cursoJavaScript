var titulo = document.querySelector(".titulo-tabela");
titulo.textContent = "Meus queridos e amados pacientes";

var pacientes = document.querySelector("#tabela-pacientes").querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    calcularImc(peso, altura);
}

function calcularImc(peso, altura) {
    var pesoValido = true;
    var alturaValida = true;
    
    if (peso < 0 || peso > 1000) {
        paciente.querySelector(".info-peso").textContent = "Peso inválido!";
        pesoValido = false;    
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura < 0 || altura > 3.0) { 
        paciente.querySelector(".info-altura").textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    } else {
        var imc = 0;
        paciente.querySelector(".info-imc").textContent = "Paciente inválido!";
    }

    return imc;
}

var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event) {
    event.preventDefault();
    console.log("Adiciona novo paciente na tabela");
    var formulario = document.querySelector("#form-adicionar-paciente");
    var nome = formulario.nome.value;
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var gordura = formulario.gordura.value;
    var imc = calcularImc(peso, altura);

    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
    document.querySelector("#tabela-pacientes").appendChild(trPaciente);

    var tdNome = document.createElement("td");
    tdNome.classList.add(".info-nome");
    tdNome.textContent = nome;
    trPaciente.appendChild(tdNome);

    var tdPeso = document.createElement("td");
    tdPeso.classList.add(".info-peso");
    tdPeso.textContent = peso;
    trPaciente.appendChild(tdPeso);

    var tdAltura = document.createElement("td");
    tdAltura.classList.add(".info-altura");
    tdAltura.textContent = altura;
    trPaciente.appendChild(tdAltura);

    var tdGordura = document.createElement("td");
    tdGordura.classList.add(".info-gordura");
    tdGordura.textContent = gordura;
    trPaciente.appendChild(tdGordura);

    var tdImc = document.createElement("td");
    tdImc.classList.add(".info-imc");
    tdImc.textContent = imc.toFixed(2);
    trPaciente.appendChild(tdImc);

    formulario.nome.value = "";
    formulario.peso.value = "";
    formulario.altura.value = "";
    formulario.gordura.value = "";
}