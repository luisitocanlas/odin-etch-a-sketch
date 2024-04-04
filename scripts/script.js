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

	cell.addEventListener('mouseenter', () => {
		cell.style.backgroundColor = '#669BBC';
	});

	cell.addEventListener('mouseleave', () => {
		cell.style.transition = 'background-color 0.5s ease';
		cell.style.backgroundColor = '#003049';
	});

	container.appendChild(cell);
}
