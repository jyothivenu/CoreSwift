const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/cucumber-report/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '104'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        },
        openReportInBrowser: true
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress cucumber'}
        ]
    }

});