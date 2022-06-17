const Manager = require("../lib/Manager.js");


describe('OfficeNumber', () => {
    const manager = new Manager('Olive', 10, 'example@gmail.com', 123);

    it('checks if the office number is a number', () => {
        expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    })
});



//   expect(manager.employeeID).toEqual(expect.any(Number));
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.officeNumber).toEqual(expect.any(Number));



// test('checks if team managers employee id is a number', () => {
//     const ID = new ID('number');
//         expect(ID.employeeID).toEqual(expect.any(Number));
// });

    // describe("Name", () => {
    //   it("checks if team managers name was entered", () => {
    //     expect(manager.name).toEqual(expect.any(String));
    //   });
    // });

    // describe("employeeId", () => {
    //   it("checks if employee id was entered", () => {
    //     expect(manager.employeeId).toEqual(expect.any(Number));
    //   });
    // });
