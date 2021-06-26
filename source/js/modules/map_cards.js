const INDEPENDENT_LIVING = "Independent living";
const SUPPORT_AVALIABLE = "Restaurant & Support available";

export const mapCards = (data, block) => {
  block.textContent = "";
  const seeMoreButton = document.querySelector(".main-body__button");

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
        card.classList.add("aparts-list__item");
        card.append(document.getElementById("card").content.cloneNode(true));

        let imageIndex = getRandomInt(1, 5);
        card.querySelector(".card__image").setAttribute("src", "./img/apart" + imageIndex + ".png");

        switch (data[i].type) {
          case "IndependentLiving" :
            card.querySelector(".card__type").textContent = INDEPENDENT_LIVING;
            break;
          case "SupportAvailable" :
            card.querySelector(".card__type").classList.add("card__type--orange-background");
            card.querySelector(".card__type").textContent = SUPPORT_AVALIABLE;
            break;
        }
        card.querySelector(".card__title").textContent = data[i].title;
        card.querySelector(".card__address").textContent = data[i].address;
        card.querySelector(".card__price").textContent = "£" + data[i].price;
        block.append(card);
      }
    }
  }
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const debounce = (callback, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  }
}
