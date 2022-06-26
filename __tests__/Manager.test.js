const Manager = require("../lib/Manager.js");


describe("Manager Profile", () => {
  it("Checks to see if office number value is retrieved", () => {
    const officeNumber = 10;
    const newManager = new Manager("Olive", 10, "example@gmail.com", officeNumber);
    expect(newManager.officeNumber).toBe(officeNumber);
  });

  it("Checks the getofficeNumber method to return the office number value", () => {
    const officeNumber = 5;
    const newManager = new Manager("Olive", 10, "example@gmail.com", officeNumber);
    expect(newManager.getOfficeNumber()).toEqual(officeNumber);
  });

  it("Checks the role method to return as Manager", () => {
    const returnRole = "Manager";
    const newManager = new Manager("Olive", 10, "example@gmail.com", 5);
    expect(newManager.getRole()).toBe(returnRole);
  });
  
});