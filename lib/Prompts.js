
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const generateTeam  = require("../src/profile-template");
const path = require("path");
const outputPath = path.join(__dirname, "../dist/index.html");


function teamProfile() {
  this.team = [];
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

htmlBuilder = profileData => {
  console.log('Employee team profile generated! Check out dist/index.html to find your webpage')
  fs.writeFileSync(outputPath, generateTeam(profileData), "UTF-8")
}

module.exports = teamProfile;

