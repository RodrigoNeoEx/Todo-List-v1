const append = document.getElementById('infoSection');
const firstLineSection = document.createElement('section');
const lastLineSection = document.createElement('section');

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

