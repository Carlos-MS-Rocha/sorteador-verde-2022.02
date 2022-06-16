//Selecinou as tags 
//Interctar o clique no botão
//Pegar as informaçoes que estão dentro do campo
const sortear = document.querySelector(".botaoSortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const fechar = document.querySelector(".fechar")

//console.log(resultado)

//console.log(sortear)
//console.log(entradanomes)

//Pegando dados do formulario
function pegarDadosFormulario(){

    //Recuperando valor do campo (textarea)
    const valorCampo = textarea.value
    const listaNomes = valorCampo.split(",")
    const tamanhoArray = listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome = listaNomes[posicaoNome]

    //console.log(listaNomes[posicaoNome])
    mostrarResultado(nome)

        textarea.value = ""
    
}

//Interceptando o clique / executando funçao
sortear.addEventListener("click", pegarDadosFormulario)
    
//Gerando numero aleatorio
function gerarNumeroAleatorio(tamanhoArray){
        //retorna o numero
        return Math.floor(Math.random() * (tamanhoArray - 0) + 0)
}

function mostrarResultado(nome){

        //console.log(nomeResultado)
        tagResultado.innerText =`Resultado: ${nome}`
        popUpResultado.classList.add("mostrarResultado")
        //resultado
}

function fecharPopUp(){

        popUpResultado.classList.remove("mostrarResultado")
}

fechar.addEventListener("click", fecharPopUp)

