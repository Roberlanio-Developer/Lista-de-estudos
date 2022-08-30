const inputmateria = document.getElementById('Materia-Nova');
let itemId = 1;
const lista = document.querySelector('#lista');

function removeItem(id) {
  /**
   * Aqui eu seleciono o LI que foi criado na linha 12
   * Usei parentNode porque vc criou um li dentro do outro para cada item, e eu preciso remover um filho da lista(UL)
   * Exemplo: 
   *            <li>
   *                <li>
   *                   <span>${inputmateria.value}</span>
                       <button class="excluir">X</button>
   *                </li>
   *            </li>
   *  */
  const itemToRemove = document.getElementById(id).parentNode;

  /**
   * a função removeChild recebe o Elemento e o remove da DOM
   *  */
  lista.removeChild(itemToRemove);
}

function adicionarmateria() {
  const item = document.createElement('li');

  item.innerHTML = `<li id=${itemId}>
                      <span>${inputmateria.value}</span>
                      <button onClick={removeItem(${itemId})} class="excluir">X</button>
                   </li>`;

  lista.appendChild(item);

  inputmateria.value = '';
  itemId++;
}

const botao = document.querySelector('#btn-adicionar');
botao.addEventListener('click', adicionarmateria);

function limparlista() {
  lista.innerHTML = '';
}

const botaolimpar = document.querySelector('.bt-azul');
botaolimpar.addEventListener('click', limparlista);






