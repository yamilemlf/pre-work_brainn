const form = document.querySelector('[data-js="formCars"]');
const table = document.querySelector('[data-js="tableCars"]');

function getFormElementValue (event, elementName) {
  return event.target.elements[elementName].value
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const image = getFormElementValue(e, 'imagem');
  const branchModel = getFormElementValue(e, 'marca-modelo');
  const year = getFormElementValue(e, 'ano');
  const plate = getFormElementValue(e, 'placa');
  const color = getFormElementValue(e, 'cor');
  const elements = [image, branchModel, year, plate, color];

  const tr = document.createElement('tr');
  elements.forEach(element => {
    const td = document.createElement('td');
    td.textContent = element;
    tr.appendChild(td);
  })

  table.appendChild(tr);

  e.target.reset();
  imagem.focus();
})
