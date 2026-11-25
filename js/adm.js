const CHAVE = "reusa-usuarios";

const form = document.getElementById("form-cadastro");
const campoNome = document.getElementById("campo-nome");
const campoEmail = document.getElementById("campo-email");
const lista = document.getElementById("lista-usuarios");
const btnLimpar = document.getElementById("btn-limpar");
const btnExcluirTodos = document.getElementById("btn-excluir-todos"); 
const campoPesquisa = document.getElementById("campo-pesquisa");


function carregar() {
    return  JSON.parse(localStorage.getItem(CHAVE)) || [];
}

function salvar(usuarios) {
    localStorage.setItem(CHAVE, JSON.stringify(usuarios));
}

function renderizar(usuarios) {
    lista.innerHTML = "";

    usuarios.forEach(function(usuario) {
        const li = document.createElement("li");
        li.textContent = usuario.data + " - " + usuario.nome + " - " + usuario.email;

        const botao = document.createElement("button");
        botao.textContent = "Excluir";
        botao.type = "button";
        botao.className = "botao botao-excluir";

        botao.addEventListener("click", function() {
            excluirItem(usuario.id);
        });

        li.appendChild(botao);
        lista.appendChild(li);
    });
}

function excluirItem(id) {
    if(!confirm("Deseja realmente excluir este usuário?")) {
        return;
    }

    const usuarios = carregar().filter(function(usuario) {
        return usuario.id !== id;
    });

    salvar(usuarios);
    renderizar(filtrar(usuarios));
}

function filtrar(usuarios) {
    const termo = campoPesquisa.value.trim().toLowerCase();

    return usuarios.filter(function(usuario) {
        return usuario.nome.toLowerCase().includes(termo) || usuario.email.toLowerCase().includes(termo);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = {
        id: Date.now(),
        data: new Date().toLocaleString("pt-BR"),
        nome: campoNome.value.trim(),
        email: campoEmail.value.trim()
    };
    
    const usuarios = carregar();
    usuarios.push(usuario);
    salvar(usuarios);
    renderizar(filtrar(usuarios));
    form.reset();
});

btnLimpar.addEventListener("click", function() {
    form.reset();
});

btnExcluirTodos.addEventListener("click", function() {
    if(carregar().length === 0) {
        alert("Não há usuários para excluir.");
        return;
    }

    if(!confirm("Deseja realmente excluir TODOS os usuários?")) {
        return;
    }

    localStorage.removeItem(CHAVE);
    renderizar([]);
});

campoPesquisa.addEventListener("input", function() {
    renderizar(filtrar(carregar()));
});

renderizar(filtrar(carregar()));