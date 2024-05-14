const menuItems = document.querySelectorAll('.nav-item');
const mainContent = document.querySelector('.main-content');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        const sectionId = menuItem.getAttribute('data-section-id');
        const section = document.getElementById(sectionId);

        mainContent.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
});
