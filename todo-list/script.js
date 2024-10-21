document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.querySelector('#add-task-btn');
    const modal = document.querySelector('#modal');
    const tasksContainer = document.querySelector('#tasks');

    addTaskBtn.addEventListener('click', function(){
        modal.style.display = 'flex';
        let taskName = document.querySelector('#task-name-input');
        taskName.classList.remove('input-error');
    });

    function addTask(){
        let taskName = document.querySelector('#task-name-input');
        let taskDescription = document.querySelector('#task-description-input').value;
        let taskDate = new Date(document.querySelector('#task-date-input').value).toLocaleDateString('es-ES');

        if (taskName.value) {
            if(taskDate != 'Invalid Date'){
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                taskElement.innerHTML = `
                    <div class="data">
                        <p class="task-name">${taskName.value}</p>
                        <p class="max-date">${taskDate}</p>
                        <p class="task-description">${taskDescription}</p>
                    </div>
                    <img src="images/delete_icon.png" class="delete-task" alt="Eliminar tarea">
                `;

                // Añadir la funcionalidad de eliminar tarea
                const deleteBtn = taskElement.querySelector('.delete-task');
                deleteBtn.addEventListener('click', function() {
                    taskElement.remove();
                });

                tasksContainer.appendChild(taskElement);
                modal.style.display = 'none';
                document.querySelector('#task-form').reset();
            }else{
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                taskElement.innerHTML = `
                    <div class="data">
                        <p class="task-name">${taskName.value}</p>
                        <p class="task-description">${taskDescription}</p>
                    </div>
                    <img src="images/delete_icon.png" class="delete-task" alt="Eliminar tarea">
                `;

                // Añadir la funcionalidad de eliminar tarea
                const deleteBtn = taskElement.querySelector('.delete-task');
                deleteBtn.addEventListener('click', function() {
                    taskElement.remove();
                });

                tasksContainer.appendChild(taskElement);
                modal.style.display = 'none';
                document.querySelector('#task-form').reset();
            }

        } else {
            taskName.classList.add('input-error');
        }
    }
    
    function cancelTask() {
        modal.style.display = 'none';
        document.querySelector('#task-form').reset();
        taskName.classList.remove('input-error');
    }

    // Asignar funciones globalmente
    window.addTask = addTask;
    window.cancelTask = cancelTask;

    // Añadir event listener para las tareas existentes (si hay alguna)
    const existingTasks = document.querySelectorAll('.delete-task');
    existingTasks.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.parentElement.remove();
        });
    });
});
