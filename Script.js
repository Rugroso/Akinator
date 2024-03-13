let arreglo = [];
let sino = "";
let talvez=0;
let cont=0;
let tilines = [];
let contenido="";

async function leerJson() {
    try {
        const API_URL = "personajes.json";
        const response = await fetch(API_URL);
        tilines = await response.json();
        console.log("Tilines cargados:", tilines);
    } catch (error) {
        console.error('Error al cargar los datos de los personajes:', error);
    }
}

function buttonSi() {
    sino="Si";
    logica();
}

function buttonNo() {
    sino="No";
    logica();
}

function buttonTalvez() {
    if (talvez%2===0) {
        sino="Si";
    }
    else {
        sino="No";
    }
    talvez++;
    logica();
}


function cargar() {
    for (let i = 1; i <=42; i++) {
        document.getElementById(`Pregunta${i}`).style.display = 'none';
    }
    document.getElementById("Si").style.display = 'none';
    document.getElementById("No").style.display = 'none';
    document.getElementById("Talvez").style.display = 'none';
    document.getElementById("Texto").style.display = 'none';
    document.getElementById("preguntaTitulo").style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    leerJson();
});

function iniciar() {
    let numRandom = 1 + parseInt(Math.random()*42);
    arreglo[0]=numRandom;
    document.getElementById(`Pregunta${numRandom}`).style.display = 'block';
    document.getElementById("Si").style.display = 'block';
    document.getElementById("No").style.display = 'block';
    document.getElementById("Talvez").style.display = 'block';
    document.getElementById(`Bienvenida`).style.display = 'none';
}

function finalizar() {
    document.getElementById(`Texto`).style.display = 'block';
    document.getElementById("Si").style.display = 'none';
    document.getElementById("No").style.display = 'none';
    document.getElementById("Talvez").style.display = 'none';
    for (let i = 1; i <= 42; i++) {
        document.getElementById(`Pregunta${i}`).style.display = 'none';
    }
    document.getElementById('Texto').innerHTML = contenido;
}

function logica () {
    contenido = "";
    if (arreglo.length<=42) {
        for (let i = 1; i <=42; i++) {
            document.getElementById(`Pregunta${i}`).style.display = 'none';
        }
        let numRandom = 0;
        let vf = true;
        let encontrar = false;
        if (arreglo.length<42) {
            while (vf===true) {
                encontrar=false;
                numRandom = 1 + parseInt(Math.random()*42);
                console.log(`Se genero este numero: ${numRandom}`);
                for (let recorrer of arreglo) {
                    if (recorrer===numRandom) {
                        encontrar = true;
                    }
                } 
                if (encontrar===false) {
                    arreglo.push(numRandom);
                    console.log(`Tamaño del arreglo: ${arreglo.length-1}`);
                    break;
                }
            }
            let preguntaRandom = `Pregunta${numRandom}`;
            document.getElementById(preguntaRandom).style.display = 'block';
        }
        console.log(`Valor dentro del arreglo: ${arreglo[cont]}`);
        
        if (arreglo[cont]===6 && sino==="Si") {
            contenido="Darío";
            finalizar();
            return;
        }

        if (arreglo[cont]===15 && sino==="Si") {
            contenido="Robin";
            finalizar();
            return;
        }

        if (arreglo[cont]===2 && sino==="Si") {
            contenido="Brissa";
            finalizar();
            return;
        }

        if (arreglo[cont]===4 && sino==="Si") {
            contenido="Abraham";
            finalizar();
            return;
        }

        if (arreglo[cont]===18 && sino==="Si") {
            contenido="Erick";
            finalizar();
            return;
        }

        if (arreglo[cont]===32 && sino==="Si") {
            contenido="Alvaro";
            finalizar();
            return;
        }

        if (arreglo[cont]===5 && sino==="Si") {
            contenido="Josue";
            finalizar();
            return;
        }

        if (arreglo[cont]===30 && sino==="Si") {
            contenido="Paola";
            finalizar();
            return;
        }

        const analizarPersonajes = (personajesICC) => {
            personajesICC.forEach(tilin => {
                Object.keys(tilin).forEach((propiedad, pos) => {
                    if (tilin[propiedad] === sino && pos === arreglo[cont]) {
                        tilin.Acumulado++;
                        console.log(tilin.Acumulado);
                    }
                });
            });

            personajesICC.forEach(tilin => {
                if (tilin.Acumulado == 34) {
                    console.log(tilin.Nombre)
                    contenido += `${tilin.Nombre}<br>`;
                    finalizar();
              }
            });
            cont++;
        }
        analizarPersonajes(tilines);
        if (arreglo.length==42) {
            contenido="Chicos, están bien pendejos, soy el Mauñilio"
            finalizar();
        }
    }
};
