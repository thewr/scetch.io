$(function(){
  myFunction();
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

function myFunction() {
  var table = document.getElementById("myTable");
  var header = table.createTHead();
  var row = header.insertRow(0);
  var cell = row.insertCell(0);
  cell.innerHTML = "<b>This is a table header</b>";
}

const itemSum = document.querySelector('#item-sum');
const form = document.querySelector('#add-item-form');

// get the reference for the body
var body = document.getElementsByTagName("body")[0];
    
// creates a <table> element and a <tbody> element
let tbl = document.createElement('table');
let tblBody = document.createElement("tbody");    
var sum = 0;

// create element & render cafe
function renderCafe(doc){
    
    // creates a table row
    let row = document.createElement("tr");
    tbl.setAttribute('data-id', doc.id);
    let name = document.createElement('td'); 
    let amount = document.createElement('td');
    let subject = document.createElement('td');
    name.textContent = doc.data().name;
    amount.textContent = doc.data().amount;
    subject.textContent = doc.data().subject;
   // cost.textContent = doc.data().amount*doc.data().quantity;
   // sum += parseFloat(doc.data().amount)*parseFloat(doc.data().quantity);
   // itemSum.innerHTML = sum;
    
    // append row
    row.appendChild(name);
    row.appendChild(amount);
    row.appendChild(subject);
    
    // add the row to the end of the table body  
    tblBody.appendChild(row);
    
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
  // appends <table> into <body>
    body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
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
        amount: form.amount.value,
        subject: form.subject.value
    });
      form.name.value = '';
      form.amount.value = '';
      form.subject.value = '';
});
