// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please add a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please add the installation instructions of your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
