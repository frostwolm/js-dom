const articles = [
  {title: `Title1`,
    imgSrc: `img\art1.png`,
    textContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {title: `Title2`,
    imgSrc: `img\art2.png`,
    textContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {title: `Title3`,
    imgSrc: `img\art3.png`,
    textContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {title: `Title4`,
    imgSrc: `img\art4.png`,
    textContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
];

const contentController = {
  init(navElem, articlesArr) {
    if (!navElem || !articlesArr) {
      console.error(`Не определен элемент навигации или массив статей`);
      return null;
    }
    navElem.innerHTML = ``;
    for (let i = 0; i < articlesArr.length; i++) {
      let navItem = document.createElement(`button`);
      navItem.classList.add(`menu__item`);
      navItem.textContent = articlesArr[i].title;
      navElem.appendChild(navItem);
    }
    return navElem;
  },
  // TODO: create nav function
  // TODO: showcontent function
  // TODO: hidecontent function
};

document.addEventListener("DOMContentLoaded", contentController.init);
