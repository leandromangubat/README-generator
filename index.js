// TODO: Include packages needed for this application

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
