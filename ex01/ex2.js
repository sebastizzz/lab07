function sumaCifrelor(numar) {
    let suma = 0;
    let numarStr = numar.toString();

    for (let i = 0; i < numarStr.length; i++) {
        suma += parseInt(numarStr[i]);
    }
    return suma;
}

let numar = 1234;
console.log("Suma cifrelor lui " + numar + " este " + sumaCifrelor(numar));

