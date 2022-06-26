const Intern = require('../lib/Intern')

describe('Intern', () => {
    const intern = new Intern('Olive', 10, 'example@gmail.com', 'school', 'intern');
    it("checks to see if the school entered is a string", () => {
        expect(intern.school).toEqual(expect.any(String));
    });

      it("Checks to ensure the correct role is assigned (intern)", () => {
        expect(intern.role).toEqual("intern");
      });

})


