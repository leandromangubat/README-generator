// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== "none"){
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
} 

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application
${data.link}
## Application Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${data.features}
## Installation
${data.require}
## How to Use This Application
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
If you have any questions, please contact me here: 
* Email: ${data.email}
* Github: github.com/${data.creator}/
`;
}

module.exports = generateMarkdown;
  