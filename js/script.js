//deixando o hover dos links estáticos ao entrar na página
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    
    const url = window.location.href; //info da URL está no objeto LOCATION
    const href = link.href;

    if (url.includes(href)) { //INCLUDES verifica se a palavra existe em outra string
        link.classList.add("ativo");//adicionando uma classe com classList
    }
}

links.forEach(ativarLink);





//ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);




//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);



//Galeria de Imagens
//selecionando a galeria (img)
const galeria = document.querySelectorAll(".bicicleta-imagens img");
//selecinando o container que envolve a galeria
const galeriaContainer = document.querySelector(".bicicleta-imagens");

//função para trocar a imagem
function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;

    if (media){
    galeriaContainer.prepend(img);//prepend adicona o item a frente
    }
}

//evento de click para trocar a imagem
function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);




//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}