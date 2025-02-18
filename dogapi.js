'use strict'

// Função para emcontrar a raça digitada 
async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response  = await fetch(url) // fetch -> faz requisições web (conversa com o back)
    const data      = await response.json() // chamar apenas o json
    return (data.message)
}

// Função para criar as imgs dentro da DIV 
function criarImagem(link){ // Recebe o link da imagem 
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img') // criando nova imagem 
    novaImg.src = link // Cria a nova image, com a link da foto do API 

    galeria.appendChild(novaImg)
}

async function preencherFotos(){
    const raca = document.getElementById('raca').value // Reconhece o valor digitado dentro do input 
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('') // Substituir todos os itens por vazio (apaga as fotos antigas)

    fotos.forEach (criarImagem)
}

document.getElementById('pesquisar').addEventListener('click', preencherFotos)
