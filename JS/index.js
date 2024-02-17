let task = document.getElementById('inputedTask');
let taskContainer = document.getElementById('listContainer');
let taskArray = [];

let prevTask = localStorage.getItem('tasks');

if(prevTask){
    taskArray = JSON.parse(prevTask);
}
displayTask();
const addTask = () => {
    if(task.value) {
        taskArray.push({'task' : task.value});
        task.value = '';
        saveTask(taskArray);
        displayTask();

    }
    else {
        alert('Task Field Cannot Be Empty.');
    }
}

const saveTask = (taskArray) => {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function displayTask() {
    let taskList = '';  
        if(taskArray.length > 0){
            taskArray.forEach((tasks, i) => {
                taskList += `<li class="d-flex">
                <div class="float-left">
                    <input type="checkbox" name="checkBox">
                    <p class='mb-0'>${tasks.task}</p>
                </div>
                <div class="float-right">
                    <p class='mb-0 me-1' onclick='editTask(${i})'>Edit</p>
                    <p class='mb-0' onclick='deleteTask(${i})'>Delete</p>
                </div>
            </li>`;
            taskContainer.innerHTML = taskList;
        });
        }else{
            taskContainer.innerHTML = '';
        }
}


const editTask = (i) => {
    alert(i)
}

//Last Data doesn't delete.........ISSUE
const deleteTask = (i) => {
    // alert(i)
    taskArray.splice(i,1);
    saveTask(taskArray);
    displayTask();
}
