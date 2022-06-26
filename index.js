const teamProfile = require('./lib/Prompts');
const generateHTML = require("./src/profile-template");

// const generatePage = require('./src/profile-template')

new teamProfile().getManagerData()
// .then(teamData => {
//     generateHTML(teamData)
// })

// const {generateManager} = require("./src/profile-template")
// const { writeFile, copyFile } = require("./utils/generate-profile");

