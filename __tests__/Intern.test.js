const Intern = require('../lib/Intern')

describe("Intern Profile", () => {

  it("Checks to see if school value is retrieved", () => {
    const school = "UNC";
    const newIntern = new Intern("Olive", 10, "example@gmail.com", school);
    expect(newIntern.school).toBe(school);
  });

  it("Checks the getSchool method to return the school value", () => {
    const school = "UNC";
    const newIntern = new Intern("Olive", 10, "example@gmail.com", school);
    expect(newIntern.getSchool()).toEqual(school);
  });

  it("Checks the role method to return as Intern", () => {
    const returnRole = "Intern";
    const newIntern = new Intern("Olive", 10, "example@gmail.com", "UNC");
    expect(newIntern.getRole()).toBe(returnRole);
  });
  
});

