class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.employeeId = id || Math.floor(Math.random() * 30 + 10);
        this.email = email;
        this.officeNumber = officeNumber
    };

    getName() {
        if (this.name === ' ') {
            return `Name: ${this.name}`;
        } else {
            console.log('Please enter a name');
            return false;
        }
    };

    getId() {
        // const ID = 
        if (this.employeeId === Number) {
            // this.value = Math.floor(Math.random() * 10 + 3)
            return `EmployeeId: ${this.employeeId}`;
        } else {
            return false;
        }
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
