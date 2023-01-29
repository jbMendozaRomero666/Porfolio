import {
    XRapidAPIKey,
    Host
} from "../setup/llaves.js";

document.addEventListener('DOMContentLoaded', function () {
    iniarApp();
});

function iniarApp() {
    consultarApi();
}

async function consultarApi() {
    const url = 'https://papi-pornstarsapi.p.rapidapi.com/pornstars/';
    try {
        const response = await fetch(
            url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': XRapidAPIKey,
                    'X-RapidAPI-Host': Host
                }
            });
        const data = await response.json(response);
        mostrarApi(data);
        // console.log(data);
    } catch (error) {
        console.log(error);
    }

}

function mostrarApi(data){
   
    const {
       results
    } = data;

    results.forEach(resul => {
        const{
          images,
          name
        } = resul;

        console.log(resul);
        const div = document.createElement('DIV');
        div.classList.add('card');
        const divd = document.createElement('DIV');
        divd.classList.add('card-body');

        divd.innerHTML = `
         ${name}
         <img src="${images[1].image}
         " alt="">
        `;
        div.appendChild(divd);


        const container = document.querySelector('.container');
        container.appendChild(div);

    });

    
}