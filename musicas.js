'use strict'

// Buscar todas as músicas
async function getMusica() {
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

// Buscar música por ID
async function getMusicas(id) {
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

// Cadastrar nova música
async function postMusica(musica) {
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(musica)
    }
    const response = await fetch(url, options)
    const result = await response.json()
    console.log('Música cadastrada:', result)
    return result
}

// Exemplo de nova música
const novaMusica = {
    "nome": "Bruno da motinha",
    "link": "https://www.youtube.com/watch?v=s1VDUKXjyBo&rco=1",
    "duracao": "2:10",
    "data_lancamento": "2021-11-23",
    "foto_capa": "https://yt3.googleusercontent.com/PWLjPQxw0nIu5hgiFggGFVE2oIp0JgBg6ZGpgttC4Y0Z_Scg-jK4-HxPt5Xj7XbN7ut99QDIZg=s900-c-k-c0x00ffffff-no-rj",
    "letra": "teste"
}

// Preencher os cards ao carregar
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('musicas-container')
    const dados = await getMusica();

    if (dados && Array.isArray(dados.musics) && dados.musics.length > 0) {
        dados.musics.forEach(musica => {
            const div = document.createElement("div");
            div.classList.add("card-musica");
            div.innerHTML = `
                <img src="${musica.foto_capa}" alt="Capa da música" />
                <h3>${musica.nome}</h3>
                <p><a href="${musica.link}" target="_blank">▶ Ouvir música</a></p>
                <p>${musica.letra}</p>
            `;
            container.appendChild(div);
        });
    } else {
        container.innerHTML = "<p style='color:white'>Nenhuma música encontrada.</p>";
    }
})
