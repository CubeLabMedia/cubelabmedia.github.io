function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.height === "0px") {
      // x.style.display = "none";
      x.style.height = "0px"
    } else {
      // x.style.display = "block";
      x.style.height = "315px"
    }
  }