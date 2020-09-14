/*Desenvolver um programa similar a um cadastro de biblioteca, onde é possível cadastrar livros com as seguintes informações: Título, Editora, Autor, Ano de lançamento, Cópias disponíveis.
O programa deve possuir as seguintes opções:
- Cadastrar novo livro  - Excluir cadastro de livro  - Editar cadastro de livro  - Listar livros por Editora ou Autor    - Consultar quantidade de cópias pelo Nome   - Sair do programa 
*/

//pegando os dados do html
var titulo = document.getElementById("tituloLivro")
var editora = document.getElementById("editoraLivro")
var autor = document.getElementById("autorLivro")
var anoLancamento = document.getElementById("anoLancamentoLivro")
var numCopias = document.getElementById("numCopiasLivro")

//array livros
let livros = []

//funcao construtora de livro
function livro(titulo, editora, autor, anoLancamento, numCopias) {
    this.titulo = titulo
    this.editora = editora
    this.autor = autor
    this.anoLancamento = anoLancamento
    this.numCopias = numCopias
}

//funcao que cadastra um novo livro
function cadastrarNovoLivro() {
    var novoLivro = new livro(titulo.value, editora.value, autor.value, anoLancamento.value, numCopias.value)
    livros.push(novoLivro)
    alert("Informações cadastradas: " + "\n" + Object.values(livros[livros.length - 1]))
    console.log(livros)

    //limpar inputs apos cadastrar livro
    titulo.value = ""
    editora.value = ""
    autor.value = ""
    anoLancamento.value = ""
    numCopias.value = ""
}

//funcao que mostra todos os cadastrados na tela
function listarCadastrados() {
    let lista = " "
    for (i = 0; i < livros.length; i++) {
        lista += (Object.values(livros[i]).join(' - ')) + "<br>"
    }
    document.getElementById("todosCadastros").innerHTML = lista
}

//executando alguma das outras opcoes possiveis
function executarOutraOpcao() {
    //verificando qual item foi selecionado
    var checkedOption = ""
    for (i = 0; i < document.getElementsByName('radioOutrasOpcoes').length; i++) {
        if (document.getElementsByName('radioOutrasOpcoes')[i].checked) {
            checkedOption = document.getElementsByName('radioOutrasOpcoes')[i].value;
        }
    }

    //codigos a executar, dependendo da opcao selecionada pelo usuario
    switch (checkedOption) {
        //excluir um livro pelo titulo
        case "excluirCadastro":
            excluir()
            listarCadastrados()
            break

        case "editarCadastro":
            editar()
            listarCadastrados()
            break

        case "listarEditora":
            listarPorEditora()
            break

        case "listarAutor":
            listarPorAutor()
            break

        case "consultarNumCopias":
            consultarQuantidadeCopias()
            break
    }

    if (checkedOption === "") {
        alert("Selecione a opção desejada.");
    }
}

//funcoes excluir, editar, listar, consultar e sair
function excluir() {
    var livroExcluir = prompt("Digite o nome do livro a ser excluído: ")
    for (var i = 0; i < livros.length; i++) {
        if (livros[i].titulo === livroExcluir) {
            livros.splice(i, 1)
            return
        }
    }
    alert("Livro não encontrado!")
}

function editar() {
    var livroEdicao = prompt("Digite o título do livro a ser editado: ")
    var campoEdicao = Number(prompt("Insira o número correspondente ao item que você deseja editar: " + "\n" + "1 (Título), 2 (Editora), 3 (Autor), 4 (Ano de lançamento), 5 (Número de cópias disponíveis)."))

    for (var i = 0; i < livros.length; i++) {
        //edicao de titulo (num = 1)
        if (livros[i].titulo === livroEdicao && campoEdicao === 1) {
            livros[i].titulo = prompt("Digite o novo título: ")
            return
        }

        //edicao de editora (num = 2)
        if (livros[i].titulo === livroEdicao && campoEdicao === 2) {
            livros[i].editora = prompt("Digite a nova editora: ")
            return
        }

        //edicao de autor (num = 3)
        if (livros[i].titulo === livroEdicao && campoEdicao === 3) {
            livros[i].autor = prompt("Digite o novo autor: ")
            return
        }

        //edicao de ano lancamento (num = 4)
        if (livros[i].titulo === livroEdicao && campoEdicao === 4) {
            livros[i].anoLancamento = prompt("Digite o novo ano de lançamento: ")
            return
        }

        //edicao de num copias (num = 5)
        if (livros[i].titulo === livroEdicao && campoEdicao === 5) {
            livros[i].numCopias = prompt("Digite o novo número de cópias: ")
            return
        }
    }
}

function listarPorEditora() {
    let listaEditora = " "
    for (i = 0; i < livros.length; i++) {
        listaEditora += `Obra: ${livros[i].titulo}  (Editora ${livros[i].editora})` + "<br>"
    }
    document.getElementById("todosCadastros").innerHTML = listaEditora
}

function listarPorAutor() {
    let listaAutor = " "
    for (i = 0; i < livros.length; i++) {
        listaAutor += `${livros[i].titulo}  (Autor: ${livros[i].autor})` + "<br>"
    }
    document.getElementById("todosCadastros").innerHTML = listaAutor
}

function consultarQuantidadeCopias() {
    var livroConsulta = prompt("Digite o nome do livro a ser consultado: ")
    for (var i = 0; i < livros.length; i++) {
        if (livros[i].titulo === livroConsulta) {
            alert(`A biblioteca possui ${livros[i].numCopias} exemplar(es) da obra "${livroConsulta}"`)
            return
        }
    }
    alert("Livro não encontrado!")
}

function sairSistema() {
    var confirmarSaida = prompt("Tem certeza que deseja sair do sistema? \n (s = sim   n = não )")

    if (confirmarSaida === "s") {
        alert("Você saiu do sistema!")
    }
}