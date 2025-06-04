const menu = document.querySelector('[data-menu]');
export const openBtn = document.querySelector('[data-menu-open]');
export const closeBtn = document.querySelector('[data-menu-close]');
export const menuLinks = document.querySelectorAll('[data-menu-link]');
export const backdrop = document.querySelector('[data-menu-backdrop]');

export function handleOpenMenu() {
    if (menu.classList.contains('active')) {
        handleCloseMenu();
    } else {
        menu.classList.add('active');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

export function handleCloseMenu() {
    menu.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
}
