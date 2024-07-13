class product {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Name of the product is : ${this.name}`);
        console.log(`Price of the produxt is ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price +(this.price * salesTax);
    }
}
salesTax = 0.05;
const product1 = new product("Shirt",200);
const product2 = new product("Pant",240);
const product3 = new product("Shoes",300);
const product4 = new product("Jacket",400);

product1.displayProduct();
const total = product1.calculateTotal(salesTax  );
console.log(total);