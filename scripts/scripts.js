const boxPerLine = 16;
const boxPerColumn = 16;

window.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('#container');
});

function createBoxes() {
  let blocks = [];
  let q = boxPerColumn * boxPerLine;
  for (let i = 0; i < q; i++) {
    blocks.push(document.createElement('div'));
  }
  console.log(blocks);
  blocks.forEach(function(item) {
	item.classList.add('block');
    container.appendChild(item);
  });
}

