const addBtn = document.getElementById('add')
const addToList = document.getElementById('list')
const toEmptyBox = document.getElementById('textInput');
const task = document.getElementById('list');



addBtn.addEventListener('click', function addItem(boxInput) {
    boxInput = document.getElementById('textInput').value;
    let li = document.createElement('li');
    li.id='task';
    li.textContent = boxInput;
    let btn = document.createElement('button');
    btn.id='delBtn'
    btn.textContent = 'Delete'
    addToList.appendChild(li);
    addToList.appendChild(btn);
    toEmptyBox.value = '';
}
)

toEmptyBox.addEventListener('click', function emptyBox() {
    toEmptyBox.value = '';

}

)

task.addEventListener('dblclick', function delTask(e) { 
    if (e.target && e.target.nodeName == 'LI') {
        this.removeChild(e.target)
    
    
}
})



