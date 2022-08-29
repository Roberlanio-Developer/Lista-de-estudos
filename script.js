


const inputmateria = document.
getElementById("Materia-Nova")

function adicionarmateria () {
    const item = document.createElement("li");

    item.innerHTML = `<li>
    <span>${inputmateria.value}</span>
    <button class="excluir">X</button>
</li>`;


    const lista = document.querySelector("#lista")

    lista.appendChild(item)

    inputmateria.value=""

}

const botao = document.querySelector("#btn-adicionar")
botao.addEventListener("click", adicionarmateria);

function limparlista(){
    
    const lista = document.querySelector("#lista"); lista.innerHTML=""

}

const botaolimpar = document.querySelector(".bt-azul")
botaolimpar.addEventListener("click", limparlista);



