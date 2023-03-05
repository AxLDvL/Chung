let variationSystolique = document.querySelector('#varSystolique');
let entreeSystolique = document.querySelector('#entreeSystolique');
let sortieSystolique = document.querySelector('#sortieSystolique');

let varDiastolique = document.querySelector('#varDiastolique');
let entreeDiastolique = document.querySelector('#entreeDiastolique');
let sortieDiastolique = document.querySelector('#sortieDiastolique');

let varPouls = document.querySelector('#varPouls');
let entreePouls= document.querySelector('#entreePouls');
let sortiePouls = document.querySelector('#sortiePouls');

let refreshButton = document.querySelector('#refresh')

entreeSystolique.oninput = () => variation(entreeSystolique, sortieSystolique,variationSystolique);
sortieSystolique.oninput = () => variation(entreeSystolique, sortieSystolique,variationSystolique);

entreeDiastolique.oninput = () => variation(entreeDiastolique, sortieDiastolique,varDiastolique);
sortieDiastolique.oninput = () => variation(entreeDiastolique, sortieDiastolique,varDiastolique);

entreePouls.oninput = () => variation(entreePouls, sortiePouls,varPouls);
sortiePouls.oninput = () => variation(entreePouls, sortiePouls,varPouls);

refreshButton.onclick = () => refresh();

const variation = (entree, sortie , e) => {
    if (entree.value && sortie.value ){
        let result =Math.round(((sortie.value - entree.value)/entree.value)*100 * 100) /100;
        !isNaN(result) ? e.innerHTML = String(result) + "%": e.innerHTML = "erreur";
        (Math.abs(result) <20)? e.className = "green": (Math.abs(result) <40)? e.className = "orange": e.className = "red"

    }else e.innerHTML ="";
}
const refresh = () => {
    const inputs =[
        entreeSystolique,
        sortieSystolique,
        entreeDiastolique,
        sortieDiastolique,
        entreePouls,
        sortiePouls
        ]
    const variations = [
        variationSystolique,
        varDiastolique,
        varPouls
    ]
    inputs.forEach (cell => cell.value = "");
    variations.forEach(cell => cell.innerHTML = "");


}