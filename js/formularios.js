
    let candidatos =[]
    class Candidatos{
        constructor (nombre, apellido, mail, descripcion, ciudad, dispositivo, telefono, curriculumn){
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.descripcion = descripcion;
            this.ciudad = ciudad;
            this.dispositivo = dispositivo;
            this.telefono = telefono;
            this.curriculumn = curriculumn
        }
        presentacion (){
            console.log (`Hola soy ${this.nombre} ${this.apellido} mi mail es ${this.mail}. Mi contacto es ${this.dispositivo} ${this.telefono} y vivo en ${this.ciudad} .
            ${this.descripcion}`)
        }
    }





let nombre = document.getElementById ("inputNombre").value;
let apellido = document.getElementById ("inputApellido").value;
let mail = document.getElementById ("inputMail").value;

let form = document.getElementById ("form-trabaja-con-nosotros");

form.addEventListener ("submit", formulario)

function formulario (e) {
    e.preventDefault();

    let nombre = document.getElementById ("inputNombre").value;
    let apellido = document.getElementById ("inputApellido").value;
    let mail = document.getElementById ("inputMail").value;
    let info = document.getElementById ("sobre-ti").value;
    let ciudad = document.getElementById ("inputCiudad").value;
    let dispositivo = document.getElementById ("inputTel").value;
    let telefono = document.getElementById ("inputTelefono").value;

    if( nombre && apellido && mail && info && ciudad && dispositivo && telefono){
        const candidato = new Candidatos (nombre, apellido, mail,info, ciudad,  dispositivo, telefono)
        candidatos.push(candidato)
        agregarAllocalStorage1 ()
    } 

}


function agregarAllocalStorage1 (){
    localStorage.setItem ("candidatos", JSON.stringify(candidatos)) 
}


    /*
do {
    let form = document.getElementById ("form-trabaja-con-nosotros");

    form.addEventListener ("submit", function (event){
        event.preventDefault();

        let nombre = document.getElementById ("inputNombre").value;
        let apellido = document.getElementById ("inputApellido").value;
        let mail = document.getElementById ("inputMail").value;
        let info = document.getElementById ("sobre-ti").value;
        let ciudad = document.getElementById ("inputCiudad").value;
        let dispositivo = document.getElementById ("inputTel").value;
        let telefono = document.getElementById ("inputTelefono").value;


        
        const candidato1 = new Candidatos (nombre, apellido, mail,info, ciudad,  dispositivo, telefono);

        console.log (candidato1)
        candidato1.presentacion()

        alert ("Mensaje enviado correctamente");
    })} while ( nombre != "" && apellido != "" && mail != "");
}

*/
 

