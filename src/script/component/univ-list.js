import './univ-item.js';
 
class UnivList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set univs(univs) {
    this._univs = univs;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '';
    this._univs.forEach(univ => {
      const univItemElement = document.createElement('univ-item');
      univItemElement.univ = univ;
      
      this.shadowDOM.appendChild(univItemElement);
    });
  }
}
 
customElements.define('univ-list', UnivList);