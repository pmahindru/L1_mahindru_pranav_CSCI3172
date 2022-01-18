// top button script
var top_button = document.getElementById("backToTop");
window.onscroll = function(){
    scrollfunction();
};

function scrollfunction(){
    if(document.documentElement.scrollTop > 85 || document.body.scrollTop > 85){
        top_button.style.display = "block";
        
    }
    else{
        top_button.style.display = "none";
    }
}
function topbutton(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// dropdown for the navigation bar
function opendropdown() {
    if(document.getElementById("show").style.display === "block"){
        document.getElementById("show").style.display = "none";
    }
    else{
        document.getElementById("show").style.display = "block";
    }
}