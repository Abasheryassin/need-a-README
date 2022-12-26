// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'MIT license':
      badge = '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'Apache License 2.0.':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'GNU General Public License':
      badge = '[![License](https://img.shields.io/badge/License-GNUPL-red.svg)]';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'MIT license':
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License 2.0.':
      link = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License':
      link = '(https://opensource.org/licenses/gpl-license)';
      break;
    default:
      link = '';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'None') {
    return "";
  } else {
    return `##License
    
    The Licence this project uses is ${license}
    `;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {title, description, installation, usage, contribution, test, email, github, license} = data;
  let licenseBadge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license);
  let licenseLink = renderLicenseLink(license);

  console.log(licenseBadge);
  console.log(licenseLink);

  return `# ${title}
  ${licenseBadge}${licenseLink}

  ## Description

  ${description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${installation}

  ## Usage

  ${usage}
  
  ## How to Contribute
  
  ${contribution}

  ## Tests
  
  ${test}

  ## Questions

  For any questions please contact me by email at ${email}.
  Here is a link to my Github https://github.com/${github}.

  ${licenseSection}
`;
}

module.exports = generateMarkdown;