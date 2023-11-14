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
});
