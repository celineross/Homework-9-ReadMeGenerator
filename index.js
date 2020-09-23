//requirements
const fs = require("fs");
const inq = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");



async function init() {
    try {
        const questions = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of your project? "
            },
            {
                type: "input",
                name: "badge",
                message: "Does your project have a badge? "
            },
            {
                type: "input",
                name: "author",
                message: "Who authored this project? "
            },

            {
                type: "input",
                name: "github",
                message: "Input link to your GitHub: "
            },
            {
                type: "input",
                name: "desc",
                message: "Add a short description of your project. "
            },
            {
                type: "input",
                name: "photo",
                message: "Screenshot of project: "
            },
            {
                type: "input",
                name: "reqs",
                message: "What requirements are needed? (Inquirer, Util, etc.) "
            },
            {
                type: "input",
                name: "install",
                message: "How do I use this app? "
            },
            {
                type: "input",
                name: "usage",
                message: "What is the purpose of your project? "
            },
            {
                type: "input",
                input: "license",
                message: "What license does your project use? (ISC, GLP, etc.) "
            },
            {
                type: "input",
                name: "contr",
                message: "Enter contribution requirements. "
            },
            {
                type: "input",
                name: "test",
                message: "Test application. "
            },
            {
                type:"input",
                name:"queries",
                message:"Add any questions here. "
            }
        ]);

        const readMe = await generateMarkdown(questions);
        await fs.writeFileSync("README.md", readMe);
        console.log("Successfully created README.md.")

    } catch (err) {
        console.log(err)

    }
}

init();