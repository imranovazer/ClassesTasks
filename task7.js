class Developer {
    constructor(fullName, age, position = 'Junior') {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    code() {
        // empty method body
    }

    learnNewTechnology(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log('Junior developer is writing code...');
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
        console.log('Middle developer is writing code...');
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Senior');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        console.log('Senior developer is writing code...');
    }
}

const juniorDeveloper = new JuniorDeveloper('Anastasia', 20);
const middleDeveloper = new MiddleDeveloper('Igor', 25);
const seniorDeveloper = new SeniorDeveloper('Maxim', 30);

juniorDeveloper.code(); // Junior developer is writing code...
middleDeveloper.code(); // Middle developer is writing code...
seniorDeveloper.code(); // Senior developer is writing code...

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position); // 'Anastasia', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); // 'Igor', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); // 'Maxim', 30, 'Senior'
