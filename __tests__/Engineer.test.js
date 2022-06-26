const Engineer = require('../lib/Engineer')

describe("Engineer Profile", () => {

  it("Checks to see if github value is retrieved", () => {
    const github = 'Olivelliott';
    const newEngineer = new Engineer('Olive', 10, 'example@gmail.com', github);
    expect(newEngineer.github).toBe(github);
  });

  it("Checks the getGitHub method to return the github value", () => {
    const github = "Olivelliott";
    const newEngineer = new Engineer("Olive", 10, "example@gmail.com", github);
    expect(newEngineer.getGithub()).toEqual(github);
  });

  it('Checks the role method to return as Engineer', () => {
    const returnRole = "Engineer";
    const newEngineer = new Engineer('Olive', 10, 'example@gmail.com', 'olivelliott');
    expect(newEngineer.getRole()).toBe(returnRole);
  })

});

