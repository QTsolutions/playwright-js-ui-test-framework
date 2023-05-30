## LambdaTestPlayground
`This is the basic project of Playwright with javascript`

## Prerequisite:
`NodeJS, VS Code,Playwright VS code Plugin`

## Installation
1. Clone the repo using below URL
`https://github.com/QTsolutions/playwright-js-ui-test-framework.git`
2. Navigate to Terminal and install npm package using:
`npm install`
3. For first time installation run below command to download required browser
`npm init playwright@latest`

## Drivers
`currently these script running on Chrome browser. if you want to execute on different browser go to config.js file under project section uncomment the browser `

## pages
`contains locators of objects involved in pages of website`

## Tests
`contains all the tests`

## test-data
`contains all the data and URLS`

## Runing the test:
`npx playwright test` 
`npm test`

## running test on single worker
` npx playwright test --workers=1`

