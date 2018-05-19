let boxPerSide = 16;
let selectedColor = "black";

window.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('#container');
	createBoxes();
});

function paintBox(e) {
	e.target.style.backgroundColor = selectedColor;
}

function createBoxes() {
  container.innerHTML = '';
  let blocks = [];
  let q = boxPerSide*boxPerSide;
  let size = Math.floor(800/boxPerSide);
  console.log(size);
  for (let i = 0; i < q; i++) {
    blocks.push(document.createElement('div'));
  }
  blocks.forEach(function(item) {
	item.classList.add('block');
	item.style.flex = "1 1 " + size + "px";
	item.addEventListener('mouseover', paintBox);
    container.appendChild(item);
  });
}

function reset() {
	let blocks = document.getElementById("container").getElementsByTagName('div');
	let boxes = Array.from(blocks);
	console.log(boxes);
	boxes.forEach(function(box) {
		box.style.backgroundColor = "";
	});
  document.querySelector('.alert').style.display = "none";
}

function selectColor(color) {
	selectedColor = color;
}

function plotCanvas(form) {
  if (form[0].value < 0) {
    document.querySelector('.alert').innerHTML = "Only positive numbers!"
    document.querySelector('.alert').style.display = "block";
    return;
  }
  boxPerSide = (form[0].value > 100 ? 100 : form[0].value);
  if (form[0].value > 100) {
    document.querySelector('.alert').innerHTML = "Maximum is 100!"
    document.querySelector('.alert').style.display = "block";
    document.querySelector('.number').value = "100";
  } else {
    document.querySelector('.alert').style.display = "none";
  }
  createBoxes();
}
