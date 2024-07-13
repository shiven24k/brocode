class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
           super(name,age);   
           this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
     
}
class Fish extends Animal{
    constructor(name,age,swim){
        super(name,age);
        this.swim = swim;
 }
 swim(){
  console.log(`This ${this.name} can run`);
  super.move(this.swim);
}
}
class Hwak extends Animal{
    constructor(name,age,fly){
        super(name,age);
        this.fly = fly;
 }
 fly(){
  console.log(`This ${this.name} can run`);
  super.move(this.fly);
}
}
const rabbit = new Rabbit("Rabbit",3,22);
const fish = new Fish("Fish",3,43);
const hwak = new Hwak("Hwak",5,42);
console.log(rabbit.name);
rabbit.run();