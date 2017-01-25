var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    console.log("slideIndex esta en " + slideIndex);
    if (slideIndex == 5) {
      // este if saca el div#welcome
      console.log("entro al if para sacar div#welcome");
      document.getElementById("welcome").style.display = "none";
      console.log("done");
    }
    //if (slideIndex == x.length+1) {window.location.href = "main.htm";}
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block";
    if (slideIndex + 1 <= x.length) {
      setTimeout(carousel, 2000);
    }
}