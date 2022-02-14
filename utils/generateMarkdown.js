const inquirer = require('inquirer');
//description questions



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, descriptionA, descriptionB, descriptionC, descriptionD, tableOfContents, installation, usage, license, contributing, tests, questions}) {
  return `# ${title}
  ## Description 
  ${descriptionA}
  ${descriptionB}
  ${descriptionC}
  ${descriptionD}
  ## Table of Contents
  ${tableOfContents}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## Questions
  ${questions}
`;
}

module.exports = generateMarkdown;

//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions