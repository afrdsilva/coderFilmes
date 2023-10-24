// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

//API Buscar Filmes
let buscarFilme = document.getElementById("buscarFilme");

window.onload = () => {

  let filmeDigitado = document.getElementById("filmeDigitado");

  let url = 'https://api.themoviedb.org/3/movie/popular?api_key=b3c994797c0a342becac5a5924c31a19&language=pt-br'

  fetch(url)
    .then(response => response.json())
    .then(response => exibirFilmes(response))
}

function exibirFilme(filme) {

  let todosFilmes = document.getElementById("infos");

  let infoFilme = document.createElement("ul")

  let titulo = document.createElement("h1");
  titulo.classList.add("tituloFilme");
  let sinopse = document.createElement("h2")
  let poster = document.createElement("img")
  poster.classList.add("poster")
  let quebraLinha = document.createElement("br")
  let assistir = document.createElement("button")
  assistir.classList.add("assistir")


  let linkFilme = document.createElement("a")

  titulo.innerText = filme.title
  sinopse.innerText = filme.overview
  poster.src = 'https://image.tmdb.org/t/p/w185' + filme.poster_path
  linkFilme.innerText = 'Assistir'
  linkFilme.href = 'https://embedder.net/e/' + filme.id

  assistir.appendChild(linkFilme)

  infoFilme.appendChild(titulo)
  infoFilme.appendChild(sinopse)
  infoFilme.appendChild(poster)
  infoFilme.appendChild(quebraLinha)
  infoFilme.appendChild(assistir)

  todosFilmes.append(infoFilme)
}

function exibirFilmes(response) {
  console.log(response)
  response.results.forEach(filme => {
    exibirFilme(filme)
  });
}

