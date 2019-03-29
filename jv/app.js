const itemList = document.querySelector('#item-list');
const form = document.querySelector('#add-item-form');

// get the reference for the body
var body = document.getElementsByTagName("body")[0];
    
// creates a <table> element and a <tbody> element
let tbl = document.createElement('table');
let tblBody = document.createElement("tbody");
    

// create element & render cafe
function renderCafe(doc){
    
    // creates a table row
  //  var row = document.createElement("tr");
    tbl.setAttribute('data-id', doc.id);
    let name = document.createElement('td'); 
    name.textContent = doc.data().name;
    itemList.innerHTML = "!";
    
    /*
    let amount = document.createElement('td');
    
    amount.textContent = doc.data().amount;
     */
    //var cell = document.createElement("td");
    var nameText = document.createTextNode(name);
   
    name.appendChild(nameText);
  //  row.appendChild(name);
/*
    


    li.appendChild(name);
    li.appendChild(amount);

    itemList.appendChild(li);

    // add the row to the end of the table body  
    */
 //   tblBody.appendChild(row);
   // put the <tbody> in the <table>
//  tbl.appendChild(tblBody);
  // appends <table> into <body>
    body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
 // tbl.setAttribute("border", "2");
  
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
