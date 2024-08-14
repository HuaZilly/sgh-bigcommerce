export default function () {
    var input = document.createElement('input');
    return typeof input.reportValidity === 'function';
}
