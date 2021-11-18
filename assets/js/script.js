const arme = ["Pierre", "Feuille", "Ciseaux"];
// console.log(arme);
let robot = document.getElementById("robot");
let Pierre = document.getElementById("Pierre");
let Feuille = document.getElementById("Feuille");
let Ciseaux = document.getElementById("Ciseaux");
let fight = document.getElementById("fight");
let choixArmes = document.getElementById("general");
let vous = document.getElementById("vous");
let result = document.getElementById("result");
let scoreJoueur = document.getElementById("scoreJoueur");
let scoreIa = document.getElementById("scoreIa");
let pointJoueur = 0;
let pointIa = 0;
let general = "";
fight.innerHTML = `<button class="ms-5 mt-5 btn btn-outline-danger col-2" disabled>Fight !</button>`;

// let armeAlea = arme[choice(0, arme.length)];

function choice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(choice(0, arme.length));

choixArmes.addEventListener("click", (e) => {
  if (e.target.nodeName == "IMG") {
    arme.forEach((element) => {
      // if (element !== e.target.innerText) { // permet de griser seulement 2 ligne dans on selectionne un bouton
      //   element = element.toLowerCase();
      // document.getElementById(element.toLowerCase()).disabled = true;
      // }
      fight.innerHTML = `<button class="ms-5 mt-5 btn btn-outline-danger col-2">Fight !</button>`;
    });
    general = e.target.alt;
    // console.log(e); // permet d'aller identifer le target, ici alt nous permet de recuperer les valeurs quand on choisit un action
    console.log("Joueur : " + general);
    vous.innerHTML = "Vous : " + general;
  }
});

fight.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    let armeAlea = arme[choice(0, arme.length)];
    console.log("Robot : " + armeAlea);
    robot.innerHTML = "Bot : " + armeAlea;
    fight.disabled = true; //désactive le bouton fight

    let resultat = "";
    // console.log("General : " + general);
    // console.log("Alea : " + armeAlea);
    if (general == armeAlea) {
      console.log("égalité");
      resultat = "Egalite !";
    }

    if (general == "Pierre" && armeAlea == "Feuille") {
      console.log("perdu !");
      resultat = "Perdu !";
      pointIa++;
      // scoreIa.innerHTML = "Score Ia = " + pointIa;
    }
    if (general == "Pierre" && armeAlea == "Ciseaux") {
      console.log("gagné !");
      resultat = "Gagné !";
      pointJoueur++;
      // scoreJoueur.innerHTML = "Score Joueur = " + pointJoueur;
    }
    if (general == "Feuille" && armeAlea == "Pierre") {
      console.log("gagné !");
      resultat = "Gagné !";
      pointJoueur++;
      // scoreJoueur.innerHTML = "Score Joueur = " + pointJoueur;
    }
    if (general == "Feuille" && armeAlea == "Ciseaux") {
      console.log("perdu !");
      resultat = "Perdu !";
      pointIa++;
      // scoreIa.innerHTML = "Score Ia = " + pointIa;
    }
    if (general == "Ciseaux" && armeAlea == "Pierre") {
      console.log("perdu !");
      resultat = "Perdu !";
      pointIa++;
      // scoreIa.innerHTML = "Score Ia = " + pointIa;
    }
    if (general == "Ciseaux" && armeAlea == "Feuille") {
      // console.log("gagné !");
      resultat = "Gagné !";
      pointJoueur++;
      // scoreJoueur.innerHTML = "Score Joueur = " + pointJoueur;
    }

    choixArmes.innerHTML = `<button class="m-2 btn btn-outline-dark col-2" id="pierre" disabled><img src="assets/img/pierre.PNG"></button>
    <button class="m-2 btn btn-outline-dark col-2" id="feuille" disabled><img src="assets/img/feuille.PNG"></button>
    <button class="m-2 btn btn-outline-dark col-2" id="ciseaux" disabled><img src="assets/img/Ciseaux.PNG"></button>`;
    result.innerHTML = resultat;
    scoreIa.innerHTML = "Score Bot = " + pointIa;
    scoreJoueur.innerHTML = "Score Joueur = " + pointJoueur;
    fight.innerHTML = `<button class="ms-5 mt-5 btn btn-outline-danger col-2" disabled>Fight !</button>`;
    console.log(pointJoueur);
  }
});

function replay() {
  vous.innerHTML = "Vous : ";
  robot.innerHTML = "Bot : ";
  result.innerHTML = "";
  choixArmes.innerHTML = `<button class="m-2 btn btn-outline-success col-2" id="pierre"><img src="assets/img/pierre.PNG"
  alt="Pierre"></button>
<button class="m-2 pe-2 btn btn-outline-success col-2" id="feuille"><img src="assets/img/feuille.PNG"
  alt="Feuille"></button>
<button class="m-2 btn btn-outline-success col-2" id="ciseaux"><img src="assets/img/Ciseaux.PNG"
  alt="Ciseaux"></button>`;
  fight.innerHTML = `<button class="ms-5 mt-5 btn btn-outline-danger col-2"disabled>Fight !</button>`;
}
