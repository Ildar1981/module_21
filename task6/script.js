const pageNumberInput = document.getElementById('pageNumberInput');
const limitInput = document.getElementById('limitInput');
const requestBtn = document.getElementById('requestBtn');
const imageList = document.getElementById('imageList');

// Проверка и загрузка данных из localStorage
let storedPage = localStorage.getItem('lastPage');
let storedLimit = localStorage.getItem('lastLimit');

if (storedPage && storedLimit) {
    pageNumberInput.value = storedPage;
    limitInput.value = storedLimit;
    makeRequest(storedPage, storedLimit);
}

requestBtn.addEventListener('click', () => {
    const pageNumber = parseInt(pageNumberInput.value);
    const limit = parseInt(limitInput.value);

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10 || isNaN(limit) || limit < 1 || limit > 10) {
        imageList.textContent = "Номер страницы и/или лимит вне диапазона от 1 до 10";
    } else {
        makeRequest(pageNumber, limit);
    }
});

function makeRequest(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('lastPage', page);
            localStorage.setItem('lastLimit', limit);

            imageList.innerHTML = '';
            data.forEach(item => {
                const img = document.createElement('img');
                img.src = item.download_url;
                imageList.appendChild(img);
            });
        })
        .catch(error => {
            imageList.textContent = "Ошибка при получении изображений";
        });
}