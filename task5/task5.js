const getTasksBtn = document.getElementById('getTasksBtn');
const userIdInput = document.getElementById('userIdInput');
const tasksList = document.getElementById('tasksList');

getTasksBtn.addEventListener('click', () => {
    const userId = userIdInput.value;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пользователь с указанным id не найден');
            }
            return response.json();
        })
        .then(data => {
            const tasks = data;
            const tasksUl = document.createElement('ul');
            tasks.forEach(task => {
                const taskLi = document.createElement('li');
                taskLi.textContent = task.title;
                if (task.completed) {
                    taskLi.style.textDecoration = 'line-through';
                }
                tasksUl.appendChild(taskLi);
            });
            tasksList.innerHTML = '';
            tasksList.appendChild(tasksUl);
        })
        .catch(error => {
            tasksList.textContent = error.message;
        });
});