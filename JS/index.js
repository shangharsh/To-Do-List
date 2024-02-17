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
    taskArray.forEach(task => {
            taskList += `<li class="d-flex">
            <div class="float-left">
                <input type="checkbox" name="checkBox">
                <p class='mb-0'>Hi</p>
            </div>
            <div class="float-right">
                <p class='mb-0'>Edit</p>
                <p class='mb-0'>Delete</p>
            </div>
        </li>`;
        taskContainer.innerHTML = taskList;
    });
}



const editTask = () => {}

const deleteTask = () => {}









// let todoTask = [];
// const task = document.getElementById('inputedTask');
// const listContainer = document.getElementById('listContainer');
// let radio = document.getElementsByClassName('radio');
// const listItem = document.querySelectorAll('#listContainer li');

// let deleteButtons;
// let i = 0;

// let count;
// let parentUl;
// let childLi = [];
// let divContainer;

// const addFunc = () =>{

//     if(task.value){
        
//         const li = document.createElement('li');
//         li.id = `list${i}`;
//         li.classList.add('list-group-item', 'listItems', 'rounded' ,'ps-2' ,'pe-2', 'pb-2', 'pt-2', 'mt-2', 'mb-2', 'w-100','text-bg-light');

//         const div = document.createElement('div');
//         div.classList.add('divContainer','d-flex');
//         divContainer = document.getElementsByClassName('divContainer')

//         const radioContainer = document.createElement('div');
//         radioContainer.classList.add('radioContainer','d-flex', 'justify-content-center', 'align-items-center');
//         radioContainer.innerHTML = `<input type='checkbox' class='me-2 radio' onclick='lineThrough()'/>`;
//         div.appendChild(radioContainer);

//         const taskContainer = document.createElement('div');
//         taskContainer.classList.add('taskContainer', 'w-100','d-flex', 'justify-content-between', 'align-items-center');
        
//         const p = document.createElement('p');
//         p.classList.add('mb-0', 'paragraph')
//         p.innerText = task.value.toUpperCase();
//         todoTask.push({'task' : p.innerHTML});
//         taskContainer.appendChild(p);

//         const iconsContainer = document.createElement('div');
//         iconsContainer.classList.add('iconsContainer','d-flex', 'justify-content-center', 'align-items-center');

//         const eBtn = document.createElement('button');
//         eBtn.classList.add('border-0', 'btn', 'btn-primary', 'me-3', 'edit');
//         eBtn.id = `editBtn${i}`;
//         const editSpan = document.createElement('span');
//         editSpan.innerText = 'edit_note';
//         editSpan.classList.add('material-symbols-outlined','d-flex', 'justify-content-center', 'align-items-center')
//         eBtn.appendChild(editSpan);
//         iconsContainer.appendChild(eBtn);

//         const dBtn = document.createElement('button');
//         dBtn.classList.add('border-0', 'btn', 'btn-danger', 'delete');
//         dBtn.id = `deleteBtn${i}`;
//         dBtn.setAttribute('onclick', `deleteBtn()`);
//         const deleteSpan = document.createElement('span');
//         deleteSpan.innerText = 'delete';
//         deleteSpan.classList.add('material-symbols-outlined','d-flex', 'justify-content-center', 'align-items-center');
//         dBtn.appendChild(deleteSpan);
//         iconsContainer.appendChild(dBtn);

//         taskContainer.appendChild(iconsContainer);  
//         div.appendChild(taskContainer);
//         li.appendChild(div);

//         task.value = '';
//         listContainer.appendChild(li);
//         i++;
//         parentUl = document.getElementById('listContainer');
//         childLi = document.querySelectorAll('#listContainer .listItems');
//         console.log(todoTask);
//     }else{
//         alert("Task Field cannot be empty.");
//     }
// }


// const lineThrough = () =>{
//     let paragraph = document.getElementsByClassName('paragraph');
//     const edit = document.getElementsByClassName('edit');
//     const del = document.getElementsByClassName('delete');

//     for(let i =0; i<radio.length; i++){
//         if(radio[i].checked){
//             paragraph[i].style.textDecorationLine = "line-through";
//             edit[i].disabled = true;
//             del[i].disabled = true;
//         }else{
//             paragraph[i].style.textDecorationLine = "none";
//             edit[i].disabled = false;
//             del[i].disabled = false;
//         }
//     }
// }

//     //     if(deleteButtons) {
//     // //         deleteButtons.forEach(button => {
//     // //             button.addEventListener('click', function() {
//     // //                 const listItem = this.parentNode;
//     // //                 listItem.remove();
//     // //             });
                
//     // //         });
//     // deleteButtons.forEach((button) => {
//     //     button.addEventListener('click', function() {
//     //         // Get the parent list item of the clicked delete button
//     //         // alert('clicked')
//     //         const listItem = this.parentNode;
    
//     //         // Remove the parent list item from the list
//     //         // alert(listItem);
//     //         listItem.removeChild(listItem);
//     //     });
//     // });
//     // }

//     const deleteBtn = (index) => {
//             // item.parentNode.removeChild(item); 

            

//     }

//     // Function to delete a specific list item by index


// // Example of adding a delete button for each list item
// // childLi.forEach((listItem, index) => {
// //     const deleteButton = document.createElement('button');
// //     deleteButton.textContent = 'Delete';
// //     deleteButton.onclick = deleteBtn(index); // Pass the index to the deleteBtn function
// //     listItem.appendChild(deleteButton);
// // });


// // const editBtn = () => {
// //     alert('Edit Clicked')
// // }




