

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

 let errorNombre = document.querySelector('#errorNombre');
 let errorUsuario = document.querySelector('#errorUsuario');
 let errorEmpresa = document.querySelector('#errorEmpresa');
 let errorCUIT = document.querySelector('#errorCUIT');
 let errorMail = document.querySelector('#errorMail');
 let errorContraseña = document.querySelector('#errorContraseña');
 let errorVerifContraseña = document.querySelector('#errorVerificacion');

errorNombre.style.display = 'none';
errorUsuario.style.display = 'none';
errorEmpresa.style.display = 'none';
errorCUIT.style.display = 'none';
errorMail.style.display = 'none';
errorContraseña.style.display = 'none';
errorVerifContraseña.style.display = 'none';


crearUsuario.addEventListener('click', agregarUsuario);

 function agregarUsuario (event){
    event.preventDefault();


    let nombre = document.querySelector('#nombre').value;
    let nombreUsuario = document.querySelector('#usuario').value;
    let empresa = document.querySelector('#empresa').value;
    let cuit = document.querySelector('#cuit').value;
    let email = document.querySelector('#email').value;
    let password1 = document.querySelector('#password1').value;
    let verifContraseña = document.querySelector('#verificacionContraseña').value;
    

   

    if (nombre && nombreUsuario && empresa && cuit && email && password1 && verifContraseña){
        // verifContrasenia (password1,  verifContraseña)
        if (password1==verifContraseña){
            swal.fire({
                title: 'Datos cargados correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            errorVerifContraseña.style.display = 'none';
            let usuario =  [{nombre , nombreUsuario, empresa, cuit,email,password1}];

            let salida = usuario.map((elemento, index)=>{
                usuarios.push(elemento)
            });
        
            agregarAllocalStorage2 ()
            nombredeUsuario.innerHTML = nombreUsuario
            
            console.log(usuarios)
            console.log(usuario)
        } else {
            errorVerifContraseña.style.display = 'block';
            errorVerifContraseña.innerHTML = 'Las contraseñas deben ser iguales ' 
        }
    } else {
       
        swal.fire({
            title: 'Complete todos los datos',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
        })
    }


    // let usuario =  [{nombre , nombreUsuario, empresa, cuit,email,password1}];

    // let salida = usuario.map((elemento, index)=>{
    //     usuarios.push(elemento)
    // });

    // agregarAllocalStorage2 ()
    // nombredeUsuario.innerHTML = nombreUsuario
    
    // console.log(usuarios)
    // console.log(usuario)
}

 function agregarAllocalStorage2 (){
    localStorage.setItem ("usuarios", JSON.stringify(usuarios)) 
}

/* Validacion de datos */

// Funcion que valida solo texto y de longitud mayori igual a 1 

 const checkTextoMayorAUno = ( val )=>{

    if (/[a-zA-Z]+$/.test(val) && val.length >=1){
        return true
    } else {
        return false  
    }
}

// Funcion validacion texto y numeros de 4 caracteres
 const checkTextoyNumero8Caract= ( val )=>{

    if (/[A-Za-z0-9]+$/.test(val) && val.length >=3 ){
        return true
    } else {
        return false  
    }
}

// Función validacion de numeros sin guion
 const checkNumGuion= ( val )=>{

    if (/([0-9])+$/.test(val) && val.length >=10 ){
        return true
    } else {
        return false  
    }
}

// Validaación Mail



 const checkMail= ( val )=>{

    if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(val)){
        return true
    } else {
        return false  
    }


}
// Validación contraseña

 const checkContra= ( val )=>{


    
   if (/[A-Za-z0-9]+/ && val.length >=6){
        return true
    } else {
        return false  
    }
}

// Validación de inputs nombre
nombre.addEventListener ('input', (e) =>{
    let validaNombre = checkTextoMayorAUno (e.target.value);
    if(validaNombre){
        errorNombre.style.display = 'none';
        errorNombre.innerHTML = ''
    } else {
        errorNombre.style.display = 'block';
        errorNombre.innerHTML = 'Debe ingresar solo texto'
    }
})

// Validacion usuario

usuario.addEventListener ('input', (e) =>{
    let validaUsiario = checkTextoyNumero8Caract (e.target.value);
    if(validaUsiario){
        errorUsuario.style.display = 'none';
        errorUsuario.innerHTML = ''
    } else {
        errorUsuario.style.display = 'block';
        errorUsuario.innerHTML = 'Debe ingresar 3 caracteres sin caracteres especiales'
    }
});

//Validación Empresa

empresa.addEventListener ('input', (e) =>{
    let validaEmpresa = checkTextoyNumero8Caract (e.target.value);
    if(validaEmpresa){
        errorEmpresa.style.display = 'none';
        errorEmpresa.innerHTML = ''
    } else {
        errorEmpresa.style.display = 'block';
        errorEmpresa.innerHTML = 'Debe ingresar 3 caracteres sin caracteres especiales'
    }
})

// Validación CUIT

cuit.addEventListener ('input', (e) =>{
    let validaCUIT = checkNumGuion (e.target.value);
    if(validaCUIT){
        errorCUIT.style.display = 'none';
        errorCUIT.innerHTML = ''
    } else {
        errorCUIT.style.display = 'block';
        errorCUIT.innerHTML = 'Debe ingresar CUIT/CUIL sin guiones'
    }
})

// Validación Mail

email.addEventListener ('input', (e) =>{
    let validaMail = checkMail(e.target.value);
    if(validaMail ){
        errorMail.style.display = 'none';
        errorMail.innerHTML = ''
    } else {
        errorMail.style.display = 'block';
        errorMail.innerHTML = 'Debe ingresar un mail válido'
    }
})

// Validación de contraseña

password1.addEventListener ('input', (e) =>{
    let validaContraseña = checkContra(e.target.value);
    if(validaContraseña ){
        errorContraseña.style.display = 'none';
        errorContraseña.innerHTML = ''
    } else {
        errorContraseña.style.display = 'block';
        errorContraseña.innerHTML = 'La contraseña debe contar con 6 caracteres, un número y una mayuscula '
    }

    
})
// Verificacion de contraseñas
 function verifContrasenia ( a ,b){

    /*
    if (a==b){
        alert ('Valores ingresados')
    } else {
        alert ('Las contraseñas deben ser iguales')
    }
    */

    a==b ?  alert ('Valores ingresados') :  alert ('Las contraseñas deben ser iguales')
}
