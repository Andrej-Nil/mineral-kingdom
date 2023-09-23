"use strict";
class Catalog {
  constructor() {
    this.$catalog = document.querySelector("#catalog");
    this.init();
  }
  init = () => {
    if (!this.$catalog) return;
    this.listeners();
  }

  open = () => {
    this.$catalog.classList.add('show');
  }

  close = () => {
    this.$catalog.classList.remove('show');
  }

  clickHandler = (e) => {
    if (e.target.closest('[data-catalog-btn]')) {
      this.open()
    }

    if (e.target.closest('[data-close]')) {
      this.close();
    }
  }

  listeners = () => {
    document.addEventListener('click', this.clickHandler);
    this.$catalog.addEventListener('click', this.clickHandler);
  }

}

const catalog = new Catalog();