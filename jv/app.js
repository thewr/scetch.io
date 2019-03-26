const itemList = document.querySelector('#item-list');
const form = document.querySelector('#add-item-form');


// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let amount = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    amount.textContent = doc.data().amount;

    li.appendChild(name);
    li.appendChild(amount);

    itemList.appendChild(li);
}

// getting data
db.collection('items').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('items').add({
        name: form.name.value,
        amount: form.amount.value
    });
    form.name.value = '';
    form.amount.value = '';
});
