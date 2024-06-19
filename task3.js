// Проверяем наличие записей в localStorage
if (!localStorage.getItem('userName')) {
    // Если пользователь зашел в первый раз
    const userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('userName', userName);
    const currentDate = new Date();
    localStorage.setItem('lastVisit', currentDate.toLocaleString());
} else {
    // Если пользователь уже посещал страницу
    const userName = localStorage.getItem('userName');
    const lastVisitDate = new Date(localStorage.getItem('lastVisit'));
    const currentDate = new Date();
    localStorage.setItem('lastVisit', currentDate.toLocaleString());
    
    const lastVisitFormatted = lastVisitDate.toLocaleString();
    
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisitFormatted}`);
}