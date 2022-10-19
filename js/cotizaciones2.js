let mensajeA = document.querySelector ('.mensaje1');
let mensajeB = document.querySelector ('.mensaje2');
/* Vial*/
let botonVial = document.querySelector('#boton-vial');

botonVial.addEventListener('click', cotizacionVial);

function cotizacionVial (event){
    event.preventDefault()
     vialCheckbox ();


}

function vialCheckbox (){
    let presupuesto = parseFloat( document.querySelector('#presupuestoVial').value);
    verificacionNumero (presupuesto);

    let longitud = parseFloat ( document.querySelector('#longitud').value);
    verificacionNumero (longitud);

    let fondos = document.querySelector('#eleccion-de-licitacion-vial').value;

    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));

    let mensaje1 
    let mensaje2
    
    let terminado = aCotizar.forEach((element) => {

        if (element == "Anteproyecto obra basica"){
            mensaje1 = ` El presupuesto por obra básica ${fondos} en anteproyecto es ${longitud*0.015*presupuesto}`;
            mensajeA.innerHTML = mensaje1

        } else if( element== 'Anteproyecto señalizacion'){
            mensaje1 = `El presupuesto por señalizacion ${fondos} en anteproyecto es ${longitud*0.00015*presupuesto}`
            mensajeA.innerHTML = mensaje1

        } else if( element == 'Anteproyecto iluminacion') {
            console.log('cccc')
            mensaje1 = `El presupuesto por iluminación ${fondos} en anteproyecto es ${longitud*0.00035*presupuesto}`
            mensajeA.innerHTML = mensaje1

        } else if (element == 'ejecutivo obra basica'){
            mensaje2 = `El presupuesto por obra básica ${fondos} en proyecto ejecutivo es ${longitud*0.4*presupuesto}`
            mensajeB.innerHTML = mensaje2
        } else if (element == 'ejecutivo señalizacion'){
            mensaje2 = `El presupuesto por señalización ${fondos} en proyecto ejecutivo es ${longitud*0.02*presupuesto}`
            mensajeB.innerHTML = mensaje2
        } else if (element == 'ejecutivo iluminacion'){
            mensaje2 = `El presupuesto por iluminación ${fondos} en proyecto ejecutivo es ${longitud*0.05*presupuesto}`
            mensajeB.innerHTML = mensaje2
        } else if (element == 'ejecutivo inspeccion'){
            mensaje2 = `El presupuesto por iluminación ${fondos} en proyecto ejecutivo es ${longitud*0.01*presupuesto}`
            mensajeB.innerHTML = mensaje2
        }

 
       })


}

/* Hidraulica*/
let botonHidraulica = document.querySelector('#boton-hidraulica');

botonHidraulica.addEventListener('click', cotizacionHidraulica)

function cotizacionHidraulica(event){
    event.preventDefault()

    let presupuesto = parseFloat( document.querySelector('#presupuestoHidrico').value);
    verificacionNumero (presupuesto);

    let cañerias = parseFloat ( document.querySelector('#cañerias').value);

    verificacionNumero (cañerias)


    let superficie = parseFloat( document.querySelector('#superficiePlanta').value);
    verificacionNumero (superficie)
    let fondos = document.querySelector('#eleccion-de-licitacion-h').value;


    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));

    let mensaje1 
    let mensaje2

    let terminado = aCotizar.forEach((element) => {
        if (element == "Anteproyecto Electromecanica"){
            mensaje1 = ` El presupuesto por la obra electromecánica ${fondos} en anteproyecto es ${0.50*presupuesto*(superficie/cañerias)}`;
            mensajeA.innerHTML = mensaje1
        }else if( element== 'Anteproyecto obra civil'){
            mensaje1 = `El presupuesto por la obra civil ${fondos} en anteproyecto es ${0.60*presupuesto*(superficie/cañerias)}`
            mensajeA.innerHTML = mensaje1

        }else if( element== 'Anteproyecto unidades hidraulicas'){
            mensaje1 = `El presupuesto del movimiento de suelo y la estructura resistente es ${0.35 * presupuesto} por la obra electromecánica es ${presupuesto * 0.45}`
            mensajeA.innerHTML = mensaje1
        } else if (element== 'Proyecto ejecutivo electromecanico'){
            mensaje2 = `El presupuesto por el proyecto ejecutivo de la obra electromecánica de una licitación ${fondos}  es ${0.50*presupuesto*(superficie/cañerias)}`
            mensajeB.innerHTML = mensaje2
        } else if (element== 'Proyecto ejecutivo obra civil'){
            mensaje2 = `El presupuesto por el proyecto ejecutivo de la obra civil de una licitación ${fondos} es ${0.60*presupuesto*(superficie/cañerias)}`
            mensajeB.innerHTML = mensaje2
        }  else if (element== 'Proyecto ejecutivo unidades hidraulicas'){
            mensaje2 = `El presupuesto del movimiento de suelo y la estructura resistente es ${0.33 * presupuesto} y por la obra electromecánica es ${presupuesto * 0.47}`
            mensajeB.innerHTML = mensaje2
        } else if (element== 'Inspeccion de obra'){
            mensaje2 = `El presupuesto por la insepección de obra electromecánica es ${presupuesto * 0.015} y por la obra civil es ${presupuesto * 0.02}  en forma estimada`
            mensajeB.innerHTML = mensaje2
        }
    })
}

/* Civil*/

let botonCivil = document.querySelector('#botonCivil');

botonCivil.addEventListener('click', cotizacionCivil);

function cotizacionCivil (event){
    event.preventDefault()

    let presupuesto =parseFloat (document.querySelector('#presupuestoCivil').value) ;
    verificacionNumero ( presupuesto);
    console.log(presupuesto)
    let pisos = parseInt( document.querySelector('#cantPisos').value);
    verificacionNumero (pisos);

    console.log(typeof pisos);


    let subsuelo = parseInt( document.querySelector('#cantSubsuelos').value) ;
    verificacionNumerosConCero (subsuelo);

    let fondos = document.querySelector('#eleccion-de-licitacion-c').value;

    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));

    let mensaje1 
    let mensaje2

    
    let terminado = aCotizar.forEach((element) => {
        if (element == "Anteproyecto movimiento de suelos"){
            mensaje1 = `El presupuesto para el movimiento de suelos para un edificio de ${subsuelo} es ${presupuesto*0.07* (1+(subsuelo*2))} `
            mensajeA.innerHTML = mensaje1
        } else if ( element == "Estructura y mamposteria"){
            mensaje1 = `El presupuesto para la estructura y mamposteria de un edificio de ${subsuelo} y ${pisos} es ${presupuesto*0.16}`;
            mensajeA.innerHTML = mensaje1
        } else if ( element == "Anteproyecto Terminaciones" ){
            mensaje1 = `El presupuesto para las terminaciones del edificio de ${pisos} es ${presupuesto*0.22}`;
            mensajeA.innerHTML = mensaje1
        } else if (element == "Proyecto ejecutivo estructural "){
            mensaje2 = `El presupuesto para la estructura de un edificio de ${subsuelo} y ${pisos} es ${presupuesto*0.20}`;
            mensajeB.innerHTML = mensaje2
        } else if (element == "Direccion de obraa"){
            mensaje2 = `El presupuesto para la dirección de obra es ${presupuesto*0.01}`;
            mensajeB.innerHTML = mensaje2
        } else if (element == " Proyecto ejecutivo seguridad e higiene"){
            mensaje2 = `El presupuesto para la seguridad e higiene en obra es ${presupuesto*0.005}`;
            mensajeB.innerHTML = mensaje2
        }
    })
}



/* Verificacion */


function verificacionNumero (dato){
    /*
    if (isNaN (dato) ){
        return alert ('Ingrese un número')
    } else if ( dato <=0 ){
        return alert ('Ingrese un número mayor a cero')
    }
    */

    isNaN (dato) ?  alert ('Ingrese un número') : dato <=0 ?  alert ('Ingrese un número mayor a cero') : false
}


function verificacionNumerosConCero (dato){
   /*
    if (isNaN (dato) ){
        return alert ('Ingrese un número')
    } else if ( dato <0 ){
        return alert ('Ingrese un número mayor a cero')
    }
    */
    isNaN (dato) ?  alert ('Ingrese un número') : dato <0 ?  alert ('Ingrese un número mayor a cero') : false
}