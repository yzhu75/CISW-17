const help = document.getElementById('help')
const nojs = document.getElementById('nojs')

help.style.visibility = 'hidden'
nojs.style.visibility = 'hidden'

function showHelp(e){
  if (e.keyCode == 72 || e.keyCode == 191) {
      if (help.style.visibility == 'hidden'){
        help.style.visibility = 'visible' 
      }else{
        help.style.visibility = 'hidden'
      }
  } 
}

document.onkeydown = showHelp;