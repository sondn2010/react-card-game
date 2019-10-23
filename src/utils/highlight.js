export function highlightFunc(content, highlightText) {
    var
        pattern = new RegExp(highlightText, 'g'),
        replaceWith = '<mark>$&</mark>';
    return content.replace(pattern, replaceWith);
}
