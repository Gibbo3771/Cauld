const publish = (channel, payload) => {
  let e = new CustomEvent(channel, {
    detail: payload
  });
  document.dispatchEvent(e);
};

const subscribe = (channel, callback) => {
  document.addEventListener(channel, callback);
};

export { publish, subscribe };
