// Menu Responsive
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.left = "-20px";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.left = "-250px";
    background_menu.style.display = "none";
}



// Desktop Animation
consoleText(['Python', 'JavaScript', 'Flutter', "HTML", "CSS"], 'text', "mobile",['DodgerBlue','Gold','DeepSkyBlue', 'Orange','CornflowerBlue']);

function consoleText(words, id, mobile,colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var mobile_con = document.getElementById('mobile_console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);

  var mobile_target = document.getElementById(mobile);
  mobile_target.setAttribute('style', 'color:' + colors[0]);
 

  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      mobile_target.innerHTML = words[0].substring(0, letterCount)
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        mobile_target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      mobile_target.innerHTML = words[0].substring(0, letterCount)
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      mobile_con.className = 'console-underscore hidden'
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      mobile_con.className = 'console-underscore '
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}













