# Just Eat Takeaway - Career Search Portal Automation Framework

## 📌 Project Overview
This repository contains manual test cases for the Lieferando website (restaurant filtering feature) and a UI automation testing framework built using Playwright with JavaScript for the Just Eat Takeaway Career Portal.
The automation framework follows the Page Object Model (POM) design pattern to ensure scalability, maintainability, and clean code.
Allure Reporting is integrated to generate detailed and user-friendly test execution reports.

## 🛠 Tech Stack
- Language: JavaScript
- Test Framework: Playwright
- Design Pattern: Page Object Model(POM)
- Reporting: Allure Report
- Node Version: v20.11.0

## ✅ Pre-requisites

- Node.js
- npm
- VS Code

## ⚙️ Setup and Installation

- Clone the repository and navigate to project directory
```
   git clone <repositoryname>
   cd <project-directory>
```         

- Install the dependencies
```
  npm install
  npm init playwright@latest 
```

## 📂 Project Structure

JET_ASSIGNMENT
```
├── .github/
├── allure-report/
├── allure-results/
├── constants/
│   └── JobConstants.js
├── lieferando_testcases/
│   └── Manual_Testcases.md
├── pages/
│   ├── HomePage.js
│   └── JobSearchResultsPage.js
├── testdata/
│   └── JobSearchData.js
├── tests/
│   └── careerSearch.spec.js
├── utils/
│   └── helperMethods/
│       └── JobActions.js
├── package.json
└── playwright.config.js  
``` 

Folder Description
- `allure-report` : Generated Allure HTML reports.
- `allure-results` : Raw results from test execution.
- `constants/` : Centralized Constants test data.
- `lieferando_testcases`: Contains manual testcases of lieferando website.
- `pages/` : Page Object model class of locators and methods for different pages.
- `playwright-report/` : HTML test reports.
- `testdata/` : Centralized test data.
- `tests/` : Contains the test specifications.
- `utils/helperMethods/` : Utility classes for common actions to perform(reusable code).
- `package.json` : Project dependencies and scripts.
- `playwright.config.js` : Playwright execution settings

## ▶️ Running Tests

### Run all tests
```
- npm run test
```

### Run tests in a specific browser(ex: chromium)
```
- npm run test-chromium
```

### Run tests in headed mode
```
- npm run test-headed
```

## 📊 Reports Generation

### HTML Report
After running tests, automatically the html report will be generated and can be viewed by running:
```
- npx playwright show-report
```

### Allure Report

1. Run the tests to generate results.
2. Generate and open the Allure Report by running
```
    - npm run allure-generate
    - npm run allure-open
```   

## 🧪 Part-1 Functional Testcases
- Functional test cases covering positive and negative scenarios.
- Designed assuming the restaurant filtering feature is releasing for the first time.
- Test cases selected based on risk and business impact.

## 🤖 Part-2 Automation Testcases

-  **TC_01:  Verify the search results based on the location filter**
    - Open JET Career page
    - Search for the Job Title “Test”
    - Do not enter a location, “Search” for results
    - Verify that the search contains results from multiple locations
    - Then Refine your search from the left panel to the Country “Netherlands”
    - Verify that now the search results’ location is the Netherlands only.

- **TC_02: Verify search results based on the category**
    - Open JET Career page.
    - Click on “Search for Job Title” and select “Sales” among Job Categories 
    - Verify Category “Sales” is selected and the search results number is matching
    - Then Refine your search from the left panel to the Country “Germany”
    - Verify the number of the search results is matching and category is “Sales” on all results
    - Verify all results are for "Sales"

- **TC_03(Additional) Verify apply now button is available for selected job**
    - Open JECT Career page
    - Search for the Job Title "Engineer"
    - Refine the search from the left panel to the Country “Germany"
    - Click on First job from jobs list
    - Click on Apply now

- **TC_04(Additional) Verify the clear filters functionality after filters appiled**
    - Open JECT Career page
    - Click on “Search for Job Title” and select “Sales” among Job Categories
    - Verify Category "Tech & Product" is selected and results number is matching
    - Refine the search from the left panel to the Country “Germany"
    - Click on ClearAll button
    - Verify the header count after filters reset



## 👩‍💻 Author

Anusha Basava Chalawadi
QA Engineer | Automation & Manual Testing
Berlin, Germany