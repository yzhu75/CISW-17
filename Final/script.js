


function display(){
    awardee = document.form1.name.value;
    if  (awardee != "") {
        dispWin = window.open('certificate.html', 'NewWin',
            'toolbar=no,status=no,titlebar=no,width=800,height=600')    
        
        document.form1.name.value = "";
    } else {
        alert("You must enter a name. Please try again.");
    }
    
}

function displayPop(){
    awardee = document.form2.name.value;
    if  (awardee != "") {
        dispWin = window.open('certificate.html', 'NewWin',
            'toolbar=no,status=no,titlebar=no,width=800,height=600')    
        
        document.form2.name.value = "";
    } else {
        alert("You must enter a name. Please try again.");
    }
}


function openForm() {
    document.getElementById("form2").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form2").style.display = "none";
  } 