const defaultTitle = "WDBG";
const defaultFavicon = "https://wowdabug.github.io/wdbg/images/favicon.png";
const title = localStorage.getItem('customTitle');
const favicon = localStorage.getItem('customFavicon');

document.title = title || defaultTitle;

let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = favicon || defaultFavicon;

document.addEventListener('keydown', e => {
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    const panicKey = localStorage.getItem('panicKey');
    const panicUrl = localStorage.getItem('panicUrl');
    if (panicKey && panicUrl && e.key.toLowerCase() === panicKey) {
        window.open(panicUrl, '_blank');
    }
});
