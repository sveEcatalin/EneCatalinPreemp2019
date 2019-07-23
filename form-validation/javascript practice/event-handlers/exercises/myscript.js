
let greenButton= document.querySelector(".btn-green");
let redButton = document.querySelector(".btn-red");
let blueButton=document.querySelector(".btn-blue");
let imageParent= document.querySelector(".img-parent");
let ostrichImage=document.querySelector(".ostrich-image");
let bodyElem=document.querySelector("body");



greenButton.addEventListener("click",displayImage);
ostrichImage.addEventListener("click",hideImage);
ostrichImage.addEventListener("click",triggerParent)
redButton.addEventListener("click",removeImage);
// bodyElem. addEventListener("click", displayTarget,true);
bodyElem. addEventListener("click", displayTarget);
blueButton.addEventListener("click",triggerGreenAction);


function displayImage(event){
    
    if (document.querySelector("img")==null){
        alert("Image Deleted!");
     }
     else{
        ostrichImage.classList.remove("hide");
        ostrichImage.classList.add("show");
     }
     event.stopPropagation();
}

function hideImage(event){
    ostrichImage.classList.add("hide");  
    ostrichImage.classList.remove("show");

}

function removeImage(event){
    ostrichImage.remove();
}
function displayTarget() {
    console.log("Target is "+event.target + " CurrentTarget is ");
    console.log(event.currentTarget);
    // alert('Something was clicked');
}

function triggerGreenAction(){
    greenButton.click();
}

function triggerParent(){
    imageParent.dispatchEvent(customEvent);
}


let customEvent =new Event('customEvt');
imageParent.addEventListener("customEvt",muhEvent,false);

function muhEvent(){
    imageParent.style.background="yellow";
}


// blueButton.click()
//document.getElementsByClassName('img-parent')[0].click()