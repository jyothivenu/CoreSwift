# CoreSwift

End to End automation framework using Cypress with Cucumber 

Installation 

Prerequisites:
Install Node.js 

Go to root directory of project and run
 npm install 

Open Cypress
 ./node_modules/.bin/cypress open
or 
 npx cypress open

Cypress Test Runner opens and you can run any feature file in browser of your choice 


Running Cypress via CommandLine 

1. This will run all feature file in headless mode using electron browser)\
 node_modules\\.bin\\cypress run 
or 
 npx run

OR 

2. This will run all feature files in headed mode
 npm run test -- --headed


Running Suite for various environments 

Update ENV variable on Cypress.json  to qa,dev or staging as per your requirement 

About the framework 

Fixtures folder - 
Contains all  the test data for automation (json,jpg,png).

Integration folder - 
Contains all the step definitions and feature files for the framework

Common Folder - 
Framework has Common folder in which contains all step definition files to increase reusability of methods in the complete framework, it is achieved by tagging. 

Features files - 
It contains end to end scenarios for the project 

Support folder - Contains all support files 

•	page-objects folder - 
Contains all POM classes 

•	Utility.js - 
Utility file to maintain url for all  environments 

•	Command.js - 
Used to add custom commands 

Cypress.json
This JSON file is used to store any configuration values. The default behaviour of cypress can be customised by adding those field to cypess.json



Reports

Run below command after running feature file. 
 node cypress/cucumber-html-report.js
Open cypress/cucumber-report/index.html in browser to see the reports
