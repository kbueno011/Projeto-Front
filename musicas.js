'use strict'

async function  getMusica(){
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)
    return dados
}

async function  getMusica(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)
    return dados
}


// async function postMusica(musica){
//     const url = 'http://localhost:8080/v1/controle-musicas/musica'
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(musica)
//     }

//     const response = await fetch(url, options)
//     const result = await response.json()
//     console.log('Contato cadastrado:', result)
//     return result
// }

// const novaMusica = {
//     "nome": "Gods plan",
//     "link":"http://linkmusica.mp3",
//     "duracao": "4:00",
//     "data_lancamento": "2010-01-18",
//     "foto_capa": "http://image.png",
//     "letra": "teste "
// }
