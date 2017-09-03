var titulo = document.querySelector(".titulo-tabela");
titulo.textContent = "Meus queridos e amados pacientes";

var pacientes = document.querySelector("#tabela-pacientes").querySelectorAll(".paciente");
console.log(pacientes);

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
        var imc = peso / (altura * altura);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    } else {
        paciente.querySelector(".info-imc").textContent = "Paciente inválido!";
    }
     
}

