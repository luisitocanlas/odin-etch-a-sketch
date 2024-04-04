const container = document.querySelector('#container');

const containerWidth = 960;
const containerHeight = 960;

let cellSize = 16;
let GRID_SIZE = cellSize ** 2;

for (let i = 0; i < GRID_SIZE; i++) {
	let cell = document.createElement('div');
	cell.classList.add('cell');
	cell.setAttribute(
		'style',
		`width: ${containerWidth / cellSize}px; 
    height: ${containerHeight / cellSize}px;`
	);

	container.appendChild(cell);
}
