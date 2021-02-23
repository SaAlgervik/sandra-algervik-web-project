const homePageImage = "https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid" +"=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=8";
const aboutPageImage = "https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&c" +"s=tinysrgb&dpr=1&w=500";

function checkSelected(selected) {

    if (selected === "HOME") {

        changeImage(homePageImage);
    }
    if (selected === "ABOUT") {
        changeImage(aboutPageImage);
    }
    if (selected === "LOG IN") {
        window.location.href = 'https://saalgervik.github.io/sandra-algervik-web-project/account.html'

    }

}


function changeImage(changeToImage) {

    document.getElementsByClassName('main_imageSection')[0].style.backgroundImage = `url(${changeToImage}) `;

}
function changeImage(changeToImage) {

    document.getElementsByClassName('main_imageSection')[0].style.backgroundImage = `url(${changeToImage}) `;

}

function hideContent(contentToHide, contentToShow) {

    var x = document.getElementById(contentToHide);
    var y = document.getElementById(contentToShow);
    if (x.style.display === y.style.display) {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function submitText() {
    var inputText = document.getElementById("common_name").value;
    document.getElementById("common_name").value = null;
    getCommonName(inputText);
}



function getCommonName(inputText) {
    axios
        .get("/getcommon_name", {params: {
            inputText
        }})
        .then((response) => {
            const {data} = response.data
            console.log(data)
           
        });

}