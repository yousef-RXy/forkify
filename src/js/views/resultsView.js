import view from './view.js';
import previewView from './previewView.js';

class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';

  _generateHTML() {
    return this._data.map(rec => previewView.render(rec, false)).join('');
  }
}
export default new ResultsView();
