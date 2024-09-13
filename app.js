function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(campoPesquisa == "") {
        section.innerHTML = `"<p class="mensagem-aviso">Nenhum resultado foi encontrado. <br> Digite obras como: Monalisa, O grito, Criação de Adão.. :)</p>"`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados

    for (let dado of dados) {
        // se titulo includes campoPesquisa
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
            <div>
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" class="item-botao">Mais informações</a>
            </div>
            <img src="${dado.imagem}" class="item-imagem">
        </div>
        `;
        }    
    }

    if (!resultados) {
        resultados = `"<p class="mensagem-aviso">Nenhum resultado foi encontrado. Tente novamente!</p>"`
    }

    section.innerHTML = resultados;

}


