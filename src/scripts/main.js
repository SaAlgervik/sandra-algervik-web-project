var homePageImage ="(https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=8)";
var aboutPageImage = "https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

function checkSelected(selected){

    if(selected === "HOME"){
      
        changeImage1('main_imageSection')


    }
    if(selected === "ABOUT"){
         changeImage('main_imageSection')

    }
}



function changeImage(image){
    
   document.getElementsByClassName(image)[0].style.backgroundImage  = "url('https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
    
}
function changeImage1(image){
    
    document.getElementsByClassName(image)[0].style.backgroundImage  = "url('https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=8')";
     
 }


function hideContent(contentToHide,contentToShow){
    
    var x = document.getElementById(contentToHide);
    var y = document.getElementById
   (contentToShow);
    if (x.style.display === y.style.display) {
      x.style.display = "none";
      y.style.display = "block";
    } 
}

function aboutButtonClick(){
// hideContent("content-home-page", "about-page-content");
 hideContent("home-page-picture","about-page-picture");
}



