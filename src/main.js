import { backdrop, closeBtn, handleCloseMenu, handleOpenMenu, menuLinks, openBtn } from "./JS/menu";
import { detectCookiePop, handleClosePopUp, popBtns } from "./JS/pop-up";
import { scrollBtn, scrollUp, scrollUpBtnShow } from "./JS/scroll-up";

openBtn?.addEventListener('click', handleOpenMenu);
closeBtn?.addEventListener('click', handleCloseMenu)
popBtns.forEach(btn => {
    btn.addEventListener('click', handleClosePopUp);
})
menuLinks.forEach(link => {
    link.addEventListener('click', handleCloseMenu);
});
backdrop.addEventListener('click', handleCloseMenu);
window.addEventListener('scroll', scrollUpBtnShow);
scrollBtn.addEventListener('click', scrollUp);

detectCookiePop()