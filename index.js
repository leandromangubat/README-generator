// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please type in the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose of your project",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide a relative path for the image you would like to use",
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL for your users to access the application",
  },
  {
    type: "input",
    name: "features",
    message: "List your application's features here"
  },
  {
    type: "input",
    name: "creator",
    message: "Type your Github username"
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributers to the application",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide a demonstration of your application"
  },
  {
    type: "checkbox",
    name: "license",
    message:"Please select a license for your project",
    choices: ["MIT", "Apache2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Please list any project dependencies",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use your application",
  },
  {
    type: "input",
    name: "filename",
    message: "Please enter the name of the README file",
    
  }
];

const genQuestions = inquirer.prompt(questions);
const currentDir = process.cwd();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  return fs.writeFileSync(path.join(currentDir, fileName), data); 
}

// TODO: Create a function to initialize app
function init(){
  genQuestions.then((answers) => {
writeToFile("./dist/README.md", generateMarkdown({ ...answers }));  
})
}
// Function call to initialize app
init();
