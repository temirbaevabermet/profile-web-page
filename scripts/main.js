const imgElement = document.querySelector("img");
const img1URL = "images/Screenshot_20231016-211902_Gallery.jpg";
const img2URL = "images/Milk & Mocha STICKERS.gif";
function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else{
        imgElement.setAttribute("src",img1URL);
    }
}
imgElement.onclick = changePhoto;