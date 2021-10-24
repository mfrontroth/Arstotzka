const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//Expresiones regulares que se usan para validar cada campo
const expresiones = {
    palabras: /^[a-zA-ZÀ-ÿ\s]*$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]*$/,
    numeros: /^([0-9])*$/,
    alfanumerico: /^[A-Za-z0-9]*$/

}

const campos = {
    nombre: false,
    apellido: false,
    dni: false,
    mail: false,
    telefono: false,
    calle: false,
    altura: false,
    piso: false,
    depto: false,
    zipcode: false,
    ciudad: false

}

const validarFormulario = (e) => {
    switch (e.target.name) {



        


        case "nombre":
        case "apellido":
        case "calle":
        case "ciudad":


            validarCampo(expresiones.palabras, e.target, e.target.name);
            break;

        case "mail":
            validarCampo(expresiones.mail, e.target, e.target.name);
            break;

        case "dni":
        case "telefono":
        case "altura":
        case "piso":
            validarCampo(expresiones.numeros, e.target, e.target.name);
            break;


        case "depto":
        case "zipcode":
            validarCampo(expresiones.alfanumerico, e.target, e.target.name);
            break;


    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value) && input.value !== "") {
        document.getElementById(`input_${campo}`).classList.add('is-valid');
        document.getElementById(`input_${campo}`).classList.remove('is-invalid');
        campos[campo] = true;
    } else {
        document.getElementById(`input_${campo}`).classList.add('is-invalid');
        document.getElementById(`input_${campo}`).classList.remove('is-valid');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);

});



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // const terminos = document.getElementById('input_terminos');



    var declaracion = document.getElementById('input_declaracion').value;
    const terminos = document.getElementById('input_terminos');
    
    if(declaracion ==="" || !terminos.checked){
        alert("Debe escribir la declaración y aceptar los términos y condiciones");
        } else {

            var flag = true;
            for (const [key, valor] of Object.entries(campos)) {
                console.log(flag);
                flag = flag && valor;
                console.log(flag);
            }
    
            if(flag){
                alert("Datos enviados correctamente");
                   // submit(); // No hay mail de destino, se cambió para que cuando este ok lo informe
                } else {
                    alert("Hay campos sin completar correctamente, favor de verificar");
                }
    
        }

    });

