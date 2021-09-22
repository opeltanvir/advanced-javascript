const normalPerson = {
    firstName:'Rahim',
    lastName :'Uddin',
    salary : 2000,
    getFullName:function(){
         console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary -amount;
        return this.salary;
    }
}
normalPerson.chargeBill(150);

console.log(normalPerson.salary);

