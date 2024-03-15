let arreglo = [];
let sino = "";
let talvez=0;
let cont=0;
let tilines = [];
let contenido="";
let numRandom=0;
let preguntaRandom="";
let mog = new Audio('Mog.mp3');
let mogBool = false;

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
    sino="";
    logica();
}

function buttonTalvez() {
    let numRandomButton = 0;
    numRandomButton =  1 + parseInt(Math.random()*2);
    if (numRandomButton===1) {
        sino="Si";
    }
    else {
        sino="";
    }
    talvez++;
    logica();
}


function cargar() {
    for (let i = 1; i <=53; i++) {
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
    numRandom = 1 + parseInt(Math.random()*53);
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
    for (let i = 1; i <= 53; i++) {
        document.getElementById(`Pregunta${i}`).style.display = 'none';
    }
    if (mogBool) {
        setTimeout(() => {
            document.getElementById('Texto').innerHTML = contenido;
            return;
        }, 17500);
    }
    else {
        document.getElementById('Texto').innerHTML = contenido;
    }
}

function generarRandom() {
    let vf = true;
    let encontrar = false;
    if (arreglo.length<53) {
        while (vf===true) {
            encontrar=false;
            numRandom = 1 + parseInt(Math.random()*53);
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
        preguntaRandom = `Pregunta${numRandom}`;
        document.getElementById(preguntaRandom).style.display = 'block';
    }
}

function logica () {
    let contPreguntasParecidas=0;
    contenido = "";

    if (arreglo[cont]===41 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [53];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=1;
    }

    if (arreglo[cont]===53 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [41];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=1;
    }

    if (arreglo[cont]===31 && sino==="Si") {
        console.log("Se ha realizado esta pregunta");
        let valoraux=arreglo[cont];
        let arregloaux = [1, 32, 6, 9, 10, 15, 18, 30, 33, 38, 39, 3];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=12;
    }
    
    if (arreglo[cont]===37 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [38, 39];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=2;
    }

    if (arreglo[cont]===38 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [37, 39];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=2;
    }

    if (arreglo[cont]===39 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [37, 38];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=2;
    }

    if (arreglo[cont]===21 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [22, 23];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=2;
    }

    if (arreglo[cont]===22 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [21, 23];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=2;
    }

    if (arreglo[cont]===23 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [21, 22];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=2;
    }

    if (arreglo[cont]===25 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [26, 2, 30, 39];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=4;
    }

    if (arreglo[cont]===26 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [25, 3, 4, 5, 6, 15, 18, 20, 23, 32, 33, 36, 38, 40];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=14;
    }

    if (arreglo[cont]===1 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [2, 3, 4, 5];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=4;
    }

    if (arreglo[cont]===3 && sino==="Si") {
        let valoraux=arreglo[cont];
        let arregloaux = [1, 2, 4, 5, 6, 8, 10, 12, 13, 14, 16, 18, 23, 24, 26, 29, 30, 31, 32, 36, 38, 39, 40];
        arregloaux.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
              arreglo.splice(indice, 1);
            }
          });
        arreglo.push(...arregloaux);
        arreglo.forEach((recorrer, indice) => {
            if (recorrer===valoraux) {
                cont=indice;
            }
        });
        contPreguntasParecidas=23;
    }

    if (arreglo.length<=53) {
        for (let i = 1; i <=53; i++) {
            document.getElementById(`Pregunta${i}`).style.display = 'none';
        }
        numRandom = 0;
        generarRandom();
        console.log(`Valor dentro del arreglo: ${arreglo[cont]}`);
        
        if (arreglo[cont]===6 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Dario${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Dario <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            mog.play();
            mogBool = true;
            finalizar();
            return;
        }

        if (arreglo[cont]===15 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Robin${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Robin <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===2 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Brissa${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Brissa <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===4 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Abraham${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Abraham <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===18 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Erick${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Erick <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===32 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Alvaro${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Alvaro <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===5 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Josue${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Josue <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===30 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Paola${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Paola <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===39 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Fernanda${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Fernanda <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===49 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Acero${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Acero <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        if (arreglo[cont]===45 && sino==="Si") {
            let imagenNum = 1 + parseInt(Math.random()*2);
            let imagen= `imagenes/Oscar${imagenNum}.jpg`
            console.log(imagen);
            contenido=`<h4> Tu personaje es: <br> Oscar <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
            finalizar();
            return;
        }

        const analizarPersonajes = (personajesICC) => {
            personajesICC.forEach(tilin => {
                Object.keys(tilin).forEach((propiedad, pos) => {
                    if (tilin[propiedad] === sino && pos === arreglo[cont]) {
                        tilin.Acumulado++;
                        console.log(tilin.Nombre);
                    }
                });
            });

            personajesICC.forEach(tilin => {
                if (tilin.Acumulado == 32) {
                    console.log(tilin.Nombre)
                    let imagenNum = 1 + parseInt(Math.random()*2);
                    let imagen= `${tilin.Nombre}${imagenNum}.jpg`
                    contenido+=`${tilin.Nombre} <br> ${imagen}<br>`;
                    finalizar();
              }
            });

            cont = cont + contPreguntasParecidas + 1;
            console.log(`Valor de cont ${cont}`)
            arreglo.forEach(recorrer => {
                console.log(`Valores del arreglo: ${recorrer}`)
            })
        }

        analizarPersonajes(tilines);
        let max=0;
        if (arreglo.length>=53) {
            tilines.forEach(tilin => {
                if (tilin.Acumulado>=max) {
                    max=tilin.Acumulado;
                }
            });

            tilines.forEach(tilin => {
                if (tilin.Acumulado==max) {
                    console.log(tilin.Acumulado);
                    console.log(tilin.Nombre);
                    let imagenNum = 1 + parseInt(Math.random()*2);
                    let imagen= `imagenes/${tilin.Nombre}${imagenNum}.jpg`
                    console.log(imagen);
                    contenido+=`<h4> Tu personaje es: <br>${tilin.Nombre} <br> <img src = "${imagen}" width = "200px" height = "auto" ><br> <h4>`;
                }
            });

            finalizar();
        }
        numRandom=0;
        preguntaRandom="";
    }
};
