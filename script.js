document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections[0].style.display = 'block'; // Mostrar la primera sección por defecto

    document.addEventListener('click', function (e) {
        const target = e.target;

        if (target.tagName === 'A' && target.hash) {
            const targetSection = document.querySelector(target.hash);

            if (targetSection) {
                sections.forEach(section => section.style.display = 'none');
                targetSection.style.display = 'block';
            }
        }
    });

    // Agregar cambio de tema
    const body = document.body;
    const themeSwitcher = document.createElement('div');
    themeSwitcher.classList.add('theme-switcher');
    themeSwitcher.textContent = 'Toggle Theme';
    document.body.appendChild(themeSwitcher);

    themeSwitcher.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
    });
});
