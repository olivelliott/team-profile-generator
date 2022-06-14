function manager(name) {
    this.name = name;

    if (this.name === '') {
        return true;
    } else {
        return false;
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

module.exports = manager;
