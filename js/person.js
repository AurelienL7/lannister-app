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

  this.getName = function getName() {
    return name;
  };

  this.setName = function setName(newName) {
    if (typeof newName !== "string") {
      console.warn("newName doit être une chaine de caractères");
      return;
    }

    newName = newName.trim();
    if (newName === "") {
      console.warn("newName ne doit pas être vide");
      return;
    }

    name = newName;
  };

  // -----------------------------------------------------------------------------
  // Instantiation
  // -----------------------------------------------------------------------------

  if (newName) {
    this.setName(newName);
  }
}
