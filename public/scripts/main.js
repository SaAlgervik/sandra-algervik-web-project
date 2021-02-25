const homePageImage = "https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid" +"=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=8";
const aboutPageImage = "https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&c" +"s=tinysrgb&dpr=1&w=500";
const APIpageImage ="https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

function checkSelected(selected) {

    if (selected === "HOME") {
        clearText();
        changeMainImage(homePageImage);
        changeMainText('about_text','home_text');
        hideAPISerch();
    }
    if (selected === "ABOUT") {
        clearText();
        changeMainImage(aboutPageImage);
        changeMainText('home_text', 'about_text');
        hideAPISerch();

    }
    if (selected === "API") {
        changeMainImage(APIpageImage);
        displayAPISearch();
       
         //This was the log in site that should have been added//  
        //window.location.href = 'https://saalgervik.github.io/sandra-algervik-web-project/account.html'
    }
}


function changeMainText(hide, show){
    document.getElementById(hide).style.display ="none";
    document.getElementById(show).style.display ="block";
}

function displayAPISearch(){
    document.getElementsByClassName("textSection_search")[0].style.display ="block";
    document.getElementById("plant_name").style.display ="block";
    document.getElementById('home_text').style.display ="none";
    document.getElementById('about_text').style.display ="none";



}
function hideAPISerch(){
    document.getElementsByClassName("textSection_search")[0].style.display ="none";
    document.getElementById("plant_name").style.display ="none";

}

function start() {
    document.getElementById("about_text").style.display ="none";
    document.getElementById("plant_name").style.display ="none";
    document.getElementsByClassName("textSection_search")[0].style.display ="none";
}

// Submits text if Enter is pressed
function keyEnter(event){
    if(event.keyCode==13) {
        submitText();
    }
}
// sends text to axios to make a fetch from the API 
function submitText() {
    var inputText = document.getElementById("common_name").value;
    document.getElementById("common_name").value = null;
    clearText()
    getCommonName(inputText);
}

function changeMainImage(imageSource) {
    var mainImageRef = document.getElementsByClassName('main_imageSection')[0]
    mainImageRef.setAttribute("style", "background-image: url(" + imageSource + ");");
}
// removes the earlier search from the API if one have been done
function clearText(){
    if(document.getElementsByClassName('common_name').length !=0){
        let  i = 0;
         do{
             document.getElementsByClassName('common_name')[i].innerHTML ="";
             
            i++
         }while(i < document.getElementsByClassName('common_name').length)
    }
}

// Sends the data fom main.js to server then gets the data back and adds it to the pant_name//
//id in the frontend
function getCommonName(inputText) {
    
    axios
        .get("/getcommon_name", {params: {
            inputText
        }})
        .then((response) => {
            const {data} = response.data
            //adds common_name response with eventlisener to display picture onclick in #plant_name
            let i = 0
            do {
                var mainTextRef = document.getElementById('plant_name')
                const currentImage = data[i].image_url
                const plantName = document.createElement("h2");
                plantName.innerHTML = data[i].common_name
                
                plantName
                    .classList
                    .add('common_name')
            
                    plantName.addEventListener('click', function () {
                    changeMainImage(currentImage);
                });
               

                mainTextRef.appendChild(plantName); 

                i++
            } while (i < data.length);
          
           
        });

}