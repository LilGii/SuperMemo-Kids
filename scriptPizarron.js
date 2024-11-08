// Obtener el canvas y su contexto
const canvas = document.getElementById('whiteboardCanvas');
const ctx = canvas.getContext('2d');

// Establecer el tamaño del canvas
canvas.width = 750;
canvas.height = 500;

let isDrawing = false;

// Manejar eventos del mouse
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);

// Inicializar el lápiz
ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#000';

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
}

function draw(e) {
    if (isDrawing) {
        ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        ctx.stroke();
    }
}

function endDrawing() {
    isDrawing = false;
}
const colorPalette = document.querySelectorAll('.color');

// Establecer el color del lápiz al hacer clic en un color de la paleta
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        const selectedColor = color.style.backgroundColor;
        ctx.strokeStyle = selectedColor;
    });
});

