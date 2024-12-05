//This will calculate the tip and total to display
let bill = document.getElementById("bill");
let form = document.forms.amount;
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let startOver = document.getElementById("startOver");
let displayTotals  = document.getElementById("displayTotals");
let split = document.forms.split;

// The money variables 
let billTotal = 0; // the amount of the bill
let tipAmount = 0; // the amount of the tip
let total = 0;     // the billTotal + the tipAmount

// Create the tipBig function
function tipBig(e){
    e.preventDefault();

    

    billTotal = Number(form.billTotal.value);
    tipAmount = billTotal * 0.2;
    total = billTotal + tipAmount;

    split = Number(form.split.value);

    

    bill.style.display = "none"; 

    displayTotals.innerHTML += `The bill is $${billTotal.toFixed(2)}<br>`;
    displayTotals.innerHTML += `The tip is $${tipAmount.toFixed(2)}<br>`;
    displayTotals.innerHTML += `The total is <b>$${total.toFixed(2)}</b><br>`;
    if (split > 0){
        splitTotal = total/split;
        displayTotals.innerHTML += `The split total is <b>$${splitTotal.toFixed(2)} per person</b>`;
    } 
    
    results.style.display = "block";
}

function reload(){
    //Reload the window
    window.location.reload();
    //Clear the bill total
    form.billTotal.value = "";
    form.split.value = "0";
}

submit.addEventListener("click", tipBig);
startOver.addEventListener("click", reload);
