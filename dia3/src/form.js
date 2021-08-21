const username = document.querySelector('[data-js="usernameInput"]')

//Exercicio 1: Evento no input name:
username.addEventListener('input', (e) => {
  e.target.value = primeiraLetraMaiuscula(e.target.value)
})

const primeiraLetraMaiuscula = text => {
	return text.toLowerCase()
		.split(' ')
		.map((word) => {
      if(word.length === 0) {
        return ''
      }
      if(word !== "de"
      && word !== "da"
      && word !== "das"
      && word !== "do"
      && word !== "dos"
      ) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word
      }
		}).join(' ')
}

// Exercicio 2: Evento no select:

//configurando e adicionando select ao formulario
const form = document.querySelector('[data-js="form"]');
const select = document.createElement('select');
const colors = [
  {value: '#0000ff', textContent: 'azul'},
  {value: '#ffff00', textContent: 'amarelo'},
  {value: '#ff0000', textContent: 'vermelho'},
  {value: '#000000', textContent: 'preto'},
  {value: '#00ff00', textContent: 'verde'}
];

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color.value;
  option.textContent = color.textContent;
  select.appendChild(option);
});

select.setAttribute('multiple', '');
form. appendChild(select);

//configurando os eventos select
const colorsContainer = document.createElement('div');
colorsContainer.style.display = 'flex'

select.addEventListener('change', (e) => {
  console.log(e.target.selectedOptions)})

select.addEventListener('change', (e) => {
  colorsContainer.innerHTML = '';
  [... e.target.selectedOptions].map((option) => {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = option.value;
    div.style.margin = '10px';
    colorsContainer.appendChild(div);
    document.body.appendChild(colorsContainer);
  })
});
