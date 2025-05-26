alert("Bienvenido a la veterinaria de mascotas");
let nombre = prompt("Por favor, ingresa tu nombre:");
if (nombre) {
    alert("¡Hola " + nombre + "! ¿Cómo estás?");
}
 
let mascotas = [];
let salir = false
while (salir === false) {
    let opcion = prompt("Selecciona una opción:\n1. Agregar mascota\n2. Mostrar mascotas\n3. Eliminar mascota\n4. Salir");
    
    switch (opcion) {
        case "1":
            alert("Has seleccionado agregar una mascota.");
            agregarMascota();
        case "2":
            alert("Has seleccionado mostrar las mascotas registradas.");
            mostrarMascotas();
            break;
        case "3":
            alert("Has seleccionado eliminar una mascota.");
            eliminarMascota();
            break;
        case "4":
            alert("¡Gracias por visitar la veterinaria! Hasta luego.");
            salir = true;
            break;
        default:
            alert("Opción no válida, por favor intenta de nuevo.");
    }
}



function agregarMascota() {
    let nombreMascota = prompt("Ingresa el nombre de la mascota:");
    let especieMascota = prompt("Ingresa la especie de la mascota:");
    let edadMascota = parseInt(prompt("Ingresa la edad de la mascota:"));
    let pesoMascota = prompt("Ingresa el peso de la mascota:");
    let estadoMascota = prompt("Ingresa el estado de salud de la mascota:");

    let nuevaMascota = {
        nombre: nombreMascota,
        especie: especieMascota,
        edad: edadMascota,
        peso: pesoMascota,
        estado: estadoMascota
    };

    mascotas.push(nuevaMascota);
    alert("¡Mascota agregada exitosamente!");
}
function mostrarMascotas() {                                
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }
    
    let mensaje = "Lista de mascotas:\n";
    mascotas.forEach((mascota, index) => {
        mensaje += `${index + 1}. Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, Estado: ${mascota.estado}\n`;
    });
    
    alert(mensaje);
}
function eliminarMascota() {
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas para eliminar.");
        return;
    }
    
    let indice = parseInt(prompt("Ingresa el número de la mascota que deseas eliminar (1 a " + mascotas.length + "):")) - 1;
    
    if (indice >= 0 && indice < mascotas.length) {
        mascotas.splice(indice, 1);
        alert("¡Mascota eliminada exitosamente!");
    } else {
        alert("Número de mascota inválido.");}
    }
