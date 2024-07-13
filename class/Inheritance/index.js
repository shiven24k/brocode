class Animal{
    alive = true
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends Animal{
     name = "Rabbit"
      talk(){
        console.log("Can't talk")
     }
}
class Fish extends Animal{
    name = "Fish"
}
const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.sleep();
rabbit.talk();