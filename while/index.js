let isLogged=false;
let username = "Shiven Kashyap";
let password = "123456";

while(!isLogged){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username === "Shiven Kashyap" && password === "123456"){
        isLogged = true;
    }
    else{
        alert("Invalid username or password");
    }
}