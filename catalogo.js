

window.onload = function() {
    var filmesDiv = document.getElementById('filmes');

    

        var filmes = [
            { title: 'Besouro Azul', img: src="img/besouro azul.svg" },
            { title: 'Agente Stone', img: src="img/agente stone.svg" },
            { title: 'Oppenheimer', img: src="img/Oppenheimer.svg" },
            { title: 'Barbie', img: src="img/barbie.svg" },
            { title: 'Megatubarão 2', img: src="img/megatubarao_2.svg" },
            { title: 'Elementos', img: src="img/elementos.svg" },
            { title: 'Johnny Depp x Amber Heard', img: src="img/Johnny Depp x Amber Heard.svg" },
            { title: 'Homem-Aranha: Através do Aranhaverso', img: src="img/Homem-Aranha_ Através do Aranhaverso.svg" },
            { title: 'Guardiões da Galáxia Vol.3', img: src="img/Guardiões da Galáxia_ Vol_3.svg" },
            { title: 'Velozes & Furiosos 10', img: src="img/Velozes & Furiosos 10.svg" }
        ];
        for (var i = 0; i < filmes.length; i++) {
            var filmeDiv = document.createElement('div');
            filmeDiv.className = 'filme col-md-4';

            var img = document.createElement('img');
            img.src = movie.image;
            item.appendChild(img);

        var title = document.createElement('h2');
        title.textContent = filmes[i].title;
        filmeDiv.appendChild(title);

        

        filmesDiv.appendChild(filmeDiv);
    }
}
