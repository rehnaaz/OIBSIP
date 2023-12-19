function addTask() {
    var taskTitle = document.getElementById('taskTitle').value;
    var taskText = document.getElementById('newTask').value;
    if (taskTitle.trim() === '' || taskText.trim() === '') {
        alert('Please enter both title and task description');
        return;
    }

    var taskList = document.getElementById('task-list');
    var li = document.createElement('li');

    var titleSpan = document.createElement('span');
    titleSpan.innerText = taskTitle + '';
    li.className = "taskTitle task-item";

    var input = document.createElement('input');
    input.type = 'text';
    input.value = taskText;
    input.setAttribute('readonly', true);

    var editButton = document.createElement('button');
    editButton.innerHTML = 'Update';
    editButton.onclick = function() {
        input.removeAttribute('readonly');
        input.focus();
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(titleSpan);
    li.appendChild(input);
    li.appendChild(editButton);
    // li.appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    document.getElementById('taskTitle').value = '';
    document.getElementById('newTask').value = '';
}