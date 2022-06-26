// const fs = require('fs');


    // generateHTML(cardArr);

// console.log(cardArr);
    //   const renderPage = generateHTML(cardArr);
    //   return renderPage;


const generateTeam = team => {

    const generateManager = manager => {
        // const { name, id, email, officeNumber } = employee;
        return `
            <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    const generateEngineer = engineer => {
    //   const { name, id, email, github } = employee;
    return `
            <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateIntern = intern => {
    //   const { name, id, email, school } = employee;
    return `
        <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const teamArr = [];
    if (teamArr === undefined) {
        return;
    }

    teamArr.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    teamArr.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    teamArr.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return teamArr.join("");


    // const employeeCards = cardArr.join("")
    // const generateTeam = generateHTML(employeeCards)
    // return generateTeam;

};



            // let cardStr = cardArr.join("");
            // console.log(cardStr);
            // return cardStr;
            // const renderPage = generateHTML(cardStr);
            // return renderPage;
      // });
      // return cardArr;
    //   generateHTML(cardArr);


module.exports = team => {
    // console.log(employeeCards);
    // console.log(generateEmployees(cardArr));
    // console.log(generateEmployees())
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      <title>Document</title>
    </head>
    <header>Employee Profile</header>
    <body>
      <p>${generateTeam(team)}</p>
    </body>
    </html>
    `;
};

// generateEmployees();

// console.log(generateHTML);

// module.exports = generateHTML
// const teamProfile = require('../lib/Prompts')

// const teamData = teamProfile
// console.log(teamData);

// module.import = teamProfile => {
// console.log(teamProfile);
// console.log(this.manager);
// console.log("hello");

// module.exports = team => {
//     console.log(team)
//     return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//   </head>
//   <header>Hello</header>
//   <body>
//       <h1>${generateTeam(team)}</h1>
//   </body>
//   </html>
//       `;
// };

// employeeProfile();

// module.exports = employeeProfile;
// console.log(teamProfile);

// const generateManager = (teamProfile) => {
  // return `
  // ${teamProfile
  // .filter((Engineer) => Engineer)
  // .map(( {name, id, email, officeNumber }) => {
    //   const {name, id, email, officeNumber, github, school, role} = teamProfile;

//   return `
//         <section class="employeeData card col>
//             <div class="card-header">
//                 <h2 class="card-title">${name}</h2>
//             </div>
//             <div class="card-body">
//                 <p class="card-text">Employee ID: ${id}</p>
//                 <p class="card-text">
//                     Email:
//                     <a href="mailto:${email}" target="_blank">${email}</a>
//                 </p>
//                 <p class="card-text">Office Number: ${officeNumber}</p>
//             </div>
//         </section>
//     `;
// }
// module.exports = generateManager
// // // module.exports = {generateManager};
// module.exports = teamProfile => {
//     const {name, id, email, officeNumber, github, school, role} = teamProfile;

//     return `

// }


// // const generateCards = (data) => {
// const generatePage = function() {
//     console.log('hello')
// }

// module.exports = generatePage;