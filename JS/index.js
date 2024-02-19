let task = document.getElementById('inputedTask');
let taskContainer = document.getElementById('listContainer');
let checkBox = document.querySelectorAll('.checkBox');
let pendingTask = document.querySelectorAll('task');
let addBtn = document.getElementById('addBtn');
let btnValue = addBtn.value;
let taskArray = [];
let edit_id = null;

let prevTask = localStorage.getItem('tasks');

if(prevTask){
    taskArray = JSON.parse(prevTask);
}

displayTask();

const addTask = () => {
    if(edit_id!= null && task.value!='' ){
        //edit
        taskArray.splice(edit_id,1,{'task' : task.value});
        edit_id = null;
    }else if(task.value!=''){
        taskArray.push({'task' : task.value});
    }else{
        alert('You Should Input The Task First.')
    }

        task.value = '';
        saveTask(taskArray);
        addBtn.value = btnValue;
}

const saveTask = (taskArray) => {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    displayTask();
}

function displayTask() {
    let taskList = '';  
        if(taskArray.length > 0){
            taskArray.forEach((tasks, i) => {
                taskList += `<li class="d-flex" id='${i}'>
                <div class="float-left">
                    <input type="checkbox" class='checkBox' name="checkBox" id='${i}')'>

                    ${checkBox.checked?
                        `<p class='mb-0 task'><s>${tasks.task}</s></p>`
                    :
                        `<p class='mb-0 task'>${tasks.task}</p>`
                    }

                </div>
                <div class="float-right">
                    <p class='mb-0 me-1' onclick='editTask(${i})'>Edit</p>
                    <p class='mb-0' onclick='deleteTask(${i})'>Delete</p>
                </div>
            </li>`;
            taskContainer.innerHTML = taskList;
        });
        }else{
            taskContainer.innerHTML = taskList;
        }
}

// const lineThrough = (i) => {
//     // taskArray.forEach(item =>{
//     //     alert(item);
//     // })
//     // alert(taskArray.length)

//     // alert(pendingTask)
//     // alert(i)
//     // alert(li[i]);
//     // li[i].style.textDecorationLine = 'line-through';
//     // taskArray[i].style.textDecorationLine = 'line-through';

// }


const editTask = (i) => {
    // alert(i)
    edit_id = i;
    task.value = taskArray[i].task;
    addBtn.value = 'Submit Changes'
}

const deleteTask = (i) => {
    taskArray.splice(i,1);
    saveTask(taskArray);
}