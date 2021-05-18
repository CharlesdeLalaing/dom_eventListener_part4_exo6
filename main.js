// > Event Target

// ### 1. Suit scrupuleusement les étapes ci-dessous
// - Récupère la div en passant par son id
// - Créer une function avec comme paramètre "e" (qui symbolise "event") 
// - L'instruction de ta function est de faire un console.log de ton paramêtre e
// - Créer un écouteur d'événement "click" sur ta div et observe ce que ton console log renvoi quand tu clique sur :
//     - la div
//     - le premier h1
//     - le second h1
// - Ouvre ce que tu récupères dans tes console.log et cherche la propriété target, observe ce qu'il contient

// ### 2. Trouve le moyen d'afficher l'élément dans la console.log grace a la propriété target


// ### 3. Change ton console.log par une instruction qui permet de mettre sur l'élément un border red et observe en cliquant sur les éléments de ta page ce qu'il se passe

let exo1 = document.getElementById('content');

function exo2(e) {
    console.log(e);
    // e.target.style.border = 'red solid 1px' ;
}

exo1.addEventListener('click', exo2)


//corretion

let div_content = document.getElementById('content');
function exo6a(e) {
    console.log(e.target);
    e.target.setAttribute('style' , 'border:solid 1px red')
}
div_content.addEventListener('click',exo6a);

// div_content.addEventListener('click',(e)=>{
//     console.log(e.target);
// })
