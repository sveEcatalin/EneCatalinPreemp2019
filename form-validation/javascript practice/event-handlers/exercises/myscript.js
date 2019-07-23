

function displayImage(){
    if(redPressed===false){
        document.querySelector("img").classList.remove("hide");
        document.querySelector("img").classList.add("show");   
    }
    else{
        alert("NO IMAGE TO DISPLAY");
    }
}

function hideImage(){
    document.querySelector("img").classList.add("hide");  
    document.querySelector("img").classList.remove("show");

}

function removeImage(){
    document.querySelector("img").remove();
}
