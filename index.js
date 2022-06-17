// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// Class EmployeePrompts {
//     constructor(name, email, id) {
//         this.name = name;
//         this.email = email;
//         this.id = id;
//     }

//     teamManagerPrompts
// class TeamProfile extends Manager {
//     constructor (name = '') {
//         super(name);
//     };


const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is your team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your team manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your team manager's email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your team manager's office number?"
    }
];

const engineerPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub profile?"
    }
];

const internPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What school does your intern attend?"
    }
];

const addMorePrompt = [
]

function teamProfile() {
    this.teamProfile = [];
    this.getManagerData();
};

teamProfile.prototype.getManagerData = function() {
    inquirer.prompt(managerPrompts)
        .then(({ name, id, email, officeNumber }) => {
            this.teamProfile.push(new Manager(name, id, email, officeNumber))
            this.addMoreEmployees();
        })
}

teamProfile.prototype.addMoreEmployees = function() {
    inquirer.prompt({
        type: 'list',
        name: 'addMore',
        message: 'Which type of team member would you like to add?',
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
        ],
    })
    .then (({ addMore }) => {
        if (addMore === "Engineer") {
            return this.getEngineerData();
        } if (addMore === "Intern") {
            return this.getInternData();
        } else {
            console.log(this.teamProfile);
            return;
        }
    });
}

teamProfile.prototype.getEngineerData = function() {
    inquirer.prompt(engineerPrompts)
        .then (({ name, id, email, github }) => {
            this.teamProfile.push(new Engineer(name, id, email, github));
            this.addMoreEmployees();
        })

}


new teamProfile()
    // .getManagerData()