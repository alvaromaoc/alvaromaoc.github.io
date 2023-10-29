function setCookie(name, value, validityDays) {
    var allowed = name === 'cookiesEnabled' || getCookie('cookiesEnabled') === 'true';
    if (allowed) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + validityDays);
        const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
        document.cookie = cookieValue;
    }
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

function setTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-bs-theme");
    }

    setCookie('prefersColorScheme', isDark ? "dark" : "light", 365);
}

function isDark(value) {
    if (value === null) {
        return null;
    }
    if (value === 'dark') {
        return true;
    }
    if (value === 'light') {
        return false;
    }
    throw 'Parse error: unresolvable scheme type "' + value + '"';
}

function getCurrentHoursAndMinutes() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedHours = `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedHours}:${formattedMinutes}`;
}