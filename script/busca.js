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
    let id = document.getElementById("id");
    let titulo = document.getElementById("titulo");
    let ano = document.getElementById("ano");
    let sinop = document.getElementById("overview");
    let banner = document.getElementById("poster");

    
    id.innerText = filme.id
    titulo.innerText = filme.title
    ano.innerText= filme.release_date
    sinop.innerText = filme.overview
   
    let posterImg = document.createElement("img")
    posterImg.src = 'https://image.tmdb.org/t/p/w500'+filme.poster_path  
    banner.append(posterImg)

  
}

function exibirFilmes(response) {
    console.log(response)
    response.results.forEach(filme => {
        exibirFilme0(filme)
    });
}
