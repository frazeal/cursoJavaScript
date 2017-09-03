var titulo = document.querySelector(".titulo-tabela");
titulo.textContent = "Meus queridos e amados pacientes";

var paciente = document.querySelector("#primeiro_paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var pesoValido = true;
var alturaValida = true;

if (peso < 0 || peso > 1000) {
    paciente.querySelector(".info-peso").textContent = "Peso inválido!";
    pesoValido = false;    
}

if (altura < 0 || altura > 3.0) { 
    paciente.querySelector(".info-altura").textContent = "Altura inválida!";
    alturaValida = false;    
}

if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
} else {
    var imc = "Paciente inválido!";
}
paciente.querySelector(".info-imc").textContent = imc;
