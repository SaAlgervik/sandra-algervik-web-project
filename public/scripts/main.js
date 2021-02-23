
const homePageImage ="https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=8";
const aboutPageImage = "https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

function checkSelected(selected){

    if(selected === "HOME"){
      
        changeImage(homePageImage);
    }
    if(selected === "ABOUT"){
        changeImage(aboutPageImage);
    }
    if (selected ==="LOG IN" ){
       window.location.href = 'https://saalgervik.github.io/sandra-algervik-web-project/account.html'
      
    }
   
   
}

function logBotton(logInput){
    if(logInput === 'LOG IN'){
        document.getElementById('loginBtn').textContent = 'LOG OUT'
    }
    else if(logInput ==='LOG OUT'){
        document.getElementById('loginBtn').textContent = 'LOG OUT'
    }
    
}


function changeImage(changeToImage){
    
   document.getElementsByClassName('main_imageSection')[0].style.backgroundImage  = `url(${changeToImage}) `;
    
}
function changeImage(changeToImage){
    
    document.getElementsByClassName('main_imageSection')[0].style.backgroundImage  = `url(${changeToImage}) `;
     
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




 //                 //
//      AXIOS      //



function submitText(){
    var inputText = document.getElementById("common_name").value;
    console.log(inputText);
    document.getElementById("common_name").value = null;
    getCommonName(inputText);
}




function getCommonName(inputText) {
    inputText = req.query;
    axios
      .get("/getcommmon_name", {
        params: {
          inputText
        }
      })
     .then(function(response)  {
          inputText =response.data.response.inputText;
          
   });
     
  }


//   if (response.data.response.success === 1) {
//     passSteamID(steamID);
//   } else {
//     showInfo(false);
//     console.log("No user with that vanityID found");
//   }
// });
// }






//   function passFormData(inputValue) {
//     if (isValidIDFormat(inputValue)) {
//       passSteamID(inputValue);
//     } else {
//       getSteamID(inputValue);
//     }
//   }

