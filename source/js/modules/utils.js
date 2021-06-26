export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const debounce = (callback, delay) => {
  let timeout;
  return function () {
    const fnCall = () => {
      callback.apply(this, arguments);
    }
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, delay);
  }
}
