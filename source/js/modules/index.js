const DOWNLOAD_URL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";
const STATUS_CODE_OK = "200";
const INDEPENDENT_LIVING = "Independent living";
const SUPPORT_AVALIABLE = "Restaurant & Support available";

const fetchData = (onLoad, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.readyState === 4 && xhr.status == STATUS_CODE_OK) {
      onLoad(xhr.response);
    } else {
      onError(xhr.status);
    }
  });

  xhr.addEventListener('error', () => {
    onError('Произошла ошибка. Обратитесь к администратору.');
  });

  xhr.addEventListener('timeout', () => {
    onError('Превышено время ожидания ответа от сервера.');
  });

  xhr.timeout = 10000;

  xhr.open('GET', DOWNLOAD_URL, true);
  xhr.send();
}

fetchData((data) => {
  if (data) {
    mapCards(data);

  }
}, (status) => {
  console.log(status);
});

const mapCards = (data) => {
  const cardBlock = document.querySelector(".main-body__aparts-list");

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("li");
    card.classList.add("aparts-list__item");
    card.append(document.getElementById("card").content.cloneNode(true));

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
    cardBlock.append(card);
  }
}
