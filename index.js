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
// const write = (answers) => fs.writeFile('README.md', generateMarkdown(answers), (err) =>
//     err ? console.error(err) : console.log('README generated successfully')
// );
// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then(({title}) => fs.writeFileSync('README.md', generateMarkdown({title})))
        .then(() => console.log('Congrats on the work you should have done yourself!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
