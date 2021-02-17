
var homePageContent = document.getElementById(content-home-page);
var hello = "jag gillar glass";


function getHomePageText(){
   console.log("HomePage") 
//document.getElementById("content").textContent //= document.getElementById("content-home-page");
  
}

function hideContent(contentToHide){
    
    var x = document.getElementById(contentToHide);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function aboutButtonClick(){
 hideContent("content-home-page");
 hideContent("home-page-picture");
 console.log("hej")
 //hideContent("home-page-pictrure");
}



