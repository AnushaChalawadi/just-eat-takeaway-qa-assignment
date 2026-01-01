import  { JobConstants } from '../constants/JobConstants';
class HomePage {
    constructor(page) {
        this.page = page;
        this.searchWithJobTitle = page.getByLabel('Search for job title');
        this.searchButton = page.getByRole('button', { name: 'Search', exact: true })
        this.categoryList = page.getByRole('option');
    }
    async navigateTo() {
        await this.page.goto(JobConstants.BASE_URL);
    }
    async searchJobTitle(jobTitle) {
        await this.searchWithJobTitle.fill(jobTitle);
        await this.searchButton.click();
    }
   
}
export { HomePage };