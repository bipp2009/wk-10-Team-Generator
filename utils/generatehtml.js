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
        return ``
    }

    const generateInternHtml = intern => {
        return ``
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHtml(manager)))


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


