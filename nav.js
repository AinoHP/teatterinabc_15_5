var nav = document.getElementsByClassName("navi"),
    body = document.body,
    navi = document.getElementById("sub_nav");
    
for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function(e) {
     if (navi.style.display == "block") {
        navi.style.display = "none";
      
    } else {
        navi.style.display = "block";
       
    }
    e.preventDefault();
});
};
