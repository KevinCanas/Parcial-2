let Usuario = {
    nombre: "",
    apellido: "",
    password: "",
    telefono: ""
};

function validarFormulario() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telefono = document.getElementById("telefono");
    let valido = true;
    let mensaje = "";


    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;


    document.getElementById("mensaje").innerHTML = "";


    if (nombre.value.trim() === "") {
        mensaje += "El nombre es obligatorio <br>";
        valido = false;
    } else if (!regexNombre.test(nombre.value.trim())) {
        mensaje += "El nombre no puede contener números ni caracteres especiales <br>";
        valido = false;
    } else {
        Usuario.nombre = nombre.value.trim();
    }


    if (apellido.value.trim() === "") {
        mensaje += "El apellido es obligatorio <br>";
        valido = false;
    } else if (!regexNombre.test(apellido.value.trim())) {
        mensaje += "El apellido no puede contener números ni caracteres especiales <br>";
        valido = false;
    } else {
        Usuario.apellido = apellido.value.trim(); 
    }

    const regexTelefono = /^\d{4}-\d{4}$/;
    if (telefono.value.trim() === "") {
        mensaje += "Debe colocar un telefono";
    } else if (!regexTelefono.test(telefono.value.trim())) {

        mensaje += "Formato de telefono no válido para El Salvador";

    } else {

        Usuario.telefono = telefono.value.trim();
    }




    document.getElementById("mensaje").innerHTML = mensaje;

    console.log(Usuario);
    return valido;
}

function validaPassword() {
    let password = document.getElementById("password");
    let conPassword = document.getElementById("confirmaPassword");
    let mensaje2 = "";
    let valido = true;

    document.getElementById("mensajePassword").innerHTML = "";

    if (password.value.trim() === "") {
        mensaje2 += "La contraseña no puede ser menor a 6 caracteres </br>";
        valido = false;

    }
    if (password.value.trim() !== conPassword.value.trim()) {
        mensaje2 += "Las contraseñas no conciden</br>";
        valido = false;
    }

    document.getElementById("mensajePassword").innerHTML = mensaje2;
    return valido;

}


