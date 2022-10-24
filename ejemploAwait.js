const axios = require("axios");

console.log("Hello World");

let requestConfig1 = {
    url: "https://catfact.ninja/fact",
};

let q = "Bogota,col";
let apiKey = "8e6330a78aa20b41b54f3fcaa3e9994f";
let completeUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    q +
    "&appid=" +
    apiKey;
console.log(completeUrl);
let requestConfig2 = {
    url: completeUrl,
    method: "get",
};

async function mainProgram() {
    try {
        let response = await axios(requestConfig1);
        console.log(response.data);
        if (response.data.length % 2 == 0) {
            //hago la segunda peticion
            let response2 = await axios(requestConfig2);
            console.log(
                "La temperatura en Bogota es: " +
                    (response2.data.main.temp - 273.15) +
                    " grados centigrados"
            );
        } else {
            console.log("Numero impar");
        }
    } catch (error) {
        console.log(error);
    }
}

mainProgram();

console.log("Finalizando programa");

//Se nos pide que obtengamos un hecho de un gato desde
//la api 1: https://catfact.ninja/fact
//si el numero  de caracteres del mensaje de la api 1
//es par se debe de realizar una peticion preguntando por
//la temperatura de bogota a la api 2: https://api.openweathermap.org
