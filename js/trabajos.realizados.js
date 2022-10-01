let trabajosRealizados = [
    { posicion: 1,
        descripcion:"Inspección de obra a la torre de control del Aeropuerto Internacional Ministro Pinterisini"
    },
    { posicion: 2,
        descripcion:"Proyecto ejecutivo de complejo de viviendas sky, en Tigre"
    },
    { posicion: 3,
        descripcion:"Anteproyecto de la nueva dársena del puerto de Buenos Aires"
    },
    { posicion: 4,
        descripcion:"Inspeccion y proyecto ejecutivo del metrobus"
    },
    { posicion: 5,
        descripcion:"Estudio de fáctibilidad y estudio de impácto ambiental de arque eólico 'Achiras'"
    },
    { posicion: 6,
        descripcion:"Proyecto ejecutivo de planta de tratamiento de efuentes cloacales de Santiago del Estero"
    },
]

for (let trabajos of trabajosRealizados){
    document.write(`<div class="tarjeta-flex">

    <div class="tarjeta">

        <div class="adelante${trabajos.posicion}"></div>

        <div class="atras">
            <p>${trabajos.descripcion}</p> 
        </div>
    </div>

</div>
`)
}

document.write(`</div>

</div>
</main>
<footer id="pie" class="container-fluid">

<div class="contacto">
    <h5> Fragüe Servicios de Ingeniería</h5>
    <ul>
        <li class="contacto__mail">administracion@frague.com.ar</li>
        <li class="contaco__ubicacion">xxx, Buenos Aires, Argentina</li>
        <li class="contacto__linkedin"><a href="#">linkedin frague soluciones ingenieriles</a></li>
    </ul>

</div>
<div class="linksUtiles">
    <h5>Links útiles</h5>

    <ul>
        <li><a href="https://www.camarco.org.ar/" target="_blank">Cámra Argentina de la construccion</a></li>
        <li><a href="https://www.inti.gob.ar/areas/servicios-industriales/construcciones-e-infraestructura/cirsoc/reglamentos" target="_blank">Reglamentos CIRSOC</a></li>
        <li><a href="https://cpic.org.ar/" target="_blank">Consejo profesional de ingeniería civil</a></li>
        <li><a href="http://www.colegioingenieros.org.ar/" target="_blank">Colégio de ingenieros de la provincia de Buenos Aires</a></li>
    </ul>
</div>

</footer>
<span class="material-symbols-outlined ir-arriba"><a href="#ir-arriba">arrow_upward</a>
</span>
</div>`)
