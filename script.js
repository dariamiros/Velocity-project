//TABS
const tabsBtns = document.querySelectorAll('.tabs__nav button');// Получаем все кнопки и элементы вкладок
const tabItems = document.querySelectorAll('.tabs__item');// Добавляем обработчик событий для каждой кнопки

// Функция скрывпет табы и убирает класс active у всех кнопок
function hideTabs() { // Функция скрывает все табы и убирает класс active у всех кнопок
    tabItems.forEach(item => item.classList.add("hide")); // Скрываем все табы
    tabsBtns.forEach(item => item.classList.remove("active")); // Убираем класс active у всех кнопок
}


//Функция показывает переданный номер таба и делает активной соответствующую кнопку
function showTab(index) { // Принимаем индекс таба, который нужно показать
    tabItems[index].classList.remove("hide"); // Показываем таб с переданным индексом
    tabsBtns[index].classList.add("active");    // Делаем активной кнопку с переданным индексом
}

hideTabs(); // Скрываем все табы при загрузке страницы
showTab(1);// Показываем первый таб по умолчанию

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => { // Добавляем обработчик клика для каждой кнопки
    hideTabs(); // Скрываем все табы при клике на кнопку
    showTab(index); // Показываем таб, соответствующий нажатой кнопке
}));

//ANCHORS

const anchors = document.querySelectorAll(".header_nav a"); // Получаем все якорные ссылки в навигации

anchors.forEach(anc =>{   // Проходим по каждой якорной ссылке
    anc.addEventListener("click", function(event){ // Добавляем обработчик клика для каждой якорной ссылки
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки (прыжок к якорю)

        const id = anc.getAttribute("href");

        const elem = document.querySelector(id); // Получаем элемент, к которому нужно прокрутить

        window.scroll({ // Прокручиваем страницу к элементу с плавной анимацией
            top: elem.offsetTop -80, // Получаем вертикальное положение элемента относительно верхней части страницы - 80 пикселей (для учета высоты шапки)
            behavior: "smooth" // Указываем, что прокрутка должна быть плавной
        })
        ;})

})
