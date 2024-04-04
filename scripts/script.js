const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

const containerWidth = 960;
const containerHeight = 960;

const baseBgColor = '#003049';
const alternateBgColor = '#669BBC';

let cellSize = 16;
let GRID_SIZE = cellSize ** 2;

btn.addEventListener('click', () => {
	cellSize = prompt('Please enter a number (1-100):');

	if (cellSize === null) {
		return;
	}

	cellSize = parseInt(cellSize);

	if (isNaN(cellSize) || cellSize <= 0 || cellSize > 100) {
		alert('Please enter a number between 1 - 100.');
	} else {
		removeGrid();
		GRID_SIZE = cellSize ** 2;
		generateGrid();
	}
});

generateGrid();

function generateGrid() {
	for (let i = 0; i < GRID_SIZE; i++) {
		let cell = document.createElement('div');
		cell.classList.add('cell');
		cell.setAttribute(
			'style',
			`width: ${containerWidth / cellSize}px; 
    height: ${containerHeight / cellSize}px;`
		);

		cell.addEventListener('mouseenter', () => {
			cell.style.backgroundColor = alternateBgColor;
		});

		cell.addEventListener('mouseleave', () => {
			cell.style.transition = 'background-color 0.7s ease';
			cell.style.backgroundColor = baseBgColor;
		});

		container.appendChild(cell);
	}
}

function removeGrid() {
	container.innerHTML = '';
}
