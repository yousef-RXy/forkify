import view from './view';

import icons from 'url:../../img/icons.svg';

class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';

  // addHandlerRender(handler) {
  //   ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  // }

  _generateHTML() {
    return this._data
      .map(rec => {
        const id = window.location.hash.slice(1);
        return `
          <li class="preview">
            <a class="preview__link ${
              id === rec.id ? 'preview__link--active' : ''
            }" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="${rec.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>
        `;
      })
      .join('');
  }
}
export default new ResultsView();
