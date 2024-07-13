const person1 = {
    username : "shiven24k",
    age : 22,
    sayHello : function(){console.log(`Hello, ${this.username}`)},
    sayAge : function(){console.log(`You are ${this.age} years old`)} 

}
person1.sayHello(); 
person1.sayAge();