class cadastraLivros {
    constructor(corpo) {

        var espaco = document.createElement("br")
        

        var inputNome = document.createElement("input")
        inputNome.placeholder = "Nome"

        var inputidiomaOriginal = document.createElement("input")
        inputidiomaOriginal.placeholder = "Idioma Original do livro"

        var inputCategoria = document.createElement("select")
        let valorComedia = document.createElement("option")
        valorComedia.value = "Comedia"
        valorComedia.innerText = "Comedia"
        let valorDrama = document.createElement("option")
        valorDrama.value = "Drama"
        valorDrama.innerText = "Drama"
        inputCategoria.appendChild(valorComedia)
        inputCategoria.appendChild(valorDrama)


        var inputQuantidadePaginas = document.createElement("input")
        inputQuantidadePaginas.placeholder = "Quantas Paginas?"
        inputQuantidadePaginas.type = "number"

        var inputquaercoisaome = document.createElement("input")
        inputquaercoisaome.placeholder = "Nome"

        var inputNota = document.createElement("input")
        inputNota.placeholder = "De uma nota? (0-10)"
        inputQuantidadePaginas.type = "number"

        var inputDataNasc = document.createElement("input")
        inputDataNasc.placeholder = "Data de Nascimento"
        let labelDataNasc = document.createElement("label")
        labelDataNasc.innerText = "Data do lancamento"

        corpo.appendChild(inputNome)
        corpo.appendChild(espaco)
        corpo.appendChild(inputidiomaOriginal)
        corpo.appendChild(espaco.cloneNode())
        corpo.appendChild(inputCategoria)
        corpo.appendChild(inputquaercoisaome)
        corpo.appendChild(labelDataNasc)
        corpo.appendChild(inputDataNasc)
        corpo.appendChild(inputNota)
        corpo.appendChild(inputQuantidadePaginas)

    }
}