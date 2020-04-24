function Application() {
  /**
   * @var {Person[]}
   */
  const personsList = [];

  const expensesList = [];

  /**
   * @returns {boolean} true if the name is successfully registered,
   *                    false is the name is aldreay taken
   */
  this.registerPerson = function registerPerson(name) {
    // validation de l'unicité du name
    for (const person of personsList) {
      if (person.getName() === name) {
        console.warn(`Le nom ${name} est déja utilisé.`);
        return false;
      }
    }

    personsList.push(new Person(name));
    return true;
  };

  this.getPersonsCount = function getPersonsCount() {};
  this.getExpensesCount = function getExpensesCount() {};
  this.getExpensesTotalAmount = function getExpensesTotalAmount() {};

  this.getExpensesList = function getExpensesList(personName) {};
}
