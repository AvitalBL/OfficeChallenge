//write your code here to make the tests pass


class Document {
    constructor(EmployeeName) {
        this._EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this._name = name;
    }
    work() {

    }
}

class Manager {
    constructor(name) {
        this._name = name;
        this._manageEmployees = []
    }
    hireEmployee(employeeName){
        this._manageEmployees.push(employeeName)
    }
    askEmployeesToWork(){
        
    }

    

class Cleaner {
    constructor(name) {
        this._name = name;
    }
    clean() {
        console.log("Clean");
    }
}

class Office {

}