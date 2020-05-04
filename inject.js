
// Inject a <style> tag with the given CSS string.
function injectCSS(cssText) {
  let cssElement = document.createElement("style");
  cssElement.type = "text/css";
  cssElement.innerText = cssText;
  if (document.body) {
    document.body.appendChild(cssElement);
  } else {
    setTimeout(() => {
      document.body.appendChild(cssElement);
    }, 0);
  }
}

let coverObserver = new MutationObserver(() => {
  injectCSS(`body {
    filter: brightness(0.6);
  }`);
  if (window.location.href.startsWith("https://docs.google.com/spreadsheets/d/")) {
    injectCSS(`
      #waffle-grid-container {
        filter: invert(1) hue-rotate(180deg);
      }`);
  }
  if (window.location.href.startsWith("https://drive.google.com/drive/u/")) {
    injectCSS(`
      svg {
        filter: invert(1) hue-rotate(180deg);
      }
      .a-w-Mr::after {
        background: none !important;
      }
      `);
  }
});
coverObserver.observe(document.documentElement, { childList: true });
