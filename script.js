const addBtn = document.getElementById('add')
const addToList = document.getElementById('list')
const toEmptyBox = document.getElementById('textInput');
const task = document.getElementById('list');


addBtn.addEventListener('click', function addItem(boxInput) {
    boxInput = document.getElementById('textInput').value;
    let li = document.createElement('li');
    li.id='task';
    li.textContent = boxInput;
    /*
    let btn = document.createElement('button');
    btn.id='delBtn'
    btn.textContent = 'Delete'
    */
    addToList.appendChild(li);
    
    //addToList.appendChild(btn);
    toEmptyBox.value = '';
}
)

toEmptyBox.addEventListener('click', function emptyBox() {
    toEmptyBox.value = '';

}

)

task.addEventListener('click', function delTask(e) { 
    if (e.target && e.target.nodeName == 'LI') {
        (e.target).setAttribute('style', 'text-decoration-line: line-through; text-decoration-color: rgba(255,255,255, 0.6); text-decoration-thickness: 4px');  
        /*(e.target).setAttribute('style', 'text-decoration-color: rgb(0,0,0)');
        (e.target).setAttribute('style', 'text-decoration-thickness: 3px');*/
        
    
}
})



task.addEventListener('dblclick', function delTask(e) { 
    if (e.target && e.target.nodeName == 'LI') {
        this.removeChild(e.target)
        
    
}
})



/*
if (addBtn.addEventListener('click', function deleteItem() {
    let btnnn = document.createElement('button');
    btnnn.id='removeItem';
    btnnn.textContent = 'Delete'
    addToList.appendChild(btnnn);
        btnnn.addEventListener('click', function removeItem() {
            
        })
}
)
);
*/
