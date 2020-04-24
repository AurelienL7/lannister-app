function Person(newName) {
  // -----------------------------------------------------------------------------
  // Déclaration des propriétés
  // -----------------------------------------------------------------------------

  /**
   * @private
   */
  var name;

  // -----------------------------------------------------------------------------
  // Déclaration des méthodes
  // -----------------------------------------------------------------------------

  // Fonction "getter" publique permettant de récupérer le nom d'une personne
  this.getName = function getName() {
    return name;
  };

  // Fonction "setter" publique permettant de définir $name 
  this.setName = function setName(newName) {
    // doit etre de type "string"
    if (typeof newName !== "string") {
      console.warn("newName doit être une chaine de caractères");
      return;
    }

    newName = newName.trim();
    // Ne doit pas etre une string vide
    if (newName === "") {
      console.warn("newName ne doit pas être vide");
      return;
    }

    name = newName;
  };

  // -----------------------------------------------------------------------------
  // Instantiation
  // -----------------------------------------------------------------------------

  // pour pouvoir définir le nom de la personne directement à la construction
  if (newName) {
    this.setName(newName);
  }
}
