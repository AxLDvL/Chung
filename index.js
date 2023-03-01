let variationSystolique = document.querySelector('#varSystolique');
let entreeSystolique = document.querySelector('#entreeSystolique');
let sortieSystolique = document.querySelector('#sortieSystolique');

let varDiastolique = document.querySelector('#varDiastolique');
let entreeDiastolique = document.querySelector('#entreeDiastolique');
let sortieDiastolique = document.querySelector('#sortieDiastolique');

let varPouls = document.querySelector('#varPouls');
let entreePouls= document.querySelector('#entreePouls');
let sortiePouls = document.querySelector('#sortiePouls');

entreeSystolique.oninput = () => variation(entreeSystolique, sortieSystolique,variationSystolique);
sortieSystolique.oninput = () => variation(entreeSystolique, sortieSystolique,variationSystolique);

entreeDiastolique.oninput = () => variation(entreeDiastolique, sortieDiastolique,varDiastolique);
sortieDiastolique.oninput = () => variation(entreeDiastolique, sortieDiastolique,varDiastolique);

entreePouls.oninput = () => variation(entreePouls, sortiePouls,varPouls);
sortiePouls.oninput = () => variation(entreePouls, sortiePouls,varPouls);

const variation = (entree, sortie , e) => {
    if (entree.value && sortie.value ){
        let result =Math.round(((sortie.value - entree.value)/entree.value)*100 * 100) /100;
        !isNaN(result) ? e.innerHTML = String(result) + "%": e.innerHTML = "erreur";
       Math.abs(result) <40? e.className = "green" : e.className = "red";
    }else e.innerHTML ="";
}
