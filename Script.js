function logica () {
    let Pregunta1 = document.getElementById("Pregunta1").value;
    let contenido = "";
    let preguntaRandom = parseInt(Math.random()*10);
    console.log(preguntaRandom);
    //let Pregunta2 = document.getElementById("Pregunta2").value;
    //let Pregunta3 = document.getElementById("Pregunta3").value;
    //let Pregunta4 = document.getElementById("Pregunta4").value;
    //let Pregunta5 = document.getElementById("Pregunta5").value;
    //let Pregunta6 = document.getElementById("Pregunta6").value;
    //let Pregunta7 = document.getElementById("Pregunta7").value;
    //let Pregunta8 = document.getElementById("Pregunta8").value;
    //let Pregunta9 = document.getElementById("Pregunta9").value;
    //let Pregunta10 = document.getElementById("Pregunta10").value;  
        
        /*personas.forEach(persona => {
        console.log(`${persona.Nombre} ${persona.Origen}`);
        });
        */
    const API_URL = "personajes.json";
    const leerJson = async() => {
    try {
        const response = await fetch(API_URL);
        const personasICC = await response.json();

        personasICC.forEach(tilin => {
            if (tilin.Origen == Pregunta1) {
                tilin.Acumulado++;
            }
        });
        personasICC.forEach(tilin => {
            if (tilin.Acumulado == 1) {
                contenido += `${tilin.Nombre}<br>`;
            }
        });
        document.getElementById('texto').innerHTML = contenido;
    } catch (error) {
        console.error('Error al cargar o procesar el JSON:', error);
    }
    }
    leerJson();
    };
