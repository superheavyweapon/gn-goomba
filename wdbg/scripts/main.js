function loadJSFromURL() {
  const url = localStorage.getItem('JS');
  const fallback = 'https://wowdabug.github.io/wdbg/scripts/js/default.js';

  function load(src, onFail) {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => {};
    s.onerror = onFail;
    document.body.appendChild(s);
  }

  if (url && url.trim()) {
    load(url, () => load(fallback, () => {}));
  } else {
    load(fallback, () => {});
  }
}

document.addEventListener('DOMContentLoaded', loadJSFromURL);
