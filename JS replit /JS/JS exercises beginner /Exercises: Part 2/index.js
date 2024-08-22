const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));


console.log(getFileExtension('index.klajhs.dhajdhsk.ahd'));




//znaci, gore sam deklarirao funkciju getFileExtension u koju ulazi string vrijednost (str) i funkcija radi sjedece = >
// => string cemo sliceat (str.slice()) a slice metoda uzima 2 parametra. prvi je start a drugi do kud zelimo rascjepat nasu string vrijednost

// za pocetnu vrijednost stavljamo . , odnosno stavljamo sve od ZADNJE tocke na dalje, to definiramo sa ' lastIndexOf('.')  '