const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCntSwrxBash6pXzL9yaGCnQh0gQZPclG0",
    authDomain: "sales-91e4c.firebaseapp.com",
    databaseURL: "https://sales-91e4c.firebaseio.com",
    projectId: "sales-91e4c",
    storageBucket: "sales-91e4c.appspot.com",
    messagingSenderId: "533687143173"
  };
firebase.initializeApp(config);
	
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true }); 	


// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    cafeList.appendChild(li);
}

// getting data
db.collection('cafes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});
