document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um listener para o evento de envio do formulário
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Captura os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var dia = document.getElementById("dia").value;
        var horario = document.getElementById("horario").value;

        // Cria uma mensagem com os valores capturados
        var mensagem = "Agendamento finalizado:\n";
        mensagem += "Nome do Cliente: " + nome + "\n";
        mensagem += "Dia: " + dia + "\n";
        mensagem += "Horário: " + horario;

        // Exibe a mensagem na tela
        alert(mensagem);

        // Opcionalmente, você pode exibir os valores em algum elemento HTML na página
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<p>" + mensagem.replace(/\n/g, "<br>") + "</p>";
    });
});
