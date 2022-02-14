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
        {
            //description
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project', 
        },
        {
            //installation
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            //usage
            type: 'input',
            name: 'usage',
            message: 'What are the instructions for use of this project?',
        },
        {
            //contributing
            type: 'input',
            name: 'contributing',
            message: 'How can people contribute to your project?',
        },
        {
            //tests
            type: 'input',
            name: 'tests',
            message: 'Add your test instructions',
        },
        {
            //license
            type: 'list',
            name: 'license',
            message: 'Please pick a license',
            choices: ['Apache', 'Common-Development-and-Distribution', 'GNU-General-Public', 'MIT', 'Mozilla-Public', 'None'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license');
                    return false;
                }
            }
        }
    ]);
}
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((data) => 
            fs.writeFileSync('README.md', generateMarkdown(data)))
        .then(() => console.log('Congrats on the work you should have done yourself!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
