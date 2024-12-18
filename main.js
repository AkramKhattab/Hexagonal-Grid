import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js';

// Initialize WebGL canvas with the hexagonal grid background
const canvasElement = document.getElementById('webgl-canvas');
const bg = Grid1Background(canvasElement);

/**
 * Randomizes colors of the hexagonal grid and lights.
 */
function randomizeColors() {
    const randomColor = () => Math.random() * 0xffffff;
    bg.grid.setColors([randomColor(), randomColor(), randomColor()]);
    bg.grid.light1.color.set(randomColor());
    bg.grid.light1.intensity = 500 + Math.random() * 1000;
    bg.grid.light2.color.set(randomColor());
    bg.grid.light2.intensity = 250 + Math.random() * 250;
}

// Add event listener to the button
const colorsButton = document.getElementById('colors-btn');
colorsButton.addEventListener('click', randomizeColors);

// Log successful initialization for debugging
console.log('Hexagonal Grid initialized successfully!');
