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
  init(navElem, contentElem, articlesArr = articles) {
    if (!navElem || !articlesArr || !contentElem) {
      console.error(`Не определен элемент навигации или элемент контента`);
      return null;
    }
    this.articles = articlesArr;
    navElem.innerHTML = ``;
    for (let i = 0; i < articlesArr.length; i++) {
      let navItem = document.createElement(`button`);
      navItem.classList.add(`menu__item`);
      navItem.textContent = this.articles[i].title;
      navItem.setAttribute(`id`, `art#${i}`);
      navElem.appendChild(navItem);
    }
    navElem.addEventListener(`click`, function (evt) {
      if (!(evt.target.tagName === `BUTTON`)) {
        return;
      }
      contentController.showContent(contentElem, +evt.target.id.split(`#`)[1]);
    });
    return navElem;
  },
  showContent(contentElem, articleIndex) {
    if (!contentElem || articleIndex === undefined) {
      console.error(`Не определен элемент контента или индекс статьи в массиве`);
      return null;
    }
    contentElem.innerHTML = ``;
    let h2Elem = document.createElement(`h2`);
    h2Elem.textContent = this.articles[articleIndex].title;
    h2Elem.classList.add(`text__title`);
    let imgElem = document.createElement(`img`);
    imgElem.setAttribute(`src`, this.articles[articleIndex].imgSrc);
    imgElem.setAttribute(`alt`, this.articles[articleIndex].title);
    imgElem.classList.add(`text__img`);
    let sectionElem = document.createElement(`section`);
    sectionElem.textContent = this.articles[articleIndex].textContent;
    sectionElem.classList.add(`text__content`);
    contentElem.appendChild(h2Elem);
    contentElem.appendChild(imgElem);
    contentElem.appendChild(sectionElem);
    return contentElem;
  }
};

document.contentController = contentController;
