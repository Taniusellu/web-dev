$(function(){

  // If you defined navigation bar then script will incloud the nav bar 
  if($("#includeNavBar")) {
    $("#includeNavBar").load("nav.html"); 
  } else {
    console.log("Sciping nav #includeNavBar is not defined")
  }
    
  });