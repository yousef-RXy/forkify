import view from './view.js';
import previewView from './previewView.js';

class BookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateHTML() {
    return this._data.map(rec => previewView.render(rec, false)).join('');
  }
}
export default new BookmarksView();
