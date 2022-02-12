// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            //prompt title
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository?',
        },
    ]);
}
// TODO: Create a function to write README file
fs.writeFile('README.md', generateMarkdown, (err) =>
    err ? console.error(err) : console.log('README generated successfully')
);
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
