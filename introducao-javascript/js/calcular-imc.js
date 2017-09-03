var pacientes = document.querySelector("#tabela-pacientes").querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);
    
    if (!pesoValido) {
        paciente.querySelector(".info-peso").textContent = "Peso inválido!";    
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValida) {        
        paciente.querySelector(".info-altura").textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida) {
        var imc = calcularImc(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
    } else {
        paciente.querySelector(".info-imc").textContent = "Paciente inválido!";
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validarPeso(peso) {
    if (peso < 0 || peso > 1000) {
        return false;
    }
    return true;
}

function validarAltura(altura) {
    if (altura < 0 || altura > 3.0) { 
        return false;
    }
    return true;
}