const submitFunction = (event) => {
    if (!validarFormulario()){
        event.preventDefault();
    } else {
        event.preventDefault();
        alert(
            'Formulario enviado correctamente' + '\n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudios: ' + document.getElementById('nivelEstudio').value + '\n' +
            'Términos y condiciones: Aceptados'
        );
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction);

function validarFormulario() {
    // Validación de campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es obligatorio');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    // Validación de email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, 'El email no es válido');
    }

    // Validación de edad
    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if (edad.value < 18 || edad.value > 120) {
        mostrarError(errorEdad, 'La edad debe estar entre 18 y 120 años');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    // Validar Actividad
    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if (actividad.value == ''){
        mostrarError(errorActividad, 'Debe seleccionar una actividad');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    // Validar Nivel de estudios
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Debe seleccionar un nivel de estudios');
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    // Validar Términos y condiciones
    const terminos = document.getElementById('terminos');
    let errorTerminos = document.getElementById('errorTerminos');

    if (!terminos.checked){
        mostrarError(errorTerminos, 'Debe aceptar los términos y condiciones');
        validacionCorrecta = false;
    } else {
        ocultarError(errorTerminos);
    }

    return validacionCorrecta;
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
}