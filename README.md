# Как запустить приложение?
1) Склонируйте этот репозиторий: `git clone https://github.com/DianaSmertina/free-to-play-games.git`.
2) Перейдите в папку free-to-play-games `cd .\free-to-play-games\`, а затем в папку app: `cd .\app\`.
3) Установите зависимости командой `npm i`.
4) Создайте файл `.env.local` в корне проекта на одном уровне с файлом `package.json`.
5) Зарегистрируйтесь на сайте https://rapidapi.com/digiwalls/api/free-to-play-games-database и получите секретный ключ X-RapidAPI-Key.
6) Скопируйте в созданный файл `.env.local` строку `VITE_API_KEY = "ваш X-RapidAPI-Key"`. Замените `ваш X-RapidAPI-Key` на полученный ключ на предыдущем шаге.
7) Запустите проект командой `npm start`. Приложение станет доступно по адресу http://localhost:3001/.
8) Чтобы запустить тесты и посмотреть покрытие используйте команду `npm run test`
