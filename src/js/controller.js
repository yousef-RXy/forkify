// import icons from 'url:../img/icons.svg';

import * as _ from 'core-js/stable';
import * as _ from 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

const controlRecipe = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  recipeView.renderSpinner();

  //load recipe
  await model.loadRecipe(id);

  //render recipe
  recipeView.render(model.state.recipe);
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipe)
);
