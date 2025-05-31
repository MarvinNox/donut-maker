import { detectCookiePop, handleClose, popBtns } from "./JS/pop-up";


popBtns.forEach(btn => {
    btn.addEventListener('click', handleClose);
})
detectCookiePop()