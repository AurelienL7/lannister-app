// Représente mon application dans son entièreté

function Application() {
  /**
   * @var {Person[]}
   */
  const personsList = [];

  const expensesList = [];

  /**
   * Fonction qui push le pseudo enregistré dans personsList[]
   * @returns {boolean} true if the name is successfully registered,
   *                    false is the name is aldreay taken
  */
  this.registerPerson = function registerPerson(name) {
    // validation de l'unicité du name
    for (const person of personsList) {
      if (person.getName() === name) {
        console.log(`Le nom ${name} est déja utilisé.`);
        return false;
      }
    }

    personsList.push(new Person(name));
    return true;
  };

  function findPersonByName(name){
    for (const person of personsList){
      if(person.getName() === name){
        return person;
      }
    }

    return null;
  }

  this.getPersonsCount = function getPersonsCount() {
    return personsList.length;
  };

  this.getExpensesCount = function getExpensesCount() {
    return console.log(expensesList.length);
  };

  this.getExpensesTotalAmount = function getExpensesTotalAmount() {
    var total = 0;
    for (const expense of expensesList){
      total += expense.getAmount();
    }
    return total;
  };

  this.getTotalPerPerson = function(){
    return this.getExpensesTotalAmount() / this.getPersonsCount();
  }

  this.getExpenseList = function getExpenseList(){
    return expensesList.slice(); // To do : deep copy
  }

  this.addExpense = function addExpense(userName, date, label, amount) {
    
    
    var person = findPersonByName(userName);
    
    if(person === null){
      console.log("la personne n'existe pas")
      return;
    }
    
    var expense = new Expense();

    expense.setPaidBy(userName);
    expense.setDate(date || new Date());
    expense.setLabel(label);
    expense.setAmount(amount);


    expensesList.push(expense);
  };
}
