//button scroll  top

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


// TABS

function openForm(formName, element, color){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++){
    tablinks[i].style.backgroundColor = "none";
  }

  document.getElementById(formName).style.display = "block";
  

  element.style.backgroundColor = color;
}
if (document.getElementById("defaultOpen")){
  document.getElementById("defaultOpen").click();}



