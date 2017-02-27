export function displayErrorMessage(selector, message) {
    var errorMessage = `<div class="alert alert-danger">${message}</div></span>`;
    $(selector).html(errorMessage);
}

export function displayWarningMessage(selector, message) {
    var errorMessage = `<div class="alert alert-warning">${message}</div></span>`;
    $(selector).html(errorMessage);
}

export function clearErrorMessage(selector) {
    $(selector).empty();
}
