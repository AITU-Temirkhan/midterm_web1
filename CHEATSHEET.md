# Шпаргалка для защиты (не заливай в репозиторий, если не хочешь)
## Файлы
- index.html, schedule.html, tickets.html: 3 страницы с одним меню и футером.
- css/style.css: весь стиль, блоки 1-10 с комментариями. js/script.js: 5 коротких блоков с комментариями.
## Как менять
- Цвета: style.css, :root (--sky, --gold, --night, --card, --text).
- Шрифты: font-family в body и h1,h2,h3 (+ ссылка Google Fonts в <head>).
- Дата отсчёта: script.js, const target = new Date('2027-07-01T19:00:00+05:00').
- Цены: tickets.html, data-price в <option> и число в карточке.
- Новая строка расписания: schedule.html, скопируй <tr data-city="...">.
- Скорость бегущей строки: .ticker div, animation: scroll 25s.
- Колонки карточек: .city-grid, grid-template-columns.
- Размер заголовка: .hero h1 и media queries 768px / 1200px.
## Что объяснять
- Семантика: header, nav, main, section, article, footer.
- Flexbox: .stats, .countdown. Grid: .city-grid. Media queries: mobile-first, 768px и 1200px.
- Bootstrap: navbar-expand-md, container, row/col, form-control, form-select, table, btn. Поверх свой стиль.
- CSS: переменные, @keyframes (rise, glow, scroll), :hover, transition, ::before с attr(data-n).
- JS: setInterval для таймера; IntersectionObserver показывает блоки при прокрутке; scroll-событие двигает горы (параллакс); фильтр прячет строки через row.hidden; калькулятор = цена * количество.
