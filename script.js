function includePopupHTML(){
    

    let html='<div id="vis-popup"><span id="close" onclick="closePopUp()"><img  id="npop" src="image/close.jpg" alt=""></span><img id="leftarrow" src="image/left.png" alt=""><img id="rightarrow" src="image/right.png" alt=""><img id="mainpopupimage"  src="images/shubh.jpg" alt=""></div>'

    let popdiv=document.createElement("div");
    popdiv.innerHTML=html;
    document.body.insertBefore(popdiv,document.body.firstChild);

}

let img;
let current;

function imagePopupInit(target){
    img=document.getElementsByClassName(target);
    console.log(target);
    includePopupHTML();

    for(var i= 0; i < img.length; i++){
        img[i].style.cursor='pointer';

        img[i].addEventListener("click",function(){
            document.getElementById("mainpopupimage").src = this.src;
            document.getElementById("vis-popup").style.display= 'block';
            checkArrow();
        })
    }



    

    document.getElementById('rightarrow').addEventListener('click',function(){
        nextimg();
    });


    document.getElementById('leftarrow').addEventListener('click',function(){
        previmg();
    });






}

function closePopUp(){
    document.getElementById("mainpopupimage").src="";
    document.getElementById("vis-popup").style.display='none';
}

function nextimg(){
    
    getCurrentImage();
    current++;
    document.getElementById("mainpopupimage").src=img[current].src;
    checkArrow()
}

function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainpopupimage").src=img[current].src;
    checkArrow()
}


function getCurrentImage(){
    for(var i= 0; i < img.length; i++){
        if(img[i].src==document.getElementById("mainpopupimage").src){
            current = i;
        }
    }

}

function checkArrow(){
    getCurrentImage();
    if(current=="0"){
        document.getElementById('leftarrow').style.display= 'none'
        document.getElementById('rightarrow').style.display = 'block'
    }else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none'
        document.getElementById('leftarrow').style.display= 'block'
    }else {
        document.getElementById('leftarrow').style.display= 'block'
        document.getElementById('rightarrow').style.display = 'block'

    }

}