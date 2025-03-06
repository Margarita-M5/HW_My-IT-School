/**
 * @typedef {Object} portfolioParams
 * @property {string} portfolio
 * @property {string} portfolioFilter
 * @property {string} portfolioList

 */

/**
 * @param {portfolioParams} param0
 */

const portfolioContainer = ({ portfolio, portfolioFilter, portfolioList }) => {
  const portfolioContainers = document.querySelectorAll(portfolio);

  /**
   * @param {HTMLDivElement} tabHtmlElement
   */
  const handler = (tabHtmlElement) => {
    const filters = tabHtmlElement.querySelector(portfolioFilter);
    const filtersLi = filters.querySelectorAll("li");
    const list = tabHtmlElement.querySelector(portfolioList);
    const listLi = list.querySelectorAll("li");

    if (!filtersLi && !listLi) return;

    const listContentHendler = (index) => {
      for (let i of listLi) {
        if (i.dataset.filterindex === index) {
          i.classList.add("filter-content--active");
        } else {
          i.classList.remove("filter-content--active");
        }
      }
    };

    /**
     * @param {Event} event
     */

    const filterHandler = (event) => {
      const target = event.target;

      const portfolioIndex = target.dataset.filterindex;

      listContentHendler(portfolioIndex);

      const containerFilretHendler = (portfolioIndex) => {
        if (portfolioIndex === "4") {
          target.classList.remove("filter-button--active");
        } else {
          target.classList.add("filter-button--active");
        }
      }; // не получилось убрать клик по всему блоку ul

      containerFilretHendler(portfolioIndex);

      for (let filterItem of filtersLi) {
        if (filterItem.dataset.filterindex !== portfolioIndex) {
          filterItem.classList.remove("filter-button--active");
        }
      }
    };

    const filterHandlerAll = (event) => {
      const target = event.target;

      const portfolioIndex = target.dataset.filterindex;

      target.classList.add("filter-button--active");

      if (portfolioIndex === "0") {
        // console.log("true");
        for (let i of listLi) {
          i.classList.add("filter-content--active");
        }
      }

      for (let filterItem of filtersLi) {
        if (filterItem.dataset.filterindex !== portfolioIndex) {
          filterItem.classList.remove("filter-button--active");
        }
      }
    };

    filters.addEventListener("click", filterHandler);
    filters.addEventListener("click", filterHandlerAll);
  };

  portfolioContainers.forEach(handler);
};

portfolioContainer({
  portfolio: ".portfolio",
  portfolioFilter: ".portfolio__filter",
  portfolioList: ".portfolio__list",
});
