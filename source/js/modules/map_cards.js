import {getRandomInt} from "./utils";

const INDEPENDENT_LIVING = "Independent living";
const SUPPORT_AVALIABLE = "Restaurant & Support available";
const MAIN_BODY_BUTTON = ".main-body__button";
const APARTS_LIST_ITEM = "aparts-list__item";
const CARD_IMAGE = ".card__image";
const CARD_TYPE = ".card__type";
const CARD_TITLE = ".card__title";
const CARD_ADDRESS = ".card__address";
const CARD_PRICE = ".card__price";
const CARD_ORANGE_BACKGROUND = "card__type--orange-background";


export const mapCards = (data, block) => {
  block.textContent = "";
  const seeMoreButton = document.querySelector(MAIN_BODY_BUTTON);

  if (data.length == 0) {
    seeMoreButton.style.display = "none";
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.append(document.getElementById("notification").content.cloneNode(true));
    block.append(notification);
  } else {
    seeMoreButton.style.display = "block";
    for (let i = 0; i < 6; i++) {
      if (data[i]) {
        const card = document.createElement("li");
        card.classList.add(APARTS_LIST_ITEM);
        card.append(document.getElementById("card").content.cloneNode(true));

        let imageIndex = getRandomInt(1, 5);
        card.querySelector(CARD_IMAGE).setAttribute("src", "./img/apart" + imageIndex + ".png");

        switch (data[i].type) {
          case "IndependentLiving" :
            card.querySelector(CARD_TYPE).textContent = INDEPENDENT_LIVING;
            break;
          case "SupportAvailable" :
            card.querySelector(CARD_TYPE).classList.add(CARD_ORANGE_BACKGROUND);
            card.querySelector(CARD_TYPE).textContent = SUPPORT_AVALIABLE;
            break;
        }
        card.querySelector(CARD_TITLE).textContent = data[i].title;
        card.querySelector(CARD_ADDRESS).textContent = data[i].address;
        card.querySelector(CARD_PRICE).textContent = "£" + data[i].price;
        block.append(card);
      }
    }
  }
};
