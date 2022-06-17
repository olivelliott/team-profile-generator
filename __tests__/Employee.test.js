// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team



const Employee = require('../lib/Employee')

describe('EmployeeProfile', () => {
    const employee = new Employee('Olive', 1, 'example@gmail.com');

    describe('Name', () => {
        it("checks if team manager's name is a string", () => {
            expect(employee.name).toEqual(expect.any(String));
        });
    });

    describe('EmployeeId', () => {
        it("checks if employee id is a number", () => {
            expect(employee.id).toEqual(expect.any(Number))
        })
    });

    describe('Email', () => {
        it('checks if email is a string', () => {
            expect(employee.email).toEqual(expect.stringContaining(employee.email));
        })
    });

    // describe('EmployeeProfile', () => {
    //     it('checks if employee information is created into an object', () => {
    //         expect(employee.profile).toEqual(
    //             expect.arrayContaining([expect.any(Object)])
    //         )
    //     })
    // });
});