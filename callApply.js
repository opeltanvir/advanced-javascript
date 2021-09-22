const normalPerson = {
    firstName:'Rahim',
    lastName :'Uddin',
    salary : 5000,
    getFullName:function(){
         console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount ,tips ,tax){
        this.salary = this.salary -amount -tips -tax;
        return this.salary;
    }
}

const heroPerson ={
    firstName: 'hero',
    lastName: 'balam',
    salary: 5000
}
const friendlyPerson ={
    firstName: 'hero',
    lastName: 'golam',
    salary: 25000
}

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(200);
// console.log(heroPerson);
// normalPerson.chargeBill.call(heroPerson, 900,100,10);
// console.log(heroPerson.salary);
// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
normalPerson.chargeBill.apply(heroPerson, [3000 , 300,30]);
console.log(heroPerson.salary);



