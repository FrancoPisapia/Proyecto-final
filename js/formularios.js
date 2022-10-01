


    

// let form = document.getElementById ("form-trabaja-con-nosotros");

// form.addEventListener ("submit", function (event){
//     event.preventDefault()

//     let nombre = document.getElementById ("inputNombre").value;
//     let apellido = document.getElementById ("inputApellido").value;
//     let mail = document.getElementById ("inputMail").value;
//     let info = document.getElementById ("sobre-ti").value;
//     let ciudad = document.getElementById ("inputCiudad").value;
//     let dispositivo = document.getElementById ("inputTel").value;
//     let telefono = document.getElementById ("inputTelefono").value;

// })


class Candidato {
    constructor (nombre, apellido, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    }
    presentacion(){
        console.log (`Hola me llamo ${this.nombre + this.apellido} y mi maíl es ${this.mail}  `)
    }
}
function click (){
let candidato1 = new Candidato ("Martin", "Hernandez","m.hernandez@gmail.com");
console.log (candidato1)
candidato1.presentacion()
}
click ()

let nombre = document.getElementById ("inputNombre").value;
let apellido = document.getElementById ("inputApellido").value;
let mail = document.getElementById ("inputMail").value;

 function formulario (){
do {
    let form = document.getElementById ("form-trabaja-con-nosotros");

    form.addEventListener ("submit", function (event){
        event.preventDefault()
    
        let nombre = document.getElementById ("inputNombre").value;
        let apellido = document.getElementById ("inputApellido").value;
        let mail = document.getElementById ("inputMail").value;
        let info = document.getElementById ("sobre-ti").value;
        let ciudad = document.getElementById ("inputCiudad").value;
        let dispositivo = document.getElementById ("inputTel").value;
        let telefono = document.getElementById ("inputTelefono").value;
    
        console.log (nombre, apellido, mail,info, ciudad,  dispositivo, telefono);
        alert ("Mensaje enviado correctamente")
    })} while ( nombre != "" && apellido != "" && mail != "");
}
 

formulario ()