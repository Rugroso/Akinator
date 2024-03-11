    let numRandom = 0;
    let arreglo = [-1];
    let vf = true;
    while (vf===true) {
        numRandom = 1 + parseInt(Math.random()*10);
        arreglo.forEach(recorrer => {
        if (!(recorrer===numRandom)) {
            vf=false;
            arreglo.push(numRandom);
        }
        });
    }
    console.log(arreglo[1])