import { closeBtn, handleCloseMenu, handleOpenMenu, openBtn } from "./JS/menu";
import { detectCookiePop, handleClosePopUp, popBtns } from "./JS/pop-up";

openBtn.addEventListener('click', handleOpenMenu);
closeBtn.addEventListener('click', handleCloseMenu)
popBtns.forEach(btn => {
    btn.addEventListener('click', handleClosePopUp);
})

detectCookiePop()