var tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("esmaecer");
    setTimeout(function () {
        if (event.target.tagName == "TD") {
            event.target.parentNode.remove();
        }
    }, 350);
    
});