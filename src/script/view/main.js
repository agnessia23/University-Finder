import '../component/univ-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const univListElement = document.querySelector('univ-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchUniv(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    univListElement.univs = results;
  };

  const fallbackResult = message => {
    univListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;