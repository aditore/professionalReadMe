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
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title to continue');
                    return false;
                }
            }
        },
        {
            //description
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description to continue');
                    return false;
                }
            } 
        },
        {
            //installation
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter an installation method to continue');
                    return false;
                }
            }
        },
        {
            //usage
            type: 'input',
            name: 'usage',
            message: 'What are the instructions for use of this project?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage to continue');
                    return false;
                }
            }
        },
        {
            //contributing
            type: 'input',
            name: 'contributing',
            message: 'How can people contribute to your project?',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter a way to contribute to continue');
                    return false;
                }
            }
        },
        {
            //tests
            type: 'input',
            name: 'tests',
            message: 'Add your test instructions',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter a testing method to continue');
                    return false;
                }
            }
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
        },
        {
            //github
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username to continue');
                    return false;
                }
            }
        },
        {
            //email
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an e-mail to continue');
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
            fs.writeFileSync('./createReadMe/README.md', generateMarkdown(data)))
        .then(() => console.log('Congrats on the work you should have done yourself!'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
