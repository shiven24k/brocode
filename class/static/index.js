class user {
    static count = 0;
    constructor (username){
       this.username = username;
       user.count++;
    }
    static getUserCount(){
        console.log(`The number of users are ${user.count}`)
    }
}
const user1 = new user("shiven");
const user2 = new user("shiven");
const user3 = new user("shiven");
console.log(user1.username);
user.getUserCount();