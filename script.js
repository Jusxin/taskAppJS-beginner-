const addBtn = document.getElementById('add')

const addToList = document.getElementById('list')

const boxInput = document.getElementById('textInput').value;

const toEmptyBox = document.getElementById('textInput');




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