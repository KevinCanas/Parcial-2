let Usuario = {
    nombre: "",
    apellido: ""
};

function validarFormulario() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido"); // corregido
    let valido = true;
    let mensaje = "";

    // Expresión regular para validar que no haya números ni caracteres raros
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    // Limpiar mensaje previo
    document.getElementById("mensaje").innerHTML = "";

    // Validar nombre
    if (nombre.value.trim() === "") {
        mensaje += "El nombre es obligatorio <br>";
        valido = false;
    } else if (!regexNombre.test(nombre.value.trim())) {
        mensaje += "El nombre no puede contener números ni caracteres especiales <br>";
        valido = false;
    } else {
        Usuario.nombre = nombre.value.trim();
    }

    // Validar apellido
    if (apellido.value.trim() === "") {
        mensaje += "El apellido es obligatorio <br>";
        valido = false;
    } else if (!regexNombre.test(apellido.value.trim())) {
        mensaje += "El apellido no puede contener números ni caracteres especiales <br>";
        valido = false;
    } else {
        Usuario.apellido = apellido.value.trim(); // corregido
    }

    // Mostrar mensaje en HTML
    document.getElementById("mensaje").innerHTML = mensaje;

    console.log(Usuario); // para ver el objeto en consola
    return valido;
}
