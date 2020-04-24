// Manipulation du DOM de mon application

const myApp = new Application();

document.addEventListener("DOMContentLoaded", function () {
  // Je selectionne l'ID du form qui m'intéresse
  const $personForm = document.querySelector("#form-add-people");

  $personForm.addEventListener("submit", function (event) {
    event.preventDefault(); // ici, ca empeche le rechargement de la page

    // On stocke les données du formulaire HTML (this), dans un objet
    // @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const data = new FormData(this);

    // Je stocke les données de mon input ayant le name='' -> "Pseudo"
    const pseudo = data.get("Pseudo");

    // On essaye d'enregistrer ce pseudo dans l'app (couche modele)
    if (myApp.registerPerson(pseudo) === true) {
      alert(`${pseudo} à bien été enrgistré`);
    } else {
      alert(`${pseudo} est déja uutilisé`);
    } 
  });

  // Quand je clique sur ajouter une dépense, ajouter le html d'une dépense avec les données du formulaire
  const $addExpenseForm = document.querySelector("#form-add-expense");

  $addExpenseForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const data = new FormData(this);

    // Je stocke les données du formulaire
    const user = data.get("add-expense-user");
    const statut = data.get("add-expense-statut");
    const date = data.get("add-expense-date");
    const label = data.get("add-expense-label");
    const amount = data.get("add-expense-amount");

    console.log(user, statut, date, label);

    var $expensesList = document.querySelector(".list-group");

    var $li = document.createElement("li");
    $li.setAttribute('class', 'list-group-item expense-item')
    $li.innerHTML = `
          <div class="l-user-infos">
            <div class="avatar"></div>
            <div class="user-info">
              <p class="font-weight-bold text-dark username">${user}</p>
              <p class="expense-date text-muted font-weight-light">${date}</p>
            </div>
          </div>

          <p class="expense-name"><span class="badge badge-pill badge-success">${statut}</span> Des bières empoisonnées pour l'apéro.</p>
          
          <div class="l-expense-info">
            <p class="expense-amount font-weight-bold text-danger">${amount}</p>
            <div class="l-expense-edit">
              <a href="#" class="btn-edit-expense" data-toggle="modal" data-target="#modal-edit-expense">
                <svg class="bi bi-pencil" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="#" class="text-danger btn-delete-expense">
                <svg class="bi bi-trash" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
    `;

    console.log($li)
    $expensesList.appendChild($li);

  });
});
