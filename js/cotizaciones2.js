let botonVial = document.querySelector('#boton-vial');

botonVial.addEventListener('click', cotizacionVial);

function cotizacionVial (event){
    event.preventDefault()
    // let presupuesto = document.querySelector('#presupuestoVial').value;
    // let longitud = document.querySelector('#longitud').value
    // console.log (parseFloat(longitud));
    // let fondos = document.querySelector('#eleccion-de-licitacion-vial').value;
    // console.log(fondos);
     vialCheckbox ();


}

function vialCheckbox (){
    let presupuesto = document.querySelector('#presupuestoVial').value;
    let longitud = document.querySelector('#longitud').value
    console.log (parseFloat(longitud));
    let fondos = document.querySelector('#eleccion-de-licitacion-vial').value;
    console.log(fondos);
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let aCotizar = ([...checked].map(c=>c.value));
    console.log(aCotizar);
    
    let terminado = aCotizar.forEach((element) => {

        if (element == "Anteproyecto obra basica"){
            console.log(presupuesto,"aaaaaa")
        } else if( element== 'Anteproyecto señalizacion'){
            console.log(presupuesto,"bbbb")
        } else if( element == 'Anteproyecto iluminacion') {
            console.log('cccc')
        } else if (element == 'ejecutivo obra basica'){
            console.log('dddd')
        } else if (element == 'ejecutivo señalizacion'){
            console.log('eeee')
        } else if (element == 'ejecutivo iluminacion'){
            console.log('ffff')
        } else if (element == 'ejecutivo inspeccion'){
            console.log('gggg')
        }
        
        
       })
    


}