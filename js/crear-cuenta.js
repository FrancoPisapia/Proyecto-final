

let usuarios = [];


// class Usuarios {
//     constructor (nombre,nombreUsuario, empresa,cuit, contrasenia,cotizaciones){
//         this.nombre = nombre;
//         this.nombreUsuario = nombreUsuario;
//         this.empresa = empresa;
//         this.cuit = cuit;
//         this.contrasenia = contrasenia;
//         this.cotizaciones = cotizaciones;
//     }
// }

let crearUsuario = document.querySelector('#crearUsuario');
let nombredeUsuario = document.querySelector('#nombreUsuario');

crearUsuario.addEventListener('click', agregarUsuario);

function agregarUsuario (event){
    event.preventDefault();


    let nombre = document.querySelector('#nombre').value;
    let nombreUsuario = document.querySelector('#usuario').value;
    let empresa = document.querySelector('#empresa').value;
    let cuit = document.querySelector('#cuit').value;
    let email = document.querySelector('#email').value;
    let password1 = document.querySelector('#password1').value;


    let usuario =  [{nombre , nombreUsuario, empresa, cuit,email,password1}];

    let salida = usuario.map((elemento, index)=>{
        usuarios.push(elemento)
    })

    nombredeUsuario.innerHTML = nombreUsuario
    
    console.log(usuarios)
    console.log(usuario)
}


