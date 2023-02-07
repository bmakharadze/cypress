export class FilterSort {
    constructor() {
        this.sortSelector = 'select[class="orderby"]';
    }

    selectOption(option) {
        cy.get(this.sortSelector).first().select(option);
    }

    sortByRelevance() {
        this.selectOption('Relevance');
    }

    sortByPopularity() {
        this.selectOption('Sort by popularity');
    }

    sortByAverageRating() {
        this.selectOption('Sort by average rating');
    }

    sortByLatest() {
        this.selectOption('Sort by latest');
    }

    sortByPriceLowToHigh() {
        this.selectOption('Sort by price: low to high');
    }

    sortByPriceHighToLow() {
        this.selectOption('Sort by price: high to low');
    }
}



export const onFilterSort = new FilterSort();