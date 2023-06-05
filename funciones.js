
/**
 * Dibuja a los grupos de personas de acuerdo a los valores ingresados.
 * @method dibujarPersonas/
 * @param {string} No tiene parametros de entrada.
 * @return No retorna ningun valor.
 */
function calcularTotal() {
    var cantidadMayores = parseInt(document.getElementById("mayores").value);
    var cantidadMenores = parseInt(document.getElementById("menores").value);
    var cantidadGrupo = parseInt(document.getElementById("grupo").value);

    if (isNaN(cantidadMayores) || cantidadMayores < 0) {
        alert('Por favor, ingresa una cantidad válida de personas mayores.');
        document.getElementById("mayores").value = ""; // Blanquear el campo
        return;
    }

    if (isNaN(cantidadMenores) || cantidadMenores < 0) {
        alert('Por favor, ingresa una cantidad válida de personas menores.');
        document.getElementById("menores").value = ""; // Blanquear el campo
        return;
    }

    if (isNaN(cantidadGrupo) || cantidadGrupo < 0) {
        alert('Por favor, ingresa una cantidad válida de personas en el grupo.');
        document.getElementById("grupo").value = ""; // Blanquear el campo
        return;
    }

    var totalMayores = cantidadMayores * 10000;
    var totalMenores = cantidadMenores * 5000;
    var totalGrupo = cantidadGrupo * 15000;

    var total = totalMayores + totalMenores + totalGrupo;

    var resultado = document.getElementById("resultado");
    resultado.textContent = "COSTO APROXIMADO DEL VIAJE: $" + total;
}

/**
 * Calcula el costo aproximado de un viaje en base a la cantidad de personas mayores, menores y de un grupo.
 * @method calcularTotal
 * @param {string} cantidadMayores - La cantidad de personas mayores.
 * @param {string} cantidadMenores - La cantidad de personas menores.
 * @param {string} cantidadGrupo - La cantidad de personas en el grupo.
 * @return {string} Retorna el costo aproximado del viaje en formato de texto.
 */

document.getElementById("registroForm").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var email = document.getElementById("email").value.trim();
    var contrasena = document.getElementById("password").value;

    // Validar el nombre y el apellido (solo letras y espacios)
    var nombreRegExp = /^[a-zA-Z\s]+$/;
    if (!nombreRegExp.test(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        event.preventDefault();
        return;
    }
    if (!nombreRegExp.test(apellido)) {
        alert("Por favor, ingresa un apellido válido.");
        event.preventDefault();
        return;
    }

    // Validar la dirección (no está vacía)
    if (direccion === "") {
        alert("Por favor, ingresa una dirección válida.");
        event.preventDefault();
        return;
    }

    // Validar el formato del correo electrónico
    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        event.preventDefault();
        return;
    }

    // Validación exitosa
    alert("Registro exitoso. ¡Bienvenido/a!");
});

/**
 * Dibuja a los grupos de personas de acuerdo a los valores ingresados.
 * @method dibujarPersonas
 * @param {string} No tiene parámetros de entrada
 * @return No retorna ningún valor
 */

function dibujarPersonas() {
    var cantidadMayores = parseInt(document.getElementById("mayores").value);
    var cantidadMenores = parseInt(document.getElementById("menores").value);
    var cantidadGrupo = parseInt(document.getElementById("grupo").value);

    if (isNaN(cantidadMayores) || isNaN(cantidadMenores) || isNaN(cantidadGrupo) || cantidadMayores < 0 || cantidadMenores < 0 || cantidadGrupo < 0) {
        alert('Por favor, ingresa valores válidos en todos los campos.');
        return;
    }

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var posX = 50; // Posición inicial en X
    var posY = 50; // Posición inicial en Y
    var espacioEntrePersonas = 100; // Espacio entre cada persona

    // Dibujar personas mayores
    for (var i = 0; i < cantidadMayores; i++) {
        ctx.beginPath();
        ctx.arc(posX, posY, 25, 0, 2 * Math.PI); // Cabeza
        ctx.moveTo(posX, posY + 25);
        ctx.lineTo(posX, posY + 80); // Cuerpo
        ctx.moveTo(posX, posY + 40);
        ctx.lineTo(posX - 30, posY + 90); // Pierna izquierda
        ctx.moveTo(posX, posY + 40);
        ctx.lineTo(posX + 30, posY + 90); // Pierna derecha
        ctx.moveTo(posX - 10, posY + 25);
        ctx.lineTo(posX - 30, posY + 65); // Brazo izquierdo
        ctx.moveTo(posX + 10, posY + 25);
        ctx.lineTo(posX + 30, posY + 65); // Brazo derecho
        ctx.stroke();
        posX += espacioEntrePersonas; // Mover posición X para la siguiente persona
    }

    // Mover a la siguiente fila
    posX = 50;
    posY += espacioEntrePersonas;

    // Dibujar personas menores
    for (var j = 0; j < cantidadMenores; j++) {
        ctx.beginPath();
        ctx.arc(posX, posY, 20, 0, 2 * Math.PI); // Cabeza
        ctx.moveTo(posX, posY + 20);
        ctx.lineTo(posX, posY + 60); // Cuerpo
        ctx.moveTo(posX, posY + 30);
        ctx.lineTo(posX - 20, posY + 70); // Pierna izquierda
        ctx.moveTo(posX, posY + 30);
        ctx.lineTo(posX + 20, posY + 70); // Pierna derecha
        ctx.moveTo(posX, posY + 40);
        ctx.lineTo(posX - 20, posY + 20); // Brazo izquierdo
        ctx.moveTo(posX, posY + 40);
        ctx.lineTo(posX + 20, posY + 20); // Brazo derecho
        ctx.stroke();
        posX += espacioEntrePersonas; // Mover posición X para la siguiente persona
    }

    // Mover a la siguiente fila
    posX = 50;
    posY += espacioEntrePersonas;

    // Dibujar personas del grupo
    for (var k = 0; k < cantidadGrupo; k++) {
        ctx.beginPath();
        ctx.arc(posX, posY, 30, 0, 2 * Math.PI); // Cabeza
        ctx.moveTo(posX, posY + 30);
        ctx.lineTo(posX, posY + 100); // Cuerpo
        ctx.moveTo(posX - 10, posY + 60);
        ctx.lineTo(posX - 40, posY + 120); // Pierna izquierda
        ctx.moveTo(posX + 10, posY + 60);
        ctx.lineTo(posX + 40, posY + 120); // Pierna derecha
        ctx.moveTo(posX - 20, posY + 30);
        ctx.lineTo(posX - 40, posY + 90); // Brazo izquierdo
        ctx.moveTo(posX + 20, posY + 30);
        ctx.lineTo(posX + 40, posY + 90); // Brazo derecho
        ctx.stroke();
        posX += espacioEntrePersonas; // Mover posición X para la siguiente persona
    }
}