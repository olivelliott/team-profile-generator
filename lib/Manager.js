const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '', role = "Manager") {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = role;
    };

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
