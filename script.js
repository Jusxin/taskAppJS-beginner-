const addBtn = document.getElementById('add')


addBtn.addEventListener('click', event => {
    console.log("clicked");
});


const addToList = document.getElementById('list')

function addItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

addToList.appendChild(addItem('isssss lit'));