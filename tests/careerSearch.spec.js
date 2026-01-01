import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { JobSearchResultsPage } from '../pages/JobSearchResultsPage';
import { JobActions } from '../utils/helperMethods/JobActions';
import { JobConstants } from '../constants/JobConstants';
import { JobSearchData } from '../testdata/JobSearchData';

test.describe('Just Eat Takeaway Career Search functionality', () => {
    let homePage;
    let searchResults;
    let jobActions;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchResults = new JobSearchResultsPage(page);
        jobActions = new JobActions(page);
        await homePage.navigateTo();
    })
    test('TC_01 Verify search results based on the location filter', async ({ page }) => {

        //Step1: Search for the Job Title “Test”
        await jobActions.searchForJob(JobSearchData.JOBTITLE.TEST);

        //Step2: Verify that the search contains results from multiple locations
        const initialLocations = await searchResults.getLocationsAcrossPages();
        console.log(`Total found ${initialLocations.length} results for the ${JobSearchData.JOBTITLE.TEST} search`);

        const uniqueLocations = new Set(initialLocations);
        console.log('Found Multiple Locations :', Array.from(uniqueLocations));
        expect(uniqueLocations.size).toBeGreaterThan(1);
        console.log('Verification successful: Search contains results from multiple locations.');

        //Step3: Then Refine your search from the left panel to the Country “Netherlands” 
        await jobActions.applyCountryFilter('Country', JobConstants.COUNTRIES.NETHERLANDS);

        //Step4: Verify that now the search result's location is the Netherlands only
        await page.waitForLoadState('networkidle');
        const filteredLocations = await searchResults.getLocationsAcrossPages();
        console.log('Locations are now only Netherlands: ', filteredLocations);

        filteredLocations.forEach(location => {
            expect(location.toLowerCase()).toContain(JobConstants.COUNTRIES.NETHERLANDS.toLowerCase());
        });

        console.log('Verification successful: All results are in the Netherlands.');
    });

    test('TC_02 Verify search results based on the category', async ({ page }) => {

        //Step1: Click on “Search for Job Title” and select “Sales” among Job Categories
        await jobActions.selectCategory(JobConstants.CATEGORIES.SALES);
        console.log(`Category ${JobConstants.CATEGORIES.SALES} is selected from category list`);

        //Step2: Verify Category "Sales" is selected and results number is matching
        const checkBox = await searchResults.categoryCheckBox(JobConstants.CATEGORIES.SALES);
        await expect(checkBox).toBeChecked();

        //Scroll to “Refine your search”
        const refineSearch = await jobActions.refineSearch();
        await expect(refineSearch).toBeVisible();

        const facetCategoryCount = await searchResults.getCountFromFacet(JobConstants.CATEGORIES.SALES);
        const actualCategoryCount = await searchResults.getCountFromHeader();
        expect(actualCategoryCount).toBe(facetCategoryCount);

        //Step3: Refine the search from the left panel to the Country “Germany"
        await jobActions.applyCountryFilter('Country', JobConstants.COUNTRIES.GERMANY);
        await page.waitForLoadState('networkidle');

        //Step4: Verify the number of the search results is matching and category is “Sales” on all results
        const facetCountryCount = await searchResults.getCountFromFacet(JobConstants.COUNTRIES.GERMANY);
        const actualCountryCount = await searchResults.getCountFromHeader();
        expect(actualCountryCount).toBe(facetCountryCount);

        //Step5: Verify all results are for "Sales"
        const allResults = await searchResults.getCategoriesAcrossPages();
        allResults.forEach(category => {
            expect(category.toLowerCase()).toContain(JobConstants.CATEGORIES.SALES);
        })
        console.log('Verification successful: All results are in the Sales.');

    });

    test('TC_03(Additional) Verify apply now button is available for selected job', async ({ page }) => {

        //Step1: Search for the Job Title "Engineer"
        await jobActions.searchForJob(JobSearchData.JOBTITLE.ENGINEER);

        const refineSearch = await jobActions.refineSearch();
        await expect(refineSearch).toBeVisible();

        //Step2: Refine the search from the left panel to the Country “Germany"
        await jobActions.applyCountryFilter('Country', JobConstants.COUNTRIES.GERMANY);
        await page.waitForLoadState('networkidle');

        const facetCountryCount = await searchResults.getCountFromFacet(JobConstants.COUNTRIES.GERMANY);
        const actualCountryCount = await searchResults.getCountFromHeader();
        expect(actualCountryCount).toBe(facetCountryCount);

        //Ste3: Click on First job from jobs list
        const result = await searchResults.clickOnFirstJobAndApply();

        //Step4: Click on Apply now
        if (result.applyButton) {
            await expect(page).toHaveTitle('Apply Now | Just Eat Takeaway Careers');
            console.log("Apply now clicked successfully");
        } else {
            console.log('Apply now not available for this job');
        }

    });

    test('TC_04(Additional) Verify the clear filters functionality after filters appiled', async ({ page }) => {

        //Step1: Click on “Search for Job Title” and select “Sales” among Job Categories
        await jobActions.selectCategory(JobConstants.CATEGORIES.TECHANDPRODUCT);

        //Step2: Verify Category "Tech & Product" is selected and results number is matching
        const checkBox = await searchResults.categoryCheckBox(JobConstants.CATEGORIES.TECHANDPRODUCT);
        await expect(checkBox).toBeChecked();
        const refineSearch = await jobActions.refineSearch();
        await expect(refineSearch).toBeVisible();

        const facetCategoryCount = await searchResults.getCountFromFacet(JobConstants.CATEGORIES.TECHANDPRODUCT);
        const actualCategoryCount = await searchResults.getCountFromHeader();
        expect(actualCategoryCount).toBe(facetCategoryCount);

        //Step3: Refine the search from the left panel to the Country “Germany"
        await jobActions.applyCountryFilter('Country', JobConstants.COUNTRIES.GERMANY);
        const facetCountryCount = await searchResults.getCountFromFacet(JobConstants.COUNTRIES.GERMANY);
        const actualCountryCount = await searchResults.getCountFromHeader();
        expect(actualCountryCount).toBe(facetCountryCount);

        //Step4: Click on ClearAll button
        await searchResults.clearAllButton.click();

        //Step5: Verify the header count after filters reset
        await page.waitForLoadState('networkidle');
        const totalJobs = await searchResults.getCountFromHeader();
        console.log(`There are total ${totalJobs} jobs after reset`);
        expect(totalJobs).toBeGreaterThan(1);

        const techCheckBox = await jobActions.expandCategory('Category', JobConstants.CATEGORIES.TECHANDPRODUCT);
        // Verify it is NOT checked
        await expect(techCheckBox).not.toBeChecked();


    });

});
