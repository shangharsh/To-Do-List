
const task = document.getElementById('inputedTask');
const listContainer = document.getElementById('listContainer');


const addFunc = () =>{
    if(task.value){
        const ul = document.createElement('ul');
        ul.classList.add('ps-3', 'mb-0');

        const li = document.createElement('li');
        li.classList.add('list-group-item', 'mt-2', 'mb-2', 'd-flex', 'justify-content-between', 'align-items-center');

        const radioContainer = document.createElement('div');
        radioContainer.innerHTML = `<input type='radio' class='me-2'/>` + task.value;

        li.appendChild(radioContainer);

        const iconsContainer = document.createElement('div');

        const editSpan = document.createElement('span');
        editSpan.innerText = 'edit_note';
        editSpan.classList.add('material-symbols-outlined', 'me-3')
        iconsContainer.appendChild(editSpan);

        const deleteSpan = document.createElement('span');
        deleteSpan.innerText = 'delete';
        deleteSpan.classList.add('material-symbols-outlined');
        iconsContainer.appendChild(deleteSpan);

        li.appendChild(iconsContainer);  

        task.value = '';
        ul.appendChild(li);
        listContainer.appendChild(ul);
    }else{
        alert("Task Field cannot be empty.");
    }
}

