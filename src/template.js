const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

// html page template
const pageTemplate = employeesArr => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/715d22d8c7.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>
<body>

  <div class="hero p-2 mb-2">
    <div class="hero-body">
      <h1>My Team</h1>
    </div>
  </div>

  <div class="container grid-lg">

    <div class="columns center">

${employeesArr
            .filter(employee => employee instanceof Manager)
            .map(({ name, id, email, officeNumber }) => {
                return `
      <div class="column col-auto pt-2">

        <div class="card">
          <div class="card-header">
            <h3>${name}</h3>
            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
          </div>
          <div class="card-body grid-custom">

            <i class="fas fa-id-badge"></i>
            <h5>${id}</h5>
            <i class="fas fa-envelope"></i>
            <h5><a href="mailto:${email}">${email}</a></h5>
            <i class="fas fa-hashtag"></i>
            <h5>${officeNumber}</h5>

          </div>
        </div>

      </div>
        `;
            })
            .join('')}

${employeesArr
            .filter(employee => employee instanceof Engineer)
            .map(({ name, id, email, github }) => {
                return `
      <div class="column col-auto pt-2">

        <div class="card">
          <div class="card-header">
            <h3>${name}</h3>
            <h4><i class="fas fa-cubes"></i> Engineer</h4>
          </div>
          <div class="card-body grid-custom">

            <i class="fas fa-id-badge"></i>
            <h5>${id}</h5>
            <i class="fas fa-envelope"></i>
            <h5><a href="mailto:${email}">${email}</a></h5>
            <i class="fab fa-github"></i>
            <h5><a href='https://github.com/${github}' target='_blank'>${github}</a></h5>

          </div>
        </div>

      </div>
        `;
            })
            .join('')}

${employeesArr
            .filter(employee => employee instanceof Intern)
            .map(({ name, id, email, school }) => {
                return `
      <div class="column col-auto pt-2">

        <div class="card">
          <div class="card-header">
            <h3>${name}</h3>
            <h4><i class="fas fa-clipboard"></i> Intern</h4>
          </div>
          <div class="card-body grid-custom">

            <i class="fas fa-id-badge"></i>
            <h5>${id}</h5>
            <i class="fas fa-envelope"></i>
            <h5><a href="mailto:${email}">${email}</a></h5>
            <i class="fas fa-graduation-cap"></i>
            <h5>${school}</h5>

          </div>
        </div>

      </div>
        `;
            })
            .join('')}

    </div>
  </div>

</body>
</html>`
}

module.exports = pageTemplate;