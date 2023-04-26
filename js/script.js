
// Ожидаем полной загрузки страницы
window.addEventListener('DOMContentLoaded', () => {

    // Находим кнопку меню и меню
    const menuBtn = document.querySelector('.burger__btn');
    const menu = document.querySelector('.header-menu');

    // Добавляем слушателя событий на кнопку меню
    menuBtn.addEventListener('click', togleClasses);

    // Функция, которая переключает классы у кнопки меню и меню
    function togleClasses() {
        menuBtn.classList.toggle('burger__btn_active');
        menu.classList.toggle('header-menu_active');
        menuBtn.classList.toggle('burger__btn_rotate');
    }

    // Добавляем слушателя событий на окно
    window.addEventListener('click', (e) => {
        const isOverflow = e.target.classList;
        // Проверяем, был ли клик вне меню и не на кнопке меню
        if (!isOverflow.contains('header-menu__list') &&
            !isOverflow.contains('burger__line') &&
            !isOverflow.contains('burger__btn') &&
            menu.classList.contains('header-menu_active')) {
            // Если клик был вне меню, закрываем его
            togleClasses();
        }
    });
});
