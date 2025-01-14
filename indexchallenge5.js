// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input


const generateHTML = ({ Repository, Title, Description, License, Github, email, Table_of_Contents }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body> 
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Information about my application repository ${Repository}</h1>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">Project title: ${Title}</li>
        <li class="list-group-item">Enter a description, install, usage, contribution, test instruction${Description}</li>
        <li class="list-group-item">Choose license ${License}</li>
        <li class="list-group-item">Github Username: ${Github}</li>
        <li class="list-group-item">Please enter your email address: ${email}</li>
        <li class="lead">links in the Table of Content ${Table_of_Contents}</li>
     </ul>
    </div>
  </header>
</body>
</html>`;

const questions = [
    {
      type: 'input',
      name: 'repository',
      message: 'What is the name of your repository?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the title?',
    },
    {
      type: 'list',
          message: colors.brightMagenta(
            'What is the description?'
          ),
          name: 'description',
            choices: ['description', 'installation instructions', 'usage information', 'contribution guidelines', 'test instructions'],
    },
    {
      type: 'list',
            message: colors.brightMagenta(
              'What is the license number?'
            ),
            name: 'license',
            choices: ['ISC', 'publicDomain', 'MIT', 'permissive', 'copyleft', 'commercial'],
      },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of Contents:',
      },
  ];
  

// TODO: Create a function to write README file
// const fs = require('fs');

function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing file ${fileName}:`,err);
    } else {
      console.log(`Successfully wrote to file ${fileName}`);
    }
  });
}
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const htmlContent = generateHTML(answers);
      writeToFile('index.html', htmlContent);
    });
  }

// Function call to initialize app
init();
