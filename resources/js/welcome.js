var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    console.log("slide:" + slideIndex + "/" + x.length);
    /*
    if (slideIndex == 5) {
      // este if saca el div#welcome
      console.group("Delete welcome");
      console.warn("entro al if para sacar div#welcome");
      document.getElementById("welcome").style.display = "none";
      x[slideIndex-1].style.display = "inline";
      console.log("done");
      console.groupEnd();
    }
    */
    if (slideIndex == x.length) {
      console.warn("redirecting to main.html");
      window.location.href = "main.html";
    }
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block";
    if (slideIndex + 1 <= x.length) {
        setTimeout(carousel, 2000);
    }
}