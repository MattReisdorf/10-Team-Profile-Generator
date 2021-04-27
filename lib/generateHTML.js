function populateCards(teamData) {
    let template = "";
    console.log(teamData)
    for( i = 1; i < team.length; i++){
        if(teamData[i].role == 'Manager'){
            template += `
            <div class="card text-center" style="width: 18rem;">
                <div class="card-header">
                    ${teamData.role}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${teamData.employeeName}</li>
                    <li class="list-group-item">${teamData.id}</li>
                    <li class="list-group-item">${teamData.email}</li>
                    <li class="list-group-item">${teamData.number}</li>
                </ul>
            </div>`;
        } else if(teamData[i].role == 'Intern'){
            template += `
            <div class="card text-center" style="width: 18rem;">
                <div class="card-header">
                    ${teamData.role}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${teamData.employeeName}</li>
                    <li class="list-group-item">${teamData.id}</li>
                    <li class="list-group-item">${teamData.email}</li>
                    <li class="list-group-item">${teamData.number}</li>
                </ul>
            </div>`;
        } else if(teamData[i].role == 'Engineer'){
            return `
            <div class="card text-center" style="width: 18rem;">
                <div class="card-header">
                    ${teamData.role}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${teamData.employeeName}</li>
                    <li class="list-group-item">${teamData.id}</li>
                    <li class="list-group-item">${teamData.email}</li>
                    <li class="list-group-item">${teamData.number}</li>
                </ul>
            </div>`;
        }
    }
    return template;
}

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">${data.title}</h1>
            </div>
        </div>  
        
        ${populateCards()}

        <script src="index.js"></script>
    </body>
    </html>`
}




module.exports = generateHtml;