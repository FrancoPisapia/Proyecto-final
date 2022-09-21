

let obra =  prompt ( "Vial, Hidraúlica o Civil");
obra.toLowerCase()
let presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"));
let longitud;
let tipologia_hidraulica;
let mensaje;



    switch (obra){
        case ("vial"):

            longitud = parseFloat(prompt ("Ingrese la longitud en Km de la obra"))
            verificacion_viales (presupuesto, longitud);
            let licitacion = prompt("Pública o Privada");
            verificacion_licitacion (licitacion);

            let instancia = prompt("Anteproyecto o Ejecutivo")
            instancia.toLowerCase()

            switch (instancia) {
                case ("anteproyecto"):
                    let trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion");
                    anteproyecto_viales (trabajos);
                    break;
                case ("p. ejecutivo"):
                    trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion 4-Direccion de obra");
                    proyecto_ejecutivo (trabajos);
                    break;
                default:
                    repetir (instancia);

            }
            case ("hidraulica"):
                verificacion_hidraulica (presupuesto);
                
                let instancia_hidraulica = prompt("Anteproyecto o Ejecutivo")
                instancia_hidraulica.toLowerCase();

                switch (instancia_hidraulica) {
                    case ("anteproyecto"):
                        let trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora");
                        anteproyecto_hidraulico (trabajos_h);
                        break;
                    case ("p. ejecutivo"):
                        trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora 5-Direccion de obra");
                        proyecto_ejecutivo (trabajos_h);
                        break;
                    default:
                        console.log ("NADA")
    
                }


            console.log ("todo Ok z")



            
    }


    /********** OBRAS VIALES *********/

    /* Repetir proceso si no es anteproyecto o ejecutivo*/
    function repetir (instancia){
        instancia = prompt("Anteproyecto o Ejecutivo")
        if ( instancia == "anteproyecto" || instancia == "ejecutivo"){
            if (instancia == "anteproyecto" ){
                let trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion");
                anteproyecto_viales (trabajos);
        } else if (instancia == "ejecutivo"){
            trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion 4-Direccion de obra");
        
            proyecto_ejecutivo (trabajos);
        }
        } else{
            instancia = prompt("Anteproyecto o Ejecutivo");
            repetir (instancia);
        }
    }

/* Verificacion de si es licitacion pública o privada */
    function verificacion_licitacion (licitacion){
    licitacion.toLowerCase();
    if (licitacion == "publica" || licitacion == "privada"){

    } else {
        alert =( "Inidique si es Publica o privada");
        let licitacion = prompt("Pública o Privada");
        verificacion_licitacion (licitacion);
    }
}

/* Verificacion de datos de longitud y presupuesto  */

function verificacion_viales (presupuesto, longitud){
    if ( (isNaN (presupuesto)) || (isNaN (longitud)) ){
        mensaje = alert ("Ingrese valores numericos");
        presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"))
        let longitud = parseFloat(prompt ("Ingrese la longitud en Km de la obra"));
        verificacion_viales (presupuesto, longitud);
    }else if (presupuesto <=0 || longitud <=0){
        mensaje = alert ("Ingrese valores mayores a cero");
        presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"))
        let longitud = parseFloat(prompt ("Ingrese la longitud en Km de la obra"));
        verificacion_viales (presupuesto, longitud);

    }

} 

/* Ante proyectos viales*/

function anteproyecto_viales (trabajos){
    let total
    switch (trabajos){
    case "1" :
        total = parseFloat(longitud*0.015*presupuesto);
        console.log (`El presupuesto por obra básica en anteproyecto es ${total} en forma estimada`);
        break;
    case "2":
        total = parseFloat(longitud*0.00015*presupuesto);
        console.log (`El presupuesto por señalización en anteproyecto es ${total} en forma estimada`);
        break;
    case "3":
        total = parseFloat(longitud*0.00035*presupuesto);
        console.log (`El presupuesto por iluminación en anteproyecto es ${total} en forma estimada`);
        break;
    default:
        alert ("Ingrese los valores de 1 a 3");
        trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion");
        anteproyecto_viales (trabajos);
    }
}

/* Proyecto ejecutivo viales*/
function proyecto_ejecutivo (trabajos){
    let total
    switch (trabajos){
    case "1" :
        total = parseFloat(longitud*0.4*presupuesto);
        console.log (`El presupuesto por el proyecto de obra básica ejecutiva es ${total} en forma estimada`);
        break;
    case "2":
        total = parseFloat(longitud*0.02*presupuesto);
        console.log (`El presupuesto por el proyecto de señalización ejecutiva es ${total} en forma estimada`);
        break;
    case "3":
        total = parseFloat(longitud*0.05*presupuesto);
        console.log (`El presupuesto por el proyecto de iluminación ejecutiva es ${total} en forma estimada`);
        break;
    case "4":
        total = parseFloat(longitud*0.01*presupuesto);
        console.log (`El presupuesto por la dirección de obra ${total} en forma estimada`);
        break;
    default:
        alert ("Ingrese los valores de 1 a 4");
        trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion 4-Direccion de obra");
        proyecto_ejecutivo (trabajos);
    }
}

    /********** OBRAS HIDRAULICAS *********/
    /* Verificacion*/
    function verificacion_hidraulica (presupuesto){
        
        if ( (isNaN (presupuesto))){
            mensaje = alert ("Ingrese valores numericos");
            presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"))
            verificacion_hidraulica (presupuesto);
        }else if (presupuesto <=0){
            mensaje = alert ("Ingrese valores mayores a cero");
            presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"))
            verificacion_hidraulica (presupuesto);
        }

    
    } 

    /* Funcion anteproyectos  hidraulicos */

    function anteproyecto_hidraulico (trabajos_h){
        let extension;
        let superficie;
        let total_hidraulica;
        switch (trabajos_h){
            case "1":
                extension = parseFloat(prompt("Ingrese longitud de la obra"));
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                total_hidraulica = parseFloat(0.40*presupuesto*(superficie/extension));
                console.log (`El presupuesto del movimiento de suelo y cañerias es $ ${total_hidraulica} en forma estimada`);
                break;
            case "2":
                extension = parseFloat(prompt("Ingrese longitud de la obra"));
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                total_hidraulica = parseFloat(0.60*presupuesto*(superficie/extension));
                console.log (`El presupuesto del movimiento de suelo y cañerias es $ ${total_hidraulica} en forma estimada`);
                break;
            case "3":
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                console.log (`El presupuesto del movimiento de suelo y la estructura resistente es ${0.5 * presupuesto/superficie} por la obra electromecánica es ${presupuesto * 0.70/superficie} y por la obra civil es ${presupuesto * 0.20/superficie}  en forma estimada`);
                break;
            case "4":
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                console.log (`El presupuesto del movimiento de suelo y la estructura resistente es ${0.5 * presupuesto/superficie} por la obra electromecánica es ${presupuesto * 0.70/superficie} y por la obra civil es ${presupuesto * 0.20/superficie}  en forma estimada`);
                break;
            default:
                alert ("Ingrese los valores de 1 a 4");
                trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora");
                anteproyecto_hidraulico (trabajos_h);
        }
    }

    /*Funcion de proyecto ejecutivo */