
import {mensajeVial,mensajeHidraulico, mensajeCivil} from './mensajesCot.js'

moment.locale('es');
export const hoy = moment().format ('D MMMM  YYYY');
const ayer = moment().subtract(2, 'days').format ('YYYY-MM-DD');

export let mensajeA = document.querySelector ('.mensaje1');
export let mensajeB = document.querySelector ('.mensaje2');
export let mensajes = [];
let cotizacionesViejas = document.querySelector('#cotizacionesViejas');
let mensajeDolar= document.querySelector('#mensajeDolar')

/* Promesa API banco central (SOLO 100 CONSULTAS DAIRIAS)*/
// Con try
/*
const valorDolar = async() => {

    try{
        const response = await fetch('https://api.estadisticasbcra.com/usd_of', {
            headers: {
                Authorization: 
                'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg1MzM4ODAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmcmFuY28ucGlzYXBpYTQwNUBnbWFpbC5jb20ifQ.EfTIQVeMq7TsM0_Uz8JDgfcZy3WUpSNbmUK35xeJ8dbWqfEOR-FFedSELDYbF-B4yIK0blIBpj6c3s6Ahmhoqw',
            }
        })
        if (!response){
            throw new Error (`HTTP error status : ${response.status}`)
        }
        const data = await  response.json()
        const dolarAyer = data.find( element => element.d === ayer )
            console.log(data)
            const dolar = dolarAyer.v
            mensajeDolar.append(`La cotización del dolar ofical Banco Nacion es U$D${dolar}`)
    } catch (error){
        alert('No se puede ingresar a la API')
    }
}
valorDolar()

*/

// Tradicional

fetch('https://api.estadisticasbcra.com/usd_of', {
    headers: {
        Authorization: 
        'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg1MzM4ODAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmcmFuY28ucGlzYXBpYTQwNUBnbWFpbC5jb20ifQ.EfTIQVeMq7TsM0_Uz8JDgfcZy3WUpSNbmUK35xeJ8dbWqfEOR-FFedSELDYbF-B4yIK0blIBpj6c3s6Ahmhoqw',
    }
})
.then( response =>{
    response.json()
        .then(data =>{ 
            const dolarAyer = data.find( element => element.d === ayer )
            console.log(data)
            const dolar = dolarAyer.v
            mensajeDolar.append(`La cotización del dolar ofical Banco Nacion es U$D${dolar}`)

        })
})


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


    verifVial (presupuesto, longitud, fondos,checked)
    /*
        let terminado = aCotizar.forEach((element) => {
            
    
            if (element == "Anteproyecto obra basica"){
                let total = longitud*0.015*presupuesto
                mensaje1 = ` El presupuesto por obra básica ${fondos} en anteproyecto es ${total} al ${hoy}`;
                mensajeA.innerHTML = mensaje1

            } else if( element== 'Anteproyecto señalizacion'){
                let total = longitud*0.00015*presupuesto
                mensaje1 = `El presupuesto por señalizacion ${fondos} en anteproyecto es ${total} al ${hoy}`
                mensajeA.innerHTML = mensaje1

            } else if( element == 'Anteproyecto iluminacion') {
                let total =longitud*0.00035*presupuesto;
                mensaje1 = `El presupuesto por iluminación ${fondos} en anteproyecto es ${total} al ${hoy}`
                mensajeA.innerHTML = mensaje1

            } else if (element == 'ejecutivo obra basica'){
                let total2 = longitud*0.4*presupuesto
                mensaje2 = `El presupuesto por obra básica ${fondos} en proyecto ejecutivo es ${total2} al ${hoy}`
                mensajeB.innerHTML = mensaje2
            } else if (element == 'ejecutivo señalizacion'){
                let total2 = longitud*0.02*presupuesto
                mensaje2 = `El presupuesto por señalización ${fondos} en proyecto ejecutivo es ${total2} al ${hoy}`
                mensajeB.innerHTML = mensaje2
            } else if (element == 'ejecutivo iluminacion'){
                let total2 = longitud*0.05*presupuesto
                mensaje2 = `El presupuesto por iluminación ${fondos} en proyecto ejecutivo es ${total2} al ${hoy}`
                mensajeB.innerHTML = mensaje2
            } else if (element == 'ejecutivo inspeccion'){
                let total2=longitud*0.01*presupuesto
                mensaje2 = `El presupuesto por iluminación ${fondos} en proyecto ejecutivo es ${total2} al ${hoy}`
                mensajeB.innerHTML = mensaje2
            }

    
        })

        mensajeCotizaciones (mensajes,mensaje1, mensaje2);*/
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
    // let aCotizar = ([...checked].map(c=>c.value));


    verifResto (presupuesto, cañerias, superficie ,fondos, checked,mensajeHidraulico)
    /*
    let terminado = aCotizar.forEach((element) => {
        if (element == "Anteproyecto Electromecanica"){
            let total =0.50*presupuesto*(superficie/cañerias)
            mensaje1 = ` El presupuesto por la obra electromecánica ${fondos} en anteproyecto es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1
        }else if( element== 'Anteproyecto obra civil'){
            let total =0.60*presupuesto*(superficie/cañerias)
            mensaje1 = `El presupuesto por la obra civil ${fondos} en anteproyecto es ${total} al ${hoy}`
            mensajeA.innerHTML = mensaje1

        }else if( element== 'Anteproyecto unidades hidraulicas'){
            let totalA =0.60*presupuesto*(superficie/cañerias)
            let totalB = presupuesto * 0.45
            mensaje1 = `El presupuesto del movimiento de suelo y la estructura resistente es ${totalA} por la obra electromecánica es ${totalB} al ${hoy}`
            mensajeA.innerHTML = mensaje1
        } else if (element== 'Proyecto ejecutivo electromecanico'){
            let total2 =0.50*presupuesto*(superficie/cañerias)
            mensaje2 = `El presupuesto por el proyecto ejecutivo de la obra electromecánica de una licitación ${fondos}  es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element== 'Proyecto ejecutivo obra civil'){
            let total2 = 0.60*presupuesto*(superficie/cañerias)
            mensaje2 = `El presupuesto por el proyecto ejecutivo de la obra civil de una licitación ${fondos} es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        }  else if (element== 'Proyecto ejecutivo unidades hidraulicas'){
            let total2A = 0.33 * presupuesto
            let total2B = presupuesto * 0.47
            mensaje2 = `El presupuesto del movimiento de suelo y la estructura resistente es ${total2A} y por la obra electromecánica es ${total2B} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element== 'Inspeccion de obra'){
            let total2A = presupuesto * 0.015
            let total2B = presupuesto * 0.02
            mensaje2 = `El presupuesto por la insepección de obra electromecánica es ${total2A} y por la obra civil es ${total2B}  en forma estimada al ${hoy}`
            mensajeB.innerHTML = mensaje2
        }
        
    })

    mensajeCotizaciones (mensajes,mensaje1, mensaje2);*/
}

/* Civil*/

let botonCivil = document.querySelector('#botonCivil');

botonCivil.addEventListener('click', cotizacionCivil);

function cotizacionCivil (event){
    event.preventDefault()

    let presupuesto =parseFloat (document.querySelector('#presupuestoCivil').value) ;
    verificacionNumero ( presupuesto);
    let pisos = parseInt( document.querySelector('#cantPisos').value);
    verificacionNumero (pisos);



    let subsuelo = parseInt( document.querySelector('#cantSubsuelos').value) ;
    verificacionNumerosConCero (subsuelo);

    let fondos = document.querySelector('#eleccion-de-licitacion-c').value;

    let checked = document.querySelectorAll('input[type="radio"]:checked');
    // let aCotizar = ([...checked].map(c=>c.value));


    
    verifResto (presupuesto, pisos, subsuelo ,fondos, checked,mensajeCivil)
    /*
    let terminado = aCotizar.forEach((element) => {
        if (element == "Anteproyecto movimiento de suelos"){
            let total = presupuesto*0.07* (1+(subsuelo*2))
            mensaje1 = `El presupuesto para el movimiento de suelos para un edificio de ${subsuelo} es ${total} al ${hoy} `
            mensajeA.innerHTML = mensaje1
        } else if ( element == "Anteproyecto estructura y mamposteria"){
            let total = presupuesto*0.16
            mensaje1 = `El presupuesto para la estructura y mamposteria de un edificio de ${subsuelo} y ${pisos} es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1
        } else if ( element == "Anteproyecto Terminaciones" ){
            let total = presupuesto*0.22
            mensaje1 = `El presupuesto para las terminaciones del edificio de ${pisos} es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1
        } else if (element == "Proyecto ejecutivo estructural"){
            let total2 = presupuesto*0.20
            mensaje2 = `El presupuesto para la estructura de un edificio de ${subsuelo} y ${pisos} es ${total2} al ${hoy}`;
            mensajeB.innerHTML = mensaje2
        } else if (element == "Direccion de obra"){
            let total2 = presupuesto*0.01
            mensaje2 = `El presupuesto para la dirección de obra es ${total2} al ${hoy}`;
            mensajeB.innerHTML = mensaje2
        } else if (element == "Proyecto ejecutivo seguridad e higiene"){
            let total2 = presupuesto*0.005
            mensaje2 = `El presupuesto para la seguridad e higiene en obra es ${total2} al ${hoy}`;
            mensajeB.innerHTML = mensaje2
        }
    })


mensajeCotizaciones (mensajes,mensaje1, mensaje2);*/
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

/* Agregar al JSON*/

export function agregarAllocalStorage (mens){
    localStorage.setItem ("cotizaciones", JSON.stringify(mens)) 
}

export function mensajeCotizaciones (m,m1,m2){
    let mensajeFinal = []
    mensajeFinal.push(m1,m2)
    let salida = mensajeFinal.map((elemento)=>{
        m.push(elemento)
    });
    agregarAllocalStorage (m)
}

cotizacionesViejas.addEventListener('click', cotViejas);

function cotViejas (){
    let cot = (JSON.parse(localStorage.getItem('cotizaciones')));
    let insertarCotizacionesRealizadas = document.querySelector("#insertarCotizacionesRealizadas")
    cot.forEach ((element,index) => {
        insertarCotizacionesRealizadas.innerHTML += `<p> ${index+1}-${element} </p>`
    })


}

/* Verif civi*/

function verifVial (pre, long, fin, che){
    if (pre && long && fin && che){
        mensajeVial (pre,long, fin,che)
    } else {
        swal.fire({
            title: 'Completar todos los datos',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
    }
}

/* Verif Hid y civil*/
function verifResto (pre, can, sup ,fin, che, verificacion){
    if (pre && can && sup && fin && che){
        verificacion (pre,can,sup,fin)
    } else {
        swal.fire({
            title: 'Complete todos los rangos',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
    }
}






