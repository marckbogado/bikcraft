const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
    if(resposta.ok) {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='##317a00'>Mensagem enviada. </span>Embreve entraremos em contato. Geralmente entramos em contato dentro de 24hrs</p>";
    }else {
        formulario.innerHTML = "<pclass='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='##317a00'><span style='#300000'>Erro no envio.</span> Você pode enviar diretamente para o nosso email em: contato@bikcraft.com.br</p>";
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("./enviar.php", {
        method: "POST",
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);