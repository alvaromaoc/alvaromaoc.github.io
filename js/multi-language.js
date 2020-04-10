function getTranslation(json, jsonPath) {
    var value = json;
    for (var property of jsonPath.split(".")) {
        value = value[property];
    }
    return value;
}

async function translateDocument(languagePath, attribute) {
    await translateElement(languagePath, attribute, document);
}

async function translateElement(languagePath, attribute, parent) {
        const dictionary = await (await fetch(languagePath)).json();
        var elements = parent.querySelectorAll(`[${attribute}]`);
        for (var element of elements) {
            var dictionaryReference = element.getAttribute(attribute);
            if (dictionaryReference.length > 0) {
                element.innerHTML = getTranslation(dictionary, dictionaryReference);
            } else if (element.innerHTML.length > 0) {
                element.setAttribute(attribute, element.innerHTML);
                element.innerHTML = getTranslation(dictionary, element.innerHTML);
            } else {
                console.warning(`Missing value for ${attribute}`);
            }
        }
}