const homePageImage = "https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid" +"=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=8";
const aboutPageImage = "https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&c" +"s=tinysrgb&dpr=1&w=500";
const APIpageImage ="https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


function checkSelected(selected) {

    if (selected === "HOME") {
        clearText();
        changeMainImage(homePageImage);
        changeMainText('about_text','home_text');
        document.getElementsByClassName("textSection_search")[0].style.display ="none";




    }
    if (selected === "ABOUT") {
        clearText();
        changeMainImage(aboutPageImage);
        changeMainText('home_text', 'about_text');
        document.getElementsByClassName("textSection_search")[0].style.display ="none";


    }
    if (selected === "API") {
        changeMainImage(APIpageImage);
        displayAPIsearch();


         //detta va längen för log in sidan som skulle vart med ifrån början//  
        //window.location.href = 'https://saalgervik.github.io/sandra-algervik-web-project/account.html'

    }
}


function changeMainText(hide, show){
    document.getElementById(hide).style.display ="none";
    document.getElementById(show).style.display ="block";
}

function displayAPIsearch(){
    document.getElementById('about_text').style.display ="none";
    document.getElementById('home_text').style.display ="none";
    document.getElementsByClassName("textSection_search")[0].style.display ="block";



}


function start() {

    document.getElementById("about_text").style.display ="none";
    document.getElementsByClassName("textSection_search")[0].style.display ="none";
}

function hideContent(contentToHide, contentToShow) {

    var x = document.getElementById(contentToHide);
    var y = document.getElementById(contentToShow);
    if (x.style.display === y.style.display) {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function keyEnter(event){
    if(event.keyCode==13) {
        submitText();
    }
}

function submitText() {
    var inputText = document.getElementById("common_name").value;
    document.getElementById("common_name").value = null;
    clearText()
    getCommonName(inputText);
}
//
function changeMainImage(imageSource) {
    var mainImageRef = document.getElementsByClassName('main_imageSection')[0]
    mainImageRef.setAttribute("style", "background-image: url(" + imageSource + ");");
}

function clearText(){
    if(document.getElementsByClassName('common_name').length !=0){
        let  i = 0;

         do{
             const list = document.getElementsByClassName('common_name')[i]
             list.innerHTML = "";
             
            i++
         }while(i < document.getElementsByClassName('common_name').length)
    }
}

// hämtar data från API via axios
function getCommonName(inputText) {
    
    axios
        .get("/getcommon_name", {params: {
            inputText
        }})
        .then((response) => {
            const {data} = response.data
            //lägger in common name på växterna och ett onclick event på texten som sedan visar bilden
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