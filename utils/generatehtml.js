const generateHtml = team => {

    const generateManagerHtml = manager => {
        console.log(html)
        console.log("argument", manager);
        console.log(manager.getName())
        return `
        <div>
        <h2>Manager: ${manager.getName()}</h2>
        <h4>Id: ${manager.getId()}</h4>
        <p>${manager.getEmail()} || ${manager.getOfficeNumber()}</p>
        </div>
        `;
    }

    const generateEngineerHtml = engineer => {
        console.log(engineer, engineer.getRole)
        return `
        <div>
        <h2>Engineer: ${engineer.getName()}</h2>
        <h4>Id: ${engineer.getId()}</h4>
        <p>${engineer.getEmail()} || ${engineer.getGithub()}</p>
        </div>
        `
    }

    const generateInternHtml = intern => {
        return `
        <div>
        <h2>Intern: ${intern.getName()}</h2>
        <h4>Id: ${intern.getId()}</h4>
        <p>${intern.getEmail()} || ${intern.getSchool()}</p>
        </div>
        `
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHtml(manager)))
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineerHtml(engineer)))
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateInternHtml(intern)))
    
    return html.join("")
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=!">
    <title>Document</title>
</head>
<body>
    ${generateHtml(team)}
</body>
</html>
    `;
}


