import { expect } from '@playwright/test';
class JobSearchResultsPage {
  constructor(page) {
    this.page = page;

    this.jobCards = page.locator('[data-ph-at-id="jobs-list"][role="listitem"]');
    this.jobLocation = page.locator('[data-ph-at-id="job-location"] div[role="text"]');
    this.jobCategory = page.locator('[data-ph-at-id="job-category"]');
    this.pageNavigationLink = page.locator('[data-ph-at-id="pagination-next-link"]');
    this.totalJobsHeader = page.locator('[data-ph-at-id="total-jobs-info"]');
    this.categoryCheckbox = page.locator('[data-ph-at-id="facet-results-item"]');

    //Additional
    this.applyNowButton = page.locator('a').filter({ hasText: 'Apply now' }).first();
    this.clearAllButton = page.getByRole('button', { name: /Clear all filters/i });
  }

  /**
  * Navigate to next page safely
  */
  async goToNextPage() {
    if (!(await this.pageNavigationLink.isVisible())) {
      return false;
    }
    const firstLocationBefore = await this.jobLocation.first().textContent();
    await this.pageNavigationLink.scrollIntoViewIfNeeded();
    await this.pageNavigationLink.first();
    await this.pageNavigationLink.click();
    try {
      await expect(this.jobLocation.first()).not.toHaveText(firstLocationBefore, { timeout: 10000 });
    } catch {
      console.log('Pagination might be on last page, first job text did not change.');
    }

    return true;
  }

  /**
  * Get all job locations across pagination
  */
  async getLocationsAcrossPages() {
    const allLocations = [];
    while (true) {
      await this.jobLocation.first().waitFor({ state: 'visible' });
      const locCount = await this.jobLocation.count();
      if (locCount === 0) {
        console.error('No job location is found for the search');
      }

      for (let i = 0; i < locCount; i++) {
        const locText = await this.jobLocation.nth(i).innerText();
        allLocations.push(locText.trim());
      }

      const hasNext = await this.goToNextPage();
      if (!hasNext) break;
    }

    return allLocations;
  }

  /**
  * Capture the category checkbox
  */
  async categoryCheckBox(categoryName) {
    return this.page.locator('div.phw-form-check')
      .filter({ hasText: categoryName })
      .getByRole('checkbox');
  }

  /**
  * Capture search count in facet for selected categoryName 
  */
  async getCount(filterName) {
    return this.page.locator('div.phw-form-check')
      .filter({ hasText: filterName })
      .getByRole('checkbox');
  }
  async getCountFromFacet(filterName) {
    const labelText = await this.getCount(filterName);
    const countAttribute = await labelText.getAttribute('data-ph-at-count');
    const countInt = parseInt(countAttribute.replace(/[^0-9]/g, ''), 10);
    console.log(`Extracted count from facet for ${filterName}: ${countInt}`);
    return countInt;
  }

  /**
  * Get search result count from header
  */
  async getCountFromHeader() {
    await this.totalJobsHeader.waitFor({ state: 'visible' });
    await this.totalJobsHeader.scrollIntoViewIfNeeded();
    const text = await this.totalJobsHeader.getAttribute('data-ph-at-total-jobs-text');
    const count = parseInt(text.replace(/[()]/g, ''), 10);
    if (!count) {
      throw new Error('Unable to extract job count from header');
    }

    return count;
  }

  /**
   * Get all job categories on current page
   */
  async getCategoriesAcrossPages() {
    const allCategories = [];
    while (true) {
      await this.jobCategory.first().waitFor({ state: 'visible' });
      const count = await this.jobCategory.count();
      if (count === 0) {
        console.error('No job category is found for the search');
      }

      for (let i = 0; i < count; i++) {
        const text = await this.jobCategory.nth(i).innerText();
        const category = text.split(':')[1]?.trim() || text.trim();
        allCategories.push(category);
      }
      const hasNext = await this.goToNextPage();
      if (!hasNext) break;
    }
    return allCategories.filter(category => category.toLowerCase().includes('Sales'));

  }
  /*
  Additional
  Click on Apply now button in detail page
  */
  async clickOnFirstJobAndApply() {
    // Wait for the first job card to appear
    const firstJobCard = this.jobCards.first();
    await firstJobCard.waitFor({ state: 'visible' });

    const jobLink = firstJobCard.locator('a[data-ph-at-id="job-link"]');
    await jobLink.scrollIntoViewIfNeeded();

    const title = await jobLink.innerText();
    await jobLink.click();
    const isapplyBtnVisible = this.applyNowButton.first();
    await isapplyBtnVisible.waitFor({ state: 'visible' });

    // Click Apply Now if available
    if (isapplyBtnVisible) {
      await this.applyNowButton.click();
    }

    return {
      jobTitle: title.trim(),
      applyButton: isapplyBtnVisible
    };
  }


}

export { JobSearchResultsPage };
