import view from './view.js';

import icons from 'url:../../img/icons.svg';

class PaginationView extends view {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.goto);
    });
  }

  _generateHTML() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    return `
      ${
        this._data.page > 1 && this._data.page <= numPages
          ? `<button data-goto="${
              this._data.page - 1
            }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
      </button>`
          : ''
      }
      ${
        numPages > this._data.page && numPages !== 1 && this._data.page > 0
          ? `<button data-goto="${
              this._data.page + 1
            }" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`
          : ''
      }
    `;
  }
}
export default new PaginationView();
