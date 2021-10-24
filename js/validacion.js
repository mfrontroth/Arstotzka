const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const terminos = document.getElementById('checkValidation');

const campos = {
    nombre: false,
    apellido: false,
    genero: false,
    dni: false,
    email: false,
    telefono: false,
    calle: false,
    altura: false,
    piso: false,
    depto: false,
    zipcode: false,
    ciudad: false,
    pais: false,
    declaracion: false
}




let flag = true;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    for (const [key, valor] of Object.entries(campos)) {
        flag = flag && valor;
        console.log(flag);
    }

    if (flag) {
        console.log("verdadero");
    } else {
        console.log("falso");
    }



    //  if( Object.values(campos)==="false"){
    //      console.log("funciono");
    // };
    //     formulario.reset();

    //     document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    //     setTimeout(() => {
    //         document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    //     }, 5000);

    //     document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
    //         icono.classList.remove('formulario__grupo-correcto');
    //     });
    // } else {
    //     document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    // }
});



const validarCampo = (e) => {
    if (e.target.value !== "" || campos[e.target.name] === false) {
        document.getElementById("inputName").classList.add('is-valid');
        document.getElementById("inputName").classList.remove('is-invalid');
        campos[e.target.name] = true;

    } else {
        document.getElementById("inputName").classList.remove('is-valid');
        document.getElementById("inputName").classList.add('is-invalid');
        campos[e.target.name] = false;
    }
}

inputs.forEach((input) => {
    // input.classList.add('is-invalid'); //inicializa todos en invalido
    input.addEventListener('keyup', validarCampo);
});
