const append = document.getElementById('infoSection');
const firstLineSection = document.createElement('section');

function createInfoText() {
  const createP = document.createElement('p');
  createP.id = 'funcionamento';
  createP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  append.appendChild(createP);
}

function createFirstSection() {
  firstLineSection.className = 'firstLineBox';
  append.appendChild(firstLineSection);
}

function createBtnTasks() {
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerText = 'Create Task';
  createButton.classList = 'styleHeadButtons';
  firstLineSection.appendChild(createButton);
}

function createInputAssigment() {
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('type', 'text');
  createInput.name = 'inputAssigment';
  createInput.classList = 'styleHeadButtons';
  firstLineSection.appendChild(createInput);
}

function createBtnSaveAllAssigments() {
  const saveAllAssigment = document.createElement('button');
  saveAllAssigment.id = 'salvar-tarefas';
  saveAllAssigment.innerText = 'Save Tasks';
  saveAllAssigment.classList = 'styleHeadButtons';
  firstLineSection.appendChild(saveAllAssigment);
}

