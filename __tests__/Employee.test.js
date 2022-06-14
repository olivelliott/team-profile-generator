// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


const Manager = require('../lib/employee.js')

test('checks if team managers name was entered', () => {
    const manager = new Manager('profile');
    expect(manager.name).toEqual(expect.any(String));
    // expect(manager.employeeID).toEqual(expect.any(Number));
    // expect(manager.email).toEqual(expect.any(String));
    // expect(manager.officeNumber).toEqual(expect.any(Number));
})

// test('checks if team managers employee id is a number', () => {
//     const ID = new ID('number');
//         expect(ID.employeeID).toEqual(expect.any(Number));
// });


//  * Check that email is an actual email address, not a string