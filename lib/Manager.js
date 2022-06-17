const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email)
        this.officeNumber = officeNumber
    };

    getOfficeNumber() {
        return this.officeNumber;
    }

}

// function ID(employeeID) {
//     this.employeeID = employeeID;

//     if (this.employeeID === 5) {
//         return true;
//     } else {
//         return false;
//     }
// }

    // this.employeeID = employeeID;
    // this.email = email;
    // this.officeNumber = officeNumber;

module.exports = Manager;
