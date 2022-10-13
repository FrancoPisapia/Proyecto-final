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
    let presupuesto = document.querySelector('#presupuestoVial').value;
    let longitud = document.querySelector('#longitud').value
    console.log (parseFloat(longitud));
    let fondos = document.querySelector('#eleccion-de-licitacion-vial').value;
    console.log(fondos);

    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));
    console.log(aCotizar);
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

    let presupuesto = document.querySelector('#presupuestoHidrico').value;
    let cañerias = document.querySelector('#cañerias').value;

    console.log(cañerias)

    let superficie = document.querySelector('#superficiePlanta').value;

    let fondos = document.querySelector('#eleccion-de-licitacion-h').value;
    console.log(fondos);

    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));
    console.log(aCotizar);
    let mensaje1 
    let mensaje2
}