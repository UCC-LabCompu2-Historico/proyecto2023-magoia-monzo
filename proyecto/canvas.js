//obtiene canvas desde DOM
const canvas = document.getElementById("turismoCanvas");
const ctx = canvas.getContext("2d");

// Definir las propiedades de la animación
let y = -canvas.height; // Posición inicial en el eje y (fuera del canvas)
const speed = 2; // Velocidad de movimiento
const image = new Image();
image.src = "imagenes/turismo2.jpg"; // Ruta de la imagen

// Tamaño deseado para la imagen
let imageWidth = window.innerWidth * 0.9; // Ajusta el valor según el ancho deseado
let imageHeight = 100; // Ajusta el valor según el tamaño deseado

// Cargar la imagen
image.onload = function() {
    // Iniciar la animación
    animate();
};

/**
 * Función para animar el objeto de turismo en el canvas.
 * @method animate
 * @returns void
 */
function animate() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el objeto (imagen de turismo)
    var x = (canvas.width - imageWidth) / 2; // Calcular la posición x para centrar la imagen
    ctx.drawImage(image, x, y, imageWidth, imageHeight);

    // Actualizar la posición del objeto
    y += speed;

    // Verificar si el objeto ha alcanzado la posición deseada
    if (y >= canvas.height / 2 - imageHeight / 2) {
        y = canvas.height / 2 - imageHeight / 2; // Mantener el objeto en su lugar
    }

    // Solicitar el siguiente fotograma de animación
    requestAnimationFrame(animate);
}

/**
 * Ajusta el tamaño del canvas al ancho de la pantalla y redimensiona la imagen.
 * @method resizeCanvas
 */
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = imageHeight; // Establecer la altura deseada para el canvas
    imageWidth = window.innerWidth * 0.9; // Actualizar el ancho de la imagen

    animate(); // Volver a iniciar la animación después de redimensionar el canvas
}

// Redimensionar el canvas cuando cambie el tamaño de la ventana
window.addEventListener('resize', resizeCanvas);

// Inicializar el canvas con el tamaño actual de la ventana
resizeCanvas();