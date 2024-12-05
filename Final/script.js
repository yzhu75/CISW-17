

function display(){
    dispWin = window.open('certificate.html', 'NewWin',
        'toolbar=no,status=no,titlebar=no,width=800,height=600')    
    awardee = document.form1.name.value;
    document.form1.name.value = "";
}