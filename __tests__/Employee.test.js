const Employee = require('../lib/Employee')

describe('EmployeeProfile', () => {

    describe('New employee profile object', () => {
        it("tests if the new employee function will generate a new employee object", () => {
            const newEmployee = new Employee();
            expect(typeof(newEmployee)).toBe("object");
        });
    });

    describe('Test name retrieval', () => {
        it('checks if the name is retrieved and placed into the name constructor', () => {
            const name = 'Olive';
            const newEmployee = new Employee(name);
            expect(newEmployee.name).toBe(name);
        })
    })

    describe('Test employee ID retrieval', () => {
        it("checks if employee id is retrieved and placed into ID constructor", () => {
            const employeeId = 2;
            const newEmployee = new Employee('Olive', employeeId)
            expect(newEmployee.id).toBe(employeeId);
        })
    });

    describe('Test employee email retrieval', () => {
        it('checks if email is retrieved and placed into email constructor', () => {
            const email = "example@gmail.com"
            const newEmployee = new Employee('Olive', 2, email)
            expect(newEmployee.email).toBe(email);
        })
    });
});

describe('Employee Profile Methods', () => {
    
    describe('getName method', () => {
        it('Returns the name of the employee through getName method', () => {
            const testName = 'Olive';
            const newEmployee = new Employee(testName);
            expect(newEmployee.getName()).toBe(testName);
        })
    });

    describe('getId method', () => {
        it('Returns the id of the employee through getName method', () => {
            const testId = 2;
            const newEmployee = new Employee('Olive', testId);
            expect(newEmployee.getId()).toBe(testId);
        })
    });

    describe('getEmail method', () => {
        it('Returns the email of the employee through getEmail method', () => {
            const testEmail = 'example@gmail.com';
            const newEmployee = new Employee('Olive', 2, testEmail);
            expect(newEmployee.getEmail()).toBe(testEmail);
        })
    })

    describe("getRole method", () => {
      it("Returns the role of the employee through getRole method", () => {
        const testRole = "Employee";
        const newEmployee = new Employee("Olive", 2, testRole);
        expect(newEmployee.getRole()).toBe(testRole);
      });
    });
});