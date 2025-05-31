const menu = document.querySelector('[data-menu]');
export const openBtn = document.querySelector('[data-menu-open]');
export const closeBtn = document.querySelector('[data-menu-close]');


export function handleOpenMenu() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
}
export function handleCloseMenu() {
    menu.classList.remove('active');
    document.body.style.overflow = '';
}
