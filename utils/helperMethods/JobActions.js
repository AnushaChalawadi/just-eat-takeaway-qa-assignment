class JobActions {
  constructor(page) {
    this.page = page;
  }

  /*
  Scroll to "Refine your Search" Section
  */
  async refineSearch() {
    const refineSearch = this.page.getByText('Refine your search', { exact: true });
    await refineSearch.scrollIntoViewIfNeeded();
    return refineSearch;
  }

  /*
  Select job category from search dropdown
  */
  async selectCategory(categoryName) {
    const searchInput = this.page.getByLabel('Search for job title');
    await this.page.waitForLoadState('networkidle');
    await searchInput.click();
    const categoryOption = this.page.locator(`//span[.//span[normalize-space()='${categoryName}']]`);
    await categoryOption.click();

  }

  /*
 Apply country filter from left panel
 */
  async applyCountryFilter(filterName, optionName) {
    const filterButton = this.page.getByRole('button', { name: filterName, exact: true });
    const expanded = await filterButton.getAttribute('aria-expanded');
    if (expanded === 'false') {
      await filterButton.click();
    }
    const option = await this.page.getByLabel(optionName)
    await option.click();
  }

  /*
  * Search for a job by title
  */
  async searchForJob(jobTitle) {
    const searchInput = this.page.getByLabel('Search for job title');
    await searchInput.fill(jobTitle);
    const searchButton = this.page.locator('#ph-search-backdrop');
    await searchButton.click();
  }
  
  /*
  Expand Category from left panel
  */
  async expandCategory(filterName, optionName) {
    const filterButton = this.page.getByRole('button', { name: filterName, exact: true });
    const expanded = await filterButton.getAttribute('aria-expanded');
    if (expanded === 'false') {
      await filterButton.click();
      const checkbox = this.page.locator(`input[data-ph-at-text="${optionName}"]`);
      await checkbox.waitFor({ state: 'visible' });

      return checkbox;
    }
  }
}
export { JobActions };