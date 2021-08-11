const addBtn = document.getElementById('add')
const addToList = document.getElementById('list')
const toEmptyBox = document.getElementById('textInput');
const task = document.getElementById('list');

addingItem = function addItem(boxInput) {
    boxInput = document.getElementById('textInput').value;
    let li = document.createElement('li');
    li.id = 'task';
    li.textContent = boxInput;
    /*  Button element to delete task
        let btn = document.createElement('button')
        btn.id = 'delBtn'
        btn.textContent = 'Delete'
    */
    addToList.appendChild(li);
    //addToList.appendChild(btn)
    toEmptyBox.value = '';
}

addBtn.addEventListener('click', addingItem)


toEmptyBox.addEventListener('click', function emptyBox() {
    toEmptyBox.value = '';

}

)

task.addEventListener('click', function delTask(e) {
    if (e.target && e.target.nodeName == 'LI') {
        (e.target).setAttribute('style', 'text-decoration-line: line-through; text-decoration-color: rgba(255,255,255, 0.6); text-decoration-thickness: 4px');

    }
})

task.addEventListener('dblclick', function delTask(e) {
    if (e.target && e.target.nodeName == 'LI') {
        this.removeChild(e.target)


    }
})




