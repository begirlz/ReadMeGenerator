// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseOption = `${data.licensing}`;
  let licenseLink = '';
  let licenseBadge ='';

  if (licenseOption === 'Apache License 2.0') {
    licenseBadge = 'Apache';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  }

  if (licenseOption === 'MIT License') {
    licenseBadge = 'MIT';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  }

  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseBadge = 'Mozilla';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  }

  if (licenseOption === 'None') {
    licenseBadge = 'none';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  }

  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${licenseBadge}-blue)](https://shields.io)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Licensing:
  _This application has the ${data.licensing}._
      
 For more information please view the [license description](${licenseLink}).

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Additional Questions please email: ${data.email}

`;
}

module.exports = generateMarkdown;
