let buscarFilme = document.getElementById("buscarFilme");

buscarFilme.onclick  = () => {

    let filmeDigitado = document.getElementById("filmeDigitado");

    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=b3c994797c0a342becac5a5924c31a19&language=pt-br'

    fetch(url)
        .then(response => response.json())
        .then(response => exibirFilmes(response))
}

// function exibirFilme(filme) {

// let titulo = document.getElementById("titulo");
// let ano = document.getElementById("ano");
// let duracao = document.getElementById("duracao");
// let classificacaoIndicativa = document.getElementById("classificacaoIndicativa");


// titulo.innerText = filme.Title
// ano.innerText = filme.Year
// duracao.innerText = filme.Runtime
// classificacaoIndicativa.innerText = filme.Rated

// let divImg = document.getElementById("poster");
// divImg.innerText = "";

// let poster = document.createElement("img")
// poster.src = filme.Poster

// divImg.append(poster)
// }

function exibirFilme0(filme) {

    let informacoes= document.getElementById("todosFilmes");
    
    let infoFilmes = document.createElement("ul")
    let id = document.createElement("li")
    let titulo = document.createElement("li")
    titulo.classList.add("tituloFilme");
    let sinop = document.createElement("li")
    let ano = document.createElement("li")
    let LinkFilme = document.createElement("a")
    let banner  = document.createElement("img")
    let assista = document.createElement("button")
    assista.classList.add("btn_Assistir")
    let linha = document.createElement("hr")
    linha.classList.add("linha");
    
    
    titulo.innerText ="Titulo: "+ filme.title
    id.innerText = "Id: "+filme.id
    sinop.innerText = "Sinop: "+filme.overview
    ano.innerText= "Data de Lançamento: "+filme.release_date
    LinkFilme.href ='https://embedder.net/e/'+filme.id
    LinkFilme.innerText = "assista"

    banner.src = 'https://image.tmdb.org/t/p/w185'+filme.poster_path  

    infoFilmes.appendChild(titulo)
    infoFilmes.appendChild(id)
    infoFilmes.appendChild(sinop)
    infoFilmes.appendChild(ano)
    infoFilmes.appendChild(banner)
    infoFilmes.appendChild(linha)
    infoFilmes.appendChild(LinkFilme)
    informacoes.append(infoFilmes)
    informacoes.appendChild(assista)
    assista.appendChild(LinkFilme)
  
}

function exibirFilmes(response) {
    console.log(response)
    response.results.forEach(filme => {
        exibirFilme0(filme)
    });
}
