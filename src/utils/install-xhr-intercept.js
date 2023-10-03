const origin_xhrOpen = window.XMLHttpRequest.prototype.open;

window.fetch_count = 0;

window.XMLHttpRequest.prototype.open = function () {
  // do something with the method, url and etc.
  window.fetch_count++;
  const onResponse = function () {
    // do something with the response text
    window.fetch_count--;
    this.removeEventListener("load", onResponse);
  };
  this.addEventListener("load", onResponse);

  return origin_xhrOpen.apply(this, arguments);
};

const origin_fetch = window.fetch;
window.fetch = async (...args) => {
  window.fetch_count++;
  return origin_fetch(...args).finally(() => {
    window.fetch_count--;
  });
};
