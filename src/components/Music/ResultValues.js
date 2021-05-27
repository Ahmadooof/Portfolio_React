export default class Re {
    constructor(age, gender) {
        this.age = age
        this.gender = gender
    }
    get age() {
        return this.age;
    }
    get gender() {
        return this.gender;
    }
    set age(value) {
        this.age = value
    }
};
