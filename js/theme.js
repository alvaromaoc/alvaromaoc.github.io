export function prefersDarkTheme() {
    var cookiePreference = localStorage.getItem('preferred-theme');
    if (cookiePreference !== null) {
        return cookiePreference === 'dark';
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function setPreferredDarkTheme() {
    localStorage.setItem('preferred-theme', 'dark');
    setDarkTheme();
}

export function setPreferredLightTheme() {
    localStorage.removeItem('preferred-theme');
    setLightTheme();
}

export function isDarkCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark";
}

export function setDarkTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
}

export function setLightTheme() {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-bs-theme");
}