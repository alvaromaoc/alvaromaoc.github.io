export function setAppropriateTheme() {
    const cookiePreference = localStorage.getItem('preferred-theme');
    if (cookiePreference !== null) {
        if (cookiePreference === 'dark') {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }
}

export function changeToDarkTheme() {
    localStorage.setItem('preferred-theme', 'dark');
    setDarkTheme();
}

export function changeToLightTheme() {
    localStorage.setItem('preferred-theme', 'light');
    setLightTheme();
}

export function isDarkCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark";
}

function setDarkTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
}

function setLightTheme() {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-bs-theme");
}