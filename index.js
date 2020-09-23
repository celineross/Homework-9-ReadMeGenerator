//requirements
const fs = require("fs");
const inq = require("inquirer");
const util = require("util");

//function to add all information to the readme
function generateMarkdown(questions) {
    return `
    # ${questions.title}

    ${questions.badge}

    ## Table of Contents

    * [Author](#author)
    * [Description](#description)
    * [Screenshot](#screenshot)
    * [Requirements](#requirements)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Test](#test)
    * [Questions](#questions)


    ## Author
    * ${questions.author}
    * ${questions.github}

    ## Description
    * ${questions.desc}

    ## Screenshot
    * ${questions.ss}

    ## Requirements
    * ${questions.reqs}

    ## Installation
    * ${questions.install}

    ## Usage
    * ${questions.usage}

    ## License
    * ${questions.license}

    # Contribution
    * ${questions.contr}

    ## Test
    * ${questions.test}

    ## Questions
    * ${questions.queries}
    `
}

//initialization function
async function init() {
    try {
        //prompts for user
        const questions = await inq.prompt([
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
                name: "ss",
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
                message: "How do I start using this app? "
            },
            {
                type: "input",
                name: "usage",
                message: "What is the purpose of your project? "
            },
            {
                type: "input",
                name: "license",
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

//function call to start prompts
init();