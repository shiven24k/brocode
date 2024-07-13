class People{
    constructor(name, age , ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
        
    }
}
class Address {
    constructor(city, state, country){
        this.city = city;
        this.state = state;
        this.country = country;
    }
}    
const person1 = new People("John", 25, "Saints Peterburg","New york","USA");
const person2 = new People("Doe", 30, "White Ally","New Jersy","USA");

console.log(person2.address.city);