function Expense() {

    /**
     * @var {number}
     */
    var _amount = 0;

    /**
     * @var {string} person who paid this expense
     */
    var _paidBy;

    /**
     * @var {date}
     */
    var _date = new Date();

    /**
     * @var {string}
     */
    var _label = "";


    this.getAmount = function getAmount(){
        return _amount;
    }

    this.getPaidBy = function getPaidBy(){
        return _paidBy;
    }

    this.getDate = function getDate(){
        return _date;
    }

    this.getLabel = function getLabel(){
        return _label;
    }


    this.setAmount = function setAmout(amount){

        amount = Number(amount);
        
        if(Number.isNaN(amount) || amount < 0){
            console.log("SetAmout(): paramètre amount invalide" + amount + typeof amount);
            return;
        }

        _amount = amount;
    }

    this.setPaidBy = function setPaidBy(person){
        
        if(typeof person !== 'string'){
            console.log("probleme avec setPaidBy : Person n'est pas une string")
        }

        _paidBy = person;
    }

    this.setDate = function setDate(date){

        if(!(date instanceof Date)){
            console.log("probleme avec setDate : Date n'est pas une instance de Date")
        }

        // Interdire les dates futures
        const now = new Date();
        if(date > now){
            console.log("Veuillez entrer une date valide : erreur setDate")
        }

        _date = date;
    }

    this.setLabel = function setLabel(label){
        
        if(typeof label !== 'string'){
            console.log("probleme avec setLabel")
        }

        _label = label;
    }

}
