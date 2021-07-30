const addBtn = document.getElementById('add')

const addToList = document.getElementById('list')

const boxInput = document.getElementById('textInput').value;

const toEmptyBox = document.getElementById('textInput');

const task = document.getElementById('list');



addBtn.addEventListener('click', function addItem(boxInput) {
    boxInput = document.getElementById('textInput').value;
    let li = document.createElement('li');
    li.textContent = boxInput;
    return addToList.appendChild(li);
}
)

toEmptyBox.addEventListener('click', function emptyBox() {
    toEmptyBox.value = '';

}

)

task.addEventListener('dblclick', function delTask(list) { 
    list = document.getElementById('list');
    let li = document.childNodes(list);
    return task.removeChild(li);
    
    

})


/*addBtn.addEventListener('click', function text() {
    let boxInput = document.getElementById('textInput').value;

    console.log(boxInput)
});

*/
/*

if (addBtn.addEventListener('click', function addItem(task) {
    let li = document.createElement('li');
    li.textContent = task;
    
    return addToList.appendChild(boxInput);

    
}
));

*/