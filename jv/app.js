$(function(){
  $(".content").hide();
  $("#add_item_button").click(function(){
    $(".content").hide().fadeIn(1000);
   // $("#add_item_button").hide();
  });
  $('#item_submit').click(function(){
    $(".content").show().fadeOut(1000);
   // $("add_item_button").show();
  });
});

// creates a <table> element and a <tbody> element
const itemList = document.querySelector('#item-list');
let tblBody = document.createElement("tbody");    
// get the reference for the body
var body = document.getElementsByTagName("body")[0];

// create form element
const form = document.querySelector('#add-item-form');


// create element & render cafe
function renderCafe(doc){
    
    // create the list item
    let li = document.createElement("li");
    li.setAttribute('data-id', doc.id);  //Each document gets an id.
    let name = document.createElement('span'); 
    let amount = document.createElement('span');
    let subject = document.createElement('span');
  
    // get the content
    name.textContent = doc.data().name;
    amount.textContent = doc.data().amount;
    subject.textContent = doc.data().subject;
    
    // append row
    li.appendChild(name);
    li.appendChild(amount);
    li.appendChild(subject);
    
    // insert the list item into body
    itemList.appendChild(li);

}

// getting data
db.collection('items')
  .orderBy('name','asc')
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('items').add({
        name: form.name.value,
        amount: form.amount.value,
        subject: form.subject.value
    });
      form.name.value = '';
      form.amount.value = '';
      form.subject.value = '';
});
