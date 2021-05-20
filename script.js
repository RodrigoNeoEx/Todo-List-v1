const append = document.getElementById('infoSection');
const firstLineSection = document.createElement('section');
const lastLineSection = document.createElement('section');
const asideCollumSection = document.createElement('section');

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

function createLastSection() {
  lastLineSection.className = 'lastLineBox';
  append.appendChild(lastLineSection);
}

function createBtnRemove() {
  const createRemoveButton = document.createElement('button');
  createRemoveButton.id = 'remover-selecionado';
  createRemoveButton.innerText = 'Remove Choosed';
  createRemoveButton.classList = 'styleFooterButtons';
  lastLineSection.appendChild(createRemoveButton);
}

function createBtnFinished() {
  const removeFinishedButton = document.createElement('button');
  removeFinishedButton.id = 'remover-finalizados';
  removeFinishedButton.innerText = 'Remove Finished';
  removeFinishedButton.classList = 'styleFooterButtons';
  lastLineSection.appendChild(removeFinishedButton);
}

function createBtnClear() {
  const createclearAllButton = document.createElement('button');
  createclearAllButton.id = 'apaga-tudo';
  createclearAllButton.innerText = 'Remove All';
  createclearAllButton.classList = 'styleRmvAllButton';
  lastLineSection.appendChild(createclearAllButton);
}

function createAsideSection() {
  asideCollumSection.className = 'asideCollumBox'
  append.appendChild(asideCollumSection);
}

function createBtnUp() {
  const buttonUP = document.createElement('button');
  buttonUP.id = 'mover-cima';
  buttonUP.classList = 'mover-cima';
  buttonUP.innerText = '🔺' ;
  asideCollumSection.appendChild(buttonUP);
}

function createBtnDown() {
  const buttonDown = document.createElement('button');
  buttonDown.id = 'mover-baixo';
  buttonDown.classList = 'mover-baixo';
  buttonDown.innerText = '🔻' ;
  asideCollumSection.appendChild(buttonDown);
}

function createOl() {
  const createOL = document.createElement('ol');
  createOL.id = 'lista-tarefas';
  append.appendChild(createOL);
}

function callStructure() {
  createInfoText();
  createFirstSection();
  createBtnTasks();
  createInputAssigment();
  createBtnSaveAllAssigments();
  createLastSection();
  createBtnRemove();
  createBtnFinished();
  createBtnClear();
  createAsideSection();
  createBtnUp();
  createBtnDown();
  createOl();
}

function addAssignment() {
  document.getElementById('criar-tarefa');
  const getInput = document.getElementById('texto-tarefa').value;
  if (getInput !== '') {
    const addLI = document.createElement('li');
    const getID = document.getElementById('lista-tarefas');
    getID.appendChild(addLI);
    addLI.innerHTML = getInput;
    addLI.classList = 'assigmentList';
  }
}

function listeners() {
  document.getElementById('criar-tarefa').addEventListener('click', addAssignment);
}

window.onload = function () {
  callStructure();
  listeners();
};
