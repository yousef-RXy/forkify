// import icons from 'url:../img/icons.svg';

import * as _ from 'core-js/stable';
import * as _ from 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //load recipe
    await model.loadRecipe(id);

    //render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();
