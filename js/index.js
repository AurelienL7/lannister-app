const myApp = new Application();

document.addEventListener("DOMContentLoaded", function () {
  const $personForm = document.querySelector("#form-add-people");

  $personForm.addEventListener("submit", function (event) {
    event.preventDefault(); // ici, ca empeche le rechargement de la page

    // On stocke les données du formulaire HTML (this), dans un objet
    // @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const data = new FormData(this);

    // On extrait la valeur qui nous intéresse (ici le champ "person-name")
    const pseudo = data.get("Pseudo");

    // On essaye d'enregistrer ce pseudo dans l'app (couche modele)
    if (myApp.registerPerson(pseudo) === true) {
      alert(`${pseudo} à bien été enrgistré`);
    } else {
      alert(`${pseudo} est déja uutilisé`);
    }
  });
});
