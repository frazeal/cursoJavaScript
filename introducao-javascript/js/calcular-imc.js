var pacientes = document.querySelector("#tabela-pacientes").querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
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
        var imc = calcularImc(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
    } else {
        paciente.querySelector(".info-imc").textContent = "Paciente inválido!";
    }
    calcularImc(peso, altura);
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
