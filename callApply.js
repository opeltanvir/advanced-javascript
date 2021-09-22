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

const heroPerson ={
    firstName: 'hero',
    lastName: 'balam',
    salary: 2500
}
const friendlyPerson ={
    firstName: 'hero',
    lastName: 'golam',
    salary: 2500
}

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(200);


