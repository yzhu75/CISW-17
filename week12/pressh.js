// define the vars
const help = document.getElementById('help')
const dark = document.getElementById('godark')

// hide stuff
help.style.visibility = 'hidden'

// setup the functions
function hide() {
  help.style.visibility = 'hidden'
}

function show() {
  help.style.visibility = 'visible'
}

function goDark() {
  document.body.classList.toggle('darkmode');
}

function showHelp(e) {
    // console.log(e.keyCode)
    // console.log(e)
    // console.log(e.key)
    // keyCode: 72  = 'h' 
    //          191 = '?'
    //          68  = 'd'
    //          27 = 'esc'
    if ( e.keyCode == 27 ) {
      hide()
    }
      if (e.keyCode == 72 ||
            e.keyCode == 191) {
          if (help.style.visibility == 'hidden') {
            show()
          } else {
            hide()
          }
        } else if ( e.keyCode == 68 ) {
          goDark()
        }
    }
document.onkeydown = showHelp;