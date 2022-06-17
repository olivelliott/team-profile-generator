const Manager = require("../lib/Manager.js");


describe('OfficeNumber', () => {
    const manager = new Manager('Olive', 10, 'example@gmail.com', 123);

    it('checks if the office number is a number', () => {
        expect(manager.officeNumber).toEqual(expect.any(Number));
    })
});