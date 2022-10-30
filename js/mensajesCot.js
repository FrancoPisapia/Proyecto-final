import {agregarAllocalStorage,mensajeCotizaciones,mensajes,mensajeA,mensajeB,hoy} from './cotizaciones2.js '
export function mensajeVial (p,l,f){
    

    // const hoy = moment().format ('D MMMM  YYYY');
    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));

    let mensaje1 
    let mensaje2
    let terminado = aCotizar.forEach((element) => {

    
        if (element == "Anteproyecto obra basica"){
            let total = Math.round(l*0.015*p)
            mensaje1 = ` El presupuesto por obra básica ${f} en anteproyecto es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1

        } else if( element== 'Anteproyecto señalizacion'){
            let total = Math.round(l*0.00015*p)
            mensaje1 = `El presupuesto por señalizacion ${f} en anteproyecto es ${total} al ${hoy}`
            mensajeA.innerHTML = mensaje1

        } else if( element == 'Anteproyecto iluminacion') {
            let total = Math.round(l*0.00035*p)
            mensaje1 = `El presupuesto por iluminación ${f} en anteproyecto es ${total} al ${hoy}`
            mensajeA.innerHTML = mensaje1

        } else if (element == 'ejecutivo obra basica'){
            let total2 = Math.round(l*0.4*p)
            mensaje2 = `El presupuesto por obra básica ${f} en proyecto ejecutivo es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element == 'ejecutivo señalizacion'){
            let total2 = Math.round(l*0.02*p)
            mensaje2 = `El presupuesto por señalización ${f} en proyecto ejecutivo es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element == 'ejecutivo iluminacion'){
            let total2 = Math.round(l*0.05*p)
            mensaje2 = `El presupuesto por iluminación ${f} en proyecto ejecutivo es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element == 'ejecutivo inspeccion'){
            let total2= Math.round(l*0.01*p)
            mensaje2 = `El presupuesto por iluminación ${f} en proyecto ejecutivo es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        }


    })

    mensajeCotizaciones (mensajes,mensaje1, mensaje2);
}




export function mensajeHidraulico(p,c,s,f){
    let checked = document.querySelectorAll('input[type="radio"]:checked');
    
    let aCotizar = ([...checked].map(c=>c.value));
    let mensaje1 
    let mensaje2
    let terminado = aCotizar.forEach((element) => {
        if (element == "Anteproyecto Electromecanica"){
            let total = Math.round(0.50*p*(s/c))
            mensaje1 = ` El presupuesto por la obra electromecánica ${f} en anteproyecto es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1
        }else if( element== 'Anteproyecto obra civil'){
            let total = Math.round(0.60*p*(s/c))
            mensaje1 = `El presupuesto por la obra civil ${f} en anteproyecto es ${total} al ${hoy}`
            mensajeA.innerHTML = mensaje1

        }else if( element== 'Anteproyecto unidades hidraulicas'){
            let totalA =Math.round(0.60*p*(s/c))
            let totalB = Math.round(p * 0.45)
            mensaje1 = `El presupuesto del movimiento de suelo y la estructura resistente es ${totalA} por la obra electromecánica es ${totalB} al ${hoy}`
            mensajeA.innerHTML = mensaje1
        } else if (element== 'Proyecto ejecutivo electromecanico'){
            let total2 =Math.round(0.50*p*(s/c))
            mensaje2 = `El presupuesto por el proyecto ejecutivo de la obra electromecánica de una licitación ${f}  es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element== 'Proyecto ejecutivo obra civil'){
            let total2 = Math.round(0.60*p*(s/c))
            mensaje2 = `El presupuesto por el proyecto ejecutivo de la obra civil de una licitación ${f} es ${total2} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        }  else if (element== 'Proyecto ejecutivo unidades hidraulicas'){
            let total2A = Math.round(0.33 * p)
            let total2B = Math.round(p * 0.47)
            mensaje2 = `El presupuesto del movimiento de suelo y la estructura resistente es ${total2A} y por la obra electromecánica es ${total2B} al ${hoy}`
            mensajeB.innerHTML = mensaje2
        } else if (element== 'Inspeccion de obra'){
            let total2A = Math.round(p * 0.015)
            let total2B = Math.round(p * 0.02)
            mensaje2 = `El presupuesto por la insepección de obra electromecánica es ${total2A} y por la obra civil es ${total2B}  en forma estimada al ${hoy}`
            mensajeB.innerHTML = mensaje2
        }
        
    })

    mensajeCotizaciones (mensajes,mensaje1, mensaje2);
}


export function mensajeCivil (p,pi,s){
    
    let checked = document.querySelectorAll('input[type="radio"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));

    let mensaje1 
    let mensaje2

    let terminado = aCotizar.forEach((element) => {
        if (element == "Anteproyecto movimiento de suelos"){
            let total = Math.round(p*0.07* (1+(s*2)))
            mensaje1 = `El presupuesto para el movimiento de suelos para un edificio de ${s} subsuelos es ${total} al ${hoy} `
            mensajeA.innerHTML = mensaje1
        } else if ( element == "Anteproyecto estructura y mamposteria"){
            let total = Math.round(p*0.16)
            mensaje1 = `El presupuesto para la estructura y mamposteria de un edificio de ${s} subsuelos y ${pi} pisos es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1
        } else if ( element == "Anteproyecto Terminaciones" ){
            let total = Math.round(p*0.22)
            mensaje1 = `El presupuesto para las terminaciones del edificio de ${pi} pisos es ${total} al ${hoy}`;
            mensajeA.innerHTML = mensaje1
        } else if (element == "Proyecto ejecutivo estructural"){
            let total2 = Math.round(p*0.20)
            mensaje2 = `El presupuesto para la estructura de un edificio de ${s} subsuslos y ${pi} pisos es ${total2} al ${hoy}`;
            mensajeB.innerHTML = mensaje2
        } else if (element == "Direccion de obra"){
            let total2 = Math.round(p*0.01)
            mensaje2 = `El presupuesto para la dirección de obra es ${total2} al ${hoy}`;
            mensajeB.innerHTML = mensaje2
        } else if (element == "Proyecto ejecutivo seguridad e higiene"){
            let total2 = Math.round(p*0.005)
            mensaje2 = `El presupuesto para la seguridad e higiene en obra es ${total2} al ${hoy}`;
            mensajeB.innerHTML = mensaje2
        }
    })


mensajeCotizaciones (mensajes,mensaje1, mensaje2);
}

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

