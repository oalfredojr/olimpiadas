function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    // Usamos getElementById para encontrar um elemento pelo seu ID
    let section = document.getElementById
    ("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
         
          section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado da lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || 
        descricao.includes(campoPesquisa) || tags.includes
        (campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
          `;
        }
        
      if (!resultados) {
          resultados = "<p>Nada foi encontrado..</p>"
      }
      
    }
  
    // Atribui o HTML construído à seção de resultados
    // innerHTML substitui todo o conteúdo HTML da seção
    section.innerHTML = resultados;
  }

//console.log(dados);




