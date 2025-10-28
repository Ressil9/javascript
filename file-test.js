// alert ("Salut JS");

/*let variable = "hello";

console.log (variable);*/


/********  Les variables   *********/
//ancien JS
var unTexte = "voici un texte";
// const = constante donnee qui ne change jamais
const prenom = "Justine" ;

// let est une variable qui peut changer
let UnChiffre = 24;
UnChiffre= 22 ;

// Pour les chaines de caracteres on peut utiliser '' ou "" si o veut utiliser une apostrophe il faut mettre \ avant '
let chaine = 'Je suis une chaine de caractere';
chaine = "Je suis une chaine de caractere";

/*  1ere facon de concatener */
let NouvelleChaine = "La chaine précédentes étaient -->"+ chaine;
/*  2eme facon de concatener     ALTGR+7 ${} */
let AutreConcatenation =  `La chaine précédentes étaient --> ${chaine}` ;

/* permet d'afficher ce qu'on veut dans la console */
console.log(unTexte); 


/* les types de donnees */
let string = "je suis une chaine de caractere";
let number = 24;
let boolean = true ;
// tableau avec des [] 
let array = ["je","suis","47","true"];
// les object toujours avec des {} se compose d'une cle et de sa valeur
let object = {
    prenom :"audrey",
    age : 33,
    ville : "Bordeaux"
}

// les operateurs
console.log (4+5) ;
console.log (4-5) ;
console.log (4/5) ;
console.log (4*5) ;
// Pour le puissance
console.log (4**5) ;


/* Operateur d'affectation */

let total = 2;
total++;
total += 5;
console.log(total);

/* les stuctures de controles */

let x = 2;
let y = 2;

/*if (x > y) {
    alert ("YES x plus grand que y");
    } else if ( x < y) {
    alert ("NON x plus petit que y");
    } else {
    alert ("IlS SONT EGAUX");
    }*/

// test pour savoir si x existe
// if (x) {
//     alert ("x existe") ;
// }

// === tester l'egalite en type et en valeur
if (x === y) {
    //console.log("ils sont egaux");
} else {
    //console.log("ils sont differents");
}

// == tester l'egalite en valeur sans prendre en compte le type
if (x == y) {
    console.log("ils sont egaux");
} else {
    console.log("ils sont differents");
}


// '||' OR, '&&' AND 

if (x < y || x > 1) {
    //console.log("OUI");
}


if (x < y && x > 1) {
    console.log("OUI");
}

/* Les fonctions */


// fonction classique
function faireQuelquechChose () {
    console.log("je fais quelque chose");
    console.log(5+6);
    alert("fonction terminé");
}

// fonction fleché si il y a "=>" alors on a une fonction 
const addition (a,b) =>  {
    console.log(a+b);  
};

// appel de la fonction
faireQuelquechChose();


// La portée des variables

function add2 ( ){
    let a = 4;
    return a+2
}