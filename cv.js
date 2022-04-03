var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("YATTARA OUSMANE")
  .pauseFor(200)
  .deleteAll()
  .typeString("DEVELOPPEUR WEB EN ALTERNANCE")
  .pauseFor(200)
  .deleteAll()
  .typeString("Rythme, 1 jour à l'ecole et 4 jours en entreprise")
  .pauseFor(200)
  .start();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

