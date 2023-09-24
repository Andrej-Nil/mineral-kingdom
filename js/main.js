"use strict";
class Modal {
  constructor(modalId) {
    this.$modal = document.querySelector(modalId);
  }
  open = () => {
    this.$modal.classList.add('show');
  }

  close = () => {
    this.$modal.classList.remove('show');
  }
}


class CatalogModal extends Modal {
  constructor() {
    super("#catalogModal");
    this.init();
  }
  init = () => {
    if (!this.$modal) return;
    this.listeners();
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
    this.$modal.addEventListener('click', this.clickHandler);
  }

}

class SearchModal extends Modal {
  constructor() {
    super("#searchModal");
    this.init();
  }
  init = () => {
    if (!this.$modal) return;
    this.listeners();
  }


  clickHandler = (e) => {
    if (e.target.closest('[data-search-btn]')) {
      this.open()
    }

    if (e.target.closest('[data-close]')) {
      this.close();
    }
  }

  listeners = () => {
    document.addEventListener('click', this.clickHandler);
    this.$modal.addEventListener('click', this.clickHandler);
  }
}

class NavModal extends Modal {
  constructor() {
    super("#navModal");
    this.init();
  }
  init = () => {
    if (!this.$modal) return;
    this.listeners();
  }


  clickHandler = (e) => {
    if (e.target.closest('[data-nav-btn]')) {
      this.open()
    }

    if (e.target.closest('[data-close]')) {
      this.close();
    }
  }

  listeners = () => {
    document.addEventListener('click', this.clickHandler);
    this.$modal.addEventListener('click', this.clickHandler);
  }
}

const catalogModal = new CatalogModal();
const searchModal = new SearchModal();
const navModal = new NavModal();