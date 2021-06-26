import {mapCards} from "./map_cards";

const DOWNLOAD_URL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";
const STATUS_CODE_OK = "200";
const FILTER_INPUT_CLASS = ".filter-block__input";

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
      let filteredData = data;
      const cardBlock = document.querySelector(".main-body__aparts-list");
      mapCards(filteredData, cardBlock);
      const filterInput = document.querySelector(FILTER_INPUT_CLASS);
      filterInput.addEventListener("input", (evt) => {
          if (evt.currentTarget.value.length > 3) {
            filteredData = filterData(data, evt);
            mapCards(filteredData, cardBlock);
          } else if (evt.currentTarget.value.length === 0) {
            mapCards(data, cardBlock);
          }
        }
      );
    }
  },
  (status) => {
    console.log(status);
  }
);

const filterData = (data, evt) => {
  let filteredData = data.filter(appart => appart.title.toLowerCase().includes(evt.currentTarget.value.toLowerCase()));
  return filteredData;
};
