const fs = require('fs');
fs.readFile('personajes.json', 'utf8', (error, data) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
      return;
    }
    
    const personasICC = JSON.parse(data);
    
    const origens = "San Luis";
    
    /*personas.forEach(persona => {
        console.log(`${persona.Nombre} ${persona.Origen}`);
    });
    */
   
    personasICC.forEach(tilin => {
        if (tilin.Origen == "Tijuana") {
            tilin.Acumulado++;
        }
        if (tilin.Acumulado == 1) {
            console.log(tilin);
        }
    });    
  });