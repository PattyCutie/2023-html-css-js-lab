// function openBurgerMenu(menuClass) {
//     const sidebarMenu = document.querySelector(menuClass);
//     sidebarMenu.classList.toggle('sidebar-menu-expanded');
    
// }

// function openHomeMenu(menuClass) {
//     const sidebarMenu = document.querySelector(menuClass);
//     sidebarMenu.classList.toggle('sidebar-menu-expanded');
// }

function toggleMenu(menuClass) {
    const menu = document.querySelector(menuClass);
    const expandedClass = "sidebar-menu-expanded";

    // Close other menus
    const menus = document.querySelectorAll(".sidebar-burger-menu, .sidebar-home-menu, .sidebar-setting-menu");
    menus.forEach((m) => {
        if (m !== menu && m.classList.contains(expandedClass)) {
            m.classList.remove(expandedClass);
        }
    });

    // Toggle the current menu
    menu.classList.toggle(expandedClass);
}