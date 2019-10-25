export function highlightFunc(content, highlightText) {
    if (!highlightText || highlightText == "") {
        return content;
    }

    var pattern = new RegExp(highlightText, 'g'),
        replaceWith = '<mark>$&</mark>';
    return content.replace(pattern, replaceWith);
}
