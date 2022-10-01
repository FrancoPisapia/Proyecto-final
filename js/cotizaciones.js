

let obra;
let presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"));
let longitud;
let trabajos;
let tipologia_hidraulica;
let mensaje;
let trabajos_h;
let trabajos_c;


    cotizador (obra);



    /********** OBRAS VIALES *********/

    /* Repetir proceso si no es anteproyecto o ejecutivo*/
    function repetir_vial (instancia){
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

    function instancia (instancia){
        
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
    function verificacion (presupuesto){
        
        if ( (isNaN (presupuesto))){
            mensaje = alert ("Ingrese valores numericos");
            presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"))
            verificacion (presupuesto);
        }else if (presupuesto <=0){
            mensaje = alert ("Ingrese valores mayores a cero");
            presupuesto = parseFloat(prompt ("Ingrese el presupuesto oficial de la obra"))
            verificacion(presupuesto);
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
                console.log (`El presupuesto del movimiento de suelo y la estructura resistente es ${0.35 * presupuesto} por la obra electromecánica es ${presupuesto * 0.45} y por la obra civil es ${presupuesto * 0.20/superficie}  en forma estimada`);
                break;
            case "4":
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                console.log (`El presupuesto del movimiento de suelo y la estructura resistente es ${0.30 * presupuesto} por la obra electromecánica es ${presupuesto * 0.45} y por la obra civil es ${presupuesto * 0.25}  en forma estimada`);
                break;
            default:
                alert ("Ingrese los valores de 1 a 4");
                trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora");
                anteproyecto_hidraulico (trabajos_h);
        }
    }

    /*Funcion de proyecto ejecutivo */

    function proyecto_ejecutivo_h (trabajos_h){
        let extension;
        let superficie;
        let total_hidraulica;
        switch (trabajos_h){
            case "1":
                extension = parseFloat(prompt("Ingrese longitud de la obra"));
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                total_hidraulica = parseFloat(0.50*presupuesto*(superficie/extension));
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
                console.log (`El presupuesto del movimiento de suelo y la estructura resistente es ${0.33 * presupuesto} por la obra electromecánica es ${presupuesto * 0.47} y por la obra civil es ${presupuesto * 0.20}  en forma estimada`);
                break;
            case "4":
                superficie = parseFloat(prompt("Superficie en m^2 de la obra"));
                console.log (`El presupuesto del movimiento de suelo y la estructura resistente es ${0.27 * presupuesto} por la obra electromecánica es ${presupuesto * 0.44} y por la obra civil es ${presupuesto * 0.29}  en forma estimada`);
                break;
            case "5":
                console.log (`El presupuesto por la dirección de obra electromecánica es ${presupuesto * 0.015} y por la obra civil es ${presupuesto * 0.02}  en forma estimada`);
                break;

            default:
                alert ("Ingrese los valores de 1 a 5");
                trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora 5-Direccion de obra");
                proyecto_ejecutivo_h (trabajos_h);
        }
    }

    /* Repetir el swtich hidraulica*/
    function hidraulica (){
        instancia_hidraulica = prompt("Anteproyecto o Ejecutivo")
        switch (instancia_hidraulica.toLowerCase()) {
            case ("anteproyecto"):
                trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora");
                anteproyecto_hidraulico (trabajos_h);
                break;
            case ("ejecutivo"):
                trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora 5-Direccion de obra");
                proyecto_ejecutivo_h (trabajos_h);
                break;
            default:
                hidraulica (instancia_hidraulica);
    } }

    /********** OBRAS CIVIL*********/
    function anteproyecto_civil (trabajos_c){
        let pisos = parseInt(Math.abs(prompt("¿Cantidad de pisos?")));
        if (pisos == 0){
            alert ("Ingrese número mayor a 0");
            anteproyecto_civil (trabajos_c);
        } else{

        let subsuelos = parseInt (Math.abs(prompt("Ingrese la cantidad de subsuelos")));
        switch (trabajos_c){
            case "1":
                if (subsuelos >0 ){
                console.log (`El presupuesto para el movimiento de suelos para un edificio de ${subsuelos} es ${presupuesto*0.07*(subsuelos*2)}`)
              } else {
                  console.log (`El presupuesto para el movimiento de suelos para un edificio de ${subsuelos} es ${presupuesto*0.07}`)
              } break;
  
              case "2":
                  console.log (`El presupuesto para la estructura y mamposteria de un edificio de ${subsuelos} y ${pisos} es ${presupuesto*0.16}`)
                  break;
              case "3":
                  console.log (`El presupuesto para las terminaciones del edificio de ${pisos} es ${presupuesto*0.22}`)
                  break;
              default:
                anteproyecto_civil (trabajos_c);
                break;
    } }}

    function proyecto_ejectivo_c (trabajos_c){
        switch (trabajos_c){
            case "1":
                console.log (`El presupuesto para la dirección de obra es ${presupuesto*0.01}`)

              case "2":
                  console.log (`El presupuesto para la seguridad e higiene en obra es ${presupuesto*0.005}`)
                  break;
              default:      
                proyecto_ejectivo_c (trabajos_c);
                break;
    }}  


    function civil (){
        instancia_civil = prompt("Anteproyecto o Ejecutivo")
        switch (instancia_civil.toLowerCase()) {
            case ("anteproyecto"):
                trabajos_c = prompt ("1-Movimiento de suelos 2- Estructura y mamposteria 3-Terminaciones (solados, revestimientos y pinturas)");
                anteproyecto_civil (trabajos_c);
                break;
            case ("ejecutivo"):
                trabajos_c = prompt ("1- Direccion de obra 2-Especialista en seguridad de higiene");
                proyecto_ejecutivo_c (trabajos_h);
                break;
            default:
                civil  (instancia_civil);
    } }



/* FUNCION TODO INCLUIDO */
    function cotizador (obra){
        obra =  prompt ( "Vial, Hidraúlica o Civil");
        switch (obra.toLowerCase()){
            case ("vial"):
    
                longitud = parseFloat(prompt ("Ingrese la longitud en Km de la obra"))
                verificacion_viales (presupuesto, longitud);
                let licitacion = prompt("Pública o Privada");
                verificacion_licitacion (licitacion);
    
                let instancia = prompt("Anteproyecto o ejecutivo")
                instancia.toLowerCase()
    
                switch (instancia.toLowerCase()) {
                    case ("anteproyecto"):
                        trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion");
                        anteproyecto_viales (trabajos);
                        break;
                    case ("ejecutivo"):
                        trabajos = prompt ("1- Obra básica 2-Señalizacion vertical y horizontal 3-Iluminacion 4-Direccion de obra");
                        proyecto_ejecutivo (trabajos);
                        break;
                    default:
                        repetir_vial (instancia);
                        break;
                        }break;
    
                
                case ("hidraulica"):
                    verificacion (presupuesto);
                    
                    let instancia_hidraulica = prompt("Anteproyecto o Ejecutivo");
    
    
                    switch (instancia_hidraulica.toLowerCase()) {
                        case ("anteproyecto"):
                            trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora");
                            anteproyecto_hidraulico (trabajos_h);
                            break;
                        case ("ejecutivo"):
                            trabajos_h = prompt ("1- Red de agua 2-Red Cloacal 3-Planta depuradora 4-Planta potabilizadora 5-Direccion de obra");
                            proyecto_ejecutivo_h (trabajos_h);
                            break;
                        default:
                            hidraulica (instancia_hidraulica);  
        
                    } 
                    break;
    
                    case ("civil"):
                        verificacion (presupuesto);
                        superficie =parseFloat(prompt("Superficie en m^2 de la obra"));
                        
    
                        let instancia_civil = prompt("Anteproyecto o Ejecutivo");
    
                        switch (instancia_civil.toLowerCase()){
                            case "anteproyecto":
                                trabajos_c = prompt("1-Movimiento de suelos 2- Estructura y mamposteria 3-Terminaciones (solados, revestimientos y pinturas)")
                                anteproyecto_civil (trabajos_c);
                                break;
                            
                            case "ejecutivo":
                                trabajos_c = prompt("1- Direccion de obra 2-Especialista en seguridad de higiene");
                                proyecto_ejectivo_c (trabajos_c);
                                break;
                            default:
                                civil (instancia_civil);
                                break;
    
                        }
    
    
                    break;
                    
                    default:
                        cotizador ();
                        break

        }
    
    }
