const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
  const engineer = new Engineer("Olive", 10, "example@gmail.com", "github", "engineer");

  it("checks to see if github entered is a string", () => {
    expect(engineer.github).toEqual(expect.any(String));
  });

  it("Checks to ensure the correct role is assigned (engineer)", () => {
    expect(engineer.role).toEqual("engineer");
  })
});

