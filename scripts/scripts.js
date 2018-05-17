function createBoxes () {
  console.log(container);
  let q = boxPerLine * boxPerColumn;
  let blocks = [];
  for (let i = 0; i < q; i++) {
    blocks.push(document.createElement('div').classList.add('block'));
  }

  blocks.forEach(function(item) {
    container.appendChild(item);
  });

}

const boxPerLine = 16;
const boxPerColumn = 16;
const container = document.querySelector('#container');
