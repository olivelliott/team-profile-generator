
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const generateTeam  = require("../src/profile-template");
const { writeFile, copyFile } = require("../utils/generate-profile");
const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(__dirname, "../dist/index.html");


function teamProfile() {
  this.team = [];
  this.manager;
  this.engineer;
  this.intern;
  // generateTeam(teamProfile);
}

const managerPrompts = [
  {
    type: "input",
    name: "name",
    message: "What is your team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your team manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your team manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your team manager's office number?",
  },
];

const engineerPrompts = [
  {
    type: "input",
    name: "name",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub profile?",
  },
];

const internPrompts = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your intern's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does your intern attend?",
  },
];



teamProfile.prototype.getManagerData = function () {
  return inquirer
    .prompt(managerPrompts)
    .then(({ name, email, id, officeNumber }) => {
      this.manager = new Manager(name, id, email, officeNumber);
      this.team.push(this.manager)
      this.addMoreEmployees();
    });
};



teamProfile.prototype.addMoreEmployees = function () {
  return inquirer
    .prompt({
      type: "list",
      name: "addMore",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
    })
    .then(({ addMore }) => {
      if (addMore === "Engineer") {
        this.getEngineerData();
      }
      else if (addMore === "Intern") {
        this.getInternData();
      } else {
        // const profileData = this.team.toString();
        // console.log(this.team);
        // writeFile(generateEmployees(this.team));
        // copyFile();
        // writeFile();
        // copyFile();
        // htmlBuilder(this.team);
        htmlBuilder(this.team);
      }
    })
    .catch((err) => {
        console.log(err);
    })
};

teamProfile.prototype.getEngineerData = function () {
  return inquirer
    .prompt(engineerPrompts)
    .then(({ name, id, email, github }) => {
      this.engineer = new Engineer(name, id, email, github);
      this.team.push(this.engineer);
      this.addMoreEmployees();
    });
};

teamProfile.prototype.getInternData = function () {
  return inquirer
    .prompt(internPrompts)
    .then(({ name, id, email, school }) => {
    this.intern = new Intern(name, id, email, school);
    this.team.push(this.intern);
    this.addMoreEmployees();
  });
};

htmlBuilder = data => {
    console.log('testing this one');
    console.log(data);
    fs.writeFileSync(outputPath, generateTeam(data), "UTF-8")
}

// const generateTeam = (teamProfile) => {
//     // const generateManager = manager => {
//         const teamData = teamProfile;
//         console.log(teamData);
//           return `
//           <div class="col-4 mt-4>
//               <div class=card h-100>
//                   <div class="card-header">
//                     <h3>${this.manager}</h3>
//                   console.log(${this.manager})`;
//     // }
// };
//     // console.log('i dont know');
//     // const {name, id, email, officeNumber, role} = manager;
//     // // console.log(`${Manager.name}`);
//     // console.log(manager);
//     // console.log(`${getName(manager)}`)
//     const html = [];

//     // html.push(team
//     //     .filter(employee => employee.getRole() === 'Manager')
//     //     .map(manager => generateManager(manager))
//     //     );

//     // return html.join('');
// }



module.exports = teamProfile;

