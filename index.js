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
            name: 'descriptionA',
            message: 'What was your motivation?', 
        },
        {
            type: 'input',
            name: 'descriptionB',
            message: 'Why did you build this?',
        },
        {
            type: 'input',
            name: 'descriptionC',
            message: 'What problem does this solve?',
        },
        {
            type: 'input',
            name: 'descriptionD',
            message: 'What did you learn?'
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
            message: 'Who all contributed to this project?',
        },
        {
            //tests
            type: 'input',
            name: 'tests',
            message: 'Add your test instructions',
        },
    ]);
}
// TODO: Create a function to write README file
// const write = (answers) => fs.writeFile('README.md', generateMarkdown(answers), (err) =>
//     err ? console.error(err) : console.log('README generated successfully')
// );
// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then(({title, descriptionA, descriptionB, descriptionC, descriptionD, installation, usage, contributing, tests}) => 
            fs.writeFileSync('README.md', generateMarkdown({title, descriptionA, descriptionB, descriptionC, descriptionD, installation, usage, contributing, tests})))
        .then(() => console.log('Congrats on the work you should have done yourself!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
