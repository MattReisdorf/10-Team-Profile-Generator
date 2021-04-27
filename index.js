// Dependencies and Imports
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./lib/generateHTML');
const createManager = require('./lib/manager');
const createEngineer = require('./lib/engineer');
const createIntern = require('./lib/intern');

// Initialize some Variables
const team = [];
let teamName;

// Questions for Inquirer
const team = {
    type: 'input',
    name: 'title', 
    message: 'What is the team or project name?'
};

const newMember = {
    type: 'list',
    name: 'newMember', 
    message: 'Would you like to add a team member?',
    choices: ['Yes', 'No']
};

const questions = [
    {
        type: 'input',
        name: 'name',
        message: `What is this team member's name?`
    },
    {
        type: 'input', 
        name: 'id',
        message: `What is this team member's id?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is this team member's email address?`
    }
];

const role = {
    type: 'list',
    name: 'role',
    message: `What is this their role?`,
    choices: ['Manager', 'Engineer', 'Intern']
};

const managerQuestions = {
    type: 'input',
    name: 'number', 
    message: `What is this manager's office number?`
};

const engineerQuestions = {
    type: 'input',
    name: 'github',
    message: `What is this engineer's Github username?`
};

const internQuestions = {
    type: 'input',
    name: 'school',
    message: 'What school does the intern currently attend?'
};
