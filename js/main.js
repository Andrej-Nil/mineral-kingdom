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

class Catalog {
  constructor() {
    this.$catalog = document.querySelector('#catalog');
    this.init();
  }

  init = () => {
    if (!this.$catalog) return;
    this.$categoryNav = this.$catalog.querySelector('#categoryNav');
    this.$categoryNavList = this.$categoryNav.querySelectorAll('[data-category-item]');
    this.$categoryList = this.$catalog.querySelectorAll('[data-category]');
    this.listeners();
  }

  changeCategoryNavActiveItem = (categoryId) => {
    this.$categoryNavList.forEach(($item) => {
      $item.classList.remove('active');
      if ($item.dataset.categoryItem === categoryId) {
        $item.classList.add('active');
      }
    })
  }

  changeDisplayedCategory = (categoryId) => {
    this.$categoryList.forEach(($item) => {
      $item.classList.remove('show');
      if ($item.dataset.category === categoryId) {
        $item.classList.add('show');
      }
    })
  }

  changeActiveCategory = ($target) => {
    const categoryId = $target.dataset.categoryItem
    this.changeCategoryNavActiveItem(categoryId);
    this.changeDisplayedCategory(categoryId)
  }
  mouseoverHandler = (e) => {
    if (e.target.closest('[data-category-item]')) {
      this.changeActiveCategory(e.target.closest('[data-category-item]'));
    }

  }

  listeners = () => {
    this.$categoryNav.addEventListener('mouseover', this.mouseoverHandler)
  }
}

const catalogModal = new CatalogModal();
const searchModal = new SearchModal();
const navModal = new NavModal();
const catalog = new Catalog();