var myvar = 0;

function changeMarginDown(){
    if(myvar <= 1000){
        myvar += 100;
        let infographic = document.getElementById("infographic-image");
        infographic.style.marginTop = "-" + myvar + "px";
    }
}

function changeMarginUp(){
    if(myvar >= 0){
        myvar -= 100;
        let infographic = document.getElementById("infographic-image");
        infographic.style.marginTop = "-" + myvar + "px";
    }
}