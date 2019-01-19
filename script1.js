function bigImg(x) {
    x.style.height = "28%";
    x.style.width = "28%";
  }
  
  function normalImg(x) {
    x.style.height = "25%";
    x.style.width = "25%";
  }

  function callYear() {
    var a = document.getElementById("tear").value;
    
    if (a=="1996"){
      var b = "left3";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1991"){
      var b = "right1";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1990"){
      var b = "left1";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1993"){
      var b = "left2";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1995"){
      var b = "right2";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1997"){
      var b = "right5";
      document.getElementById(b).scrollIntoView();
    }
    else {
alert("Please type in another year! ");

    }
  }


  function callYear2() {
    var a = document.getElementById("tear").value;
    
    if (a=="1997"){
      var b = "left3";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1989"){
      var b = "right1";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1989"){
      var b = "left1";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1991"){
      var b = "left2";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1992"){
      var b = "right2";
      document.getElementById(b).scrollIntoView();
    }
    else if (a=="1997"){
      var b = "right4";
      document.getElementById(b).scrollIntoView();
    }
else if (a=="1994") {
  var b = "right3";
  document.getElementById(b).scrollIntoView();
}
else if (a=="1998") {
  var b = "right4";
  document.getElementById(b).scrollIntoView();
}
else if (a=="1999") {
  var b = "left4";
  document.getElementById(b).scrollIntoView();
}

    else {
alert("Please type in another year! ");

    }
  }






  
var x = document.getElementById("amount").innerHTML;
function expand() {
    var y = document.getElementById("count").value;
    for (var c = 2; c <= y; c = c+1){
        
        
         
         
       x = x + "<li> . </li>";
       
       document.getElementById("amount"). innerHTML = x;
    }
}