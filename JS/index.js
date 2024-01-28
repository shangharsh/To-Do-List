
const task = document.getElementById('inputedTask');
const listContainer = document.getElementById('listContainer');


const addFunc = () =>{

    if(task.value){
        const ul = document.createElement('ul');
        ul.classList.add('ps-3', 'mb-0','d-flex', 'justify-content-between', 'align-items-center');

        const li = document.createElement('li');
        li.classList.add('list-group-item', 'rounded','ps-2' ,'pe-2', 'pb-2', 'pt-2', 'mt-2', 'mb-2', 'w-100','text-bg-light');

        const div = document.createElement('div');
        div.classList.add('listContainer','d-flex');

        const radioContainer = document.createElement('div');
        radioContainer.classList.add('radioContainer','d-flex', 'justify-content-center', 'align-items-center');
        radioContainer.innerHTML = `<input type='checkbox' class='me-2 radio' onclick='lineThrough()'/>`;
        div.appendChild(radioContainer);

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer', 'w-100','d-flex', 'justify-content-between', 'align-items-center');
        
        const p = document.createElement('p');
        p.classList.add('mb-0', 'paragraph')
        p.innerText = task.value;
        taskContainer.appendChild(p);

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('iconsContainer','d-flex', 'justify-content-center', 'align-items-center');

        const eBtn = document.createElement('button');
        eBtn.classList.add('border-0', 'btn', 'btn-primary', 'me-3', 'edit');
        eBtn.setAttribute('onclick','editBtn()');
        const editSpan = document.createElement('span');
        editSpan.innerText = 'edit_note';
        editSpan.classList.add('material-symbols-outlined','d-flex', 'justify-content-center', 'align-items-center')
        eBtn.appendChild(editSpan);
        iconsContainer.appendChild(eBtn);

        const dBtn = document.createElement('button');
        dBtn.classList.add('border-0', 'btn', 'btn-danger', 'delete');
        dBtn.setAttribute('onclick','deleteBtn()');
        const deleteSpan = document.createElement('span');
        deleteSpan.innerText = 'delete';
        deleteSpan.classList.add('material-symbols-outlined','d-flex', 'justify-content-center', 'align-items-center');
        dBtn.appendChild(deleteSpan);
        iconsContainer.appendChild(dBtn);

        taskContainer.appendChild(iconsContainer);  
        div.appendChild(taskContainer);
        li.appendChild(div);

        task.value = '';
        ul.appendChild(li);
        listContainer.appendChild(ul);
    }else{
        alert("Task Field cannot be empty.");
    }
}

const lineThrough = () =>{
    let paragraph = document.getElementsByClassName('paragraph');
    let radio = document.getElementsByClassName('radio');
    const edit = document.getElementsByClassName('edit');
    const del = document.getElementsByClassName('delete');

    for(let i =0; i<radio.length; i++){
        if(radio[i].checked){
            paragraph[i].style.textDecorationLine = "line-through";
            edit[i].disabled = true;
            del[i].disabled = true;
        }else{
            paragraph[i].style.textDecorationLine = "none";
            edit[i].disabled = false;
            del[i].disabled = false;
        }
    }
}


const editBtn = () => {
    alert('Edit Clicked')
}
const deleteBtn = () => {
    alert('Delete Clicked')
}

