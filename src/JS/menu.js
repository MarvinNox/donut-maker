const menu = document.querySelector('[data-menu]');
export const openBtn = document.querySelector('[data-menu-open]');
export const closeBtn = document.querySelector('[data-menu-close]');
export const menuLinks = document.querySelectorAll('[data-menu-link]');
export const backdrop = document.querySelector('[data-backdrop-open]');

export function handleOpenMenu() {
    menu.dataset.menu = 'true';
    backdrop.dataset.backdropOpen = 'true';
    document.body.style.overflow = 'hidden';
}

export function handleCloseMenu() {
    menu.dataset.menu = 'false';
    backdrop.dataset.backdropOpen = 'false';
    document.body.style.overflow = 'hidden';
}
