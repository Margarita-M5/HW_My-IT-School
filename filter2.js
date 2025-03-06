/**
 *
 * @param {string} content
 * @returns {HTMLDivElement}
 */
const createTooltip = (content) => {
  let tooltipContainer = document.createElement("div");
  tooltipContainer.classList.add("tooltip-container");
  tooltipContainer.style.top = "115px";
  tooltipContainer.style.transform = "translateY(95%) translateX(43%)";

  let tooltipContent = document.createElement("p");
  tooltipContent.classList.add("tooltip-content");
  tooltipContent.innerText = content;

  tooltipContainer.append(tooltipContent);

  return tooltipContainer;
};

const tooltips = (tooltipsSelector) => {
  let tooltipsItem = document.querySelectorAll(tooltipsSelector);

  /**
   *
   * @param {HTMLElement} tooltipItem
   */
  let tooltip = (tooltipItem) => {
    let tooltipContainer = null;
    let content = tooltipItem.dataset.content;
    console.log(content);

    let tooltipHandler = (event) => {
      tooltipContainer = createTooltip(content);
      tooltipItem.append(tooltipContainer);
    };

    const mouseLeaveHandler = () => {
      if (!tooltipContainer) return;
      tooltipContainer.remove();
      tooltipContainer = null;
    };

    tooltipItem.addEventListener("mouseenter", tooltipHandler);
    tooltipItem.addEventListener("mouseleave", mouseLeaveHandler);
  };

  tooltipsItem.forEach(tooltip);
};

tooltips(".tooltip");
