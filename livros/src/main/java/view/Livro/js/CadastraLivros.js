class cadastraLivros {
    constructor(corpo) {

        //outros
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var espaco = document.createElement("br")

        //inputs
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

        var inputLancamento = document.createElement("input")
        inputLancamento.type = "date"
        inputLancamento.placeholder = "Data de Nascimento"
        let labelLancamento = document.createElement("label")
        labelLancamento.innerText = "Data do lancamento"

        //appends

        div.appendChild(inputNome)
        div.appendChild(espaco)
        div.appendChild(espaco.cloneNode())
        div.appendChild(espaco.cloneNode())
        div.appendChild(inputidiomaOriginal)
        div.appendChild(espaco.cloneNode())
        div.appendChild(espaco.cloneNode())
        div.appendChild(inputCategoria)
        div2.appendChild(inputNota)
        div2.appendChild(inputQuantidadePaginas)
        div2.appendChild(inputquaercoisaome)
        div2.appendChild(labelLancamento)
        div2.appendChild(inputLancamento)
        corpo.appendChild(div)
        corpo.appendChild(div2)



        //css
        div.style = "background-color:black;" +
            "padding-left: 75%;"

        div2.style = "padding-left: 75%;" +
            "padding-bottom: 5%;"

        
    }
}