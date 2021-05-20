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

