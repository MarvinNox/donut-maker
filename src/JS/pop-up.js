const popup = document.querySelector('[data-cookie-open]');
export const popBtns = document.querySelectorAll('[data-btn-close]')
const LS_KEY = 'pop-open';

export function handleClosePopUp() {
    if (!popup) return;
    popup.dataset.cookieOpen = 'false';
    setPopUp(false);
}

export function detectCookiePop() {
    if (!popup) return;
    const data = localStorage.getItem(LS_KEY);
    const popUpState = data !== null ? JSON.parse(data) : true;
    popup.dataset.cookieOpen = String(popUpState);
}

function setPopUp(state) {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
};