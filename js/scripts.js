var availableLanguages = [];

function setTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-bs-theme");
    }
}

function setLanguage() {
    var language = new URLSearchParams(new URL(window.location.href).search).get("lang") || navigator.language || navigator.userLanguage;
    if (!availableLanguages.includes(language)) {
        language = "en-GB";
    }
    document.documentElement.lang = language;

    forEachLanguageSelector((li, a) => {
        if (a.getAttribute("value") == document.documentElement.lang) {
            li.classList.add("d-none");
        }
    });

    return language;
}

function initLanguageSelector() {
    forEachLanguageSelector((li, a) => {
        var value = a.getAttribute("value");
            availableLanguages.push(value);

            var baseURL = window.location.origin + window.location.pathname;
            a.href = baseURL + '?lang=' + value;
    });
}

function forEachLanguageSelector(callbackFn) {
    Array.from(document.getElementById("langSelector").querySelectorAll("li"))
        .map(element => [element, element.querySelectorAll("a")[0]])
        .filter(element => element[1] !== null)
        .forEach(a => {
            callbackFn(a[0], a[1]);
        });
}

function init() {
    initLanguageSelector();
    setLanguage();
    translateDocument(`/languages/${document.documentElement.lang}.json`, "waffle-lang").then(() => { });
}