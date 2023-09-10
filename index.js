//document.querySelector("button").addEventListener("click",handleClick);//event listener do para meter leta hai pehla ki kiss type ka event hai and doosra wo event occur hone konsa function call hoga ya kya hoga NOTE: paranthesis use nhi krr rhe hai yha coz add krr denge to bina click kiye aajaega//paaasing fucntion as input so that it call itself when needed

// Adding event listerner to buttons

// this .........button btata hai ki konsa jgh click hua hai and kya click hua hai basically querySelector ki trh hai
// like suppoose we wanna change the color when clicked then we already know the address of the element(this) then just write this.style.color="white"
//if the first lette of a function name is capital then it is a construction funciton

var numOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrum;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var button=this.innerHTML;
        makesound(button);
        buttonAnimation(button)

    });
}

// event listener for keypress

document.addEventListener("keypress",function(event) {//it will add event listerner to whole page so that key is  presses on that page that gets detected
 var keyy=event.key;//event pura jo key press hua uska detail btate hai a complete array and key ussi ka ek property hai
 makesound(keyy);
 buttonAnimation(keyy);
});
//agar event ko console me log krenge to jo bhi event hua hai uska pura details dega

//make sound function
function makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
        default:
            break;
    }
}

// animation
function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);
    //ab isme wo class add krr denge jo jo style hm chahete hai and wo class already predifined hoga css me
    // in this case pressed is the class
    // classList us used to access or edit the classes
    activeButton.classList.add("pressed");
    //buttt sirf ye krne se pressed class add to ho gya but we dont want it for permanent so we will remove it after 100 miliseconds
    //it will take 2 parameters 1st which funtion to occur and after how much time
    setTimeout( function(){
        activeButton.classList.remove("pressed"),100
    } );
}