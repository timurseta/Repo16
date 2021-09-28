// Only change code below this line
class Microsoft {
    constructor(name){
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        return this._name = newName;
    }
    occupation () {
        return `${this._name} is a philanthropist!`;
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(age);
        this._age = age;
        this._name = name;
    }
    studentAge() {
        return `${this._name} is ${this._age}`;
    }
}
let henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
let elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());

// Only change code above this line

module.exports = {
    Microsoft,
    Facebook
}