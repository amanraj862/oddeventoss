
function randomchange() {
  // first dice number
var randomNumber1=Math.floor(Math.random()*6)+1;
var imgsrc1="images/" +"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imgsrc1);

// second dice number
var randomNumber2=Math.floor(Math.random()*6)+1;
var imgsrc2="images/" +"dice"+randomNumber2+".png";;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", imgsrc2);

//change title for the result
if((randomNumber1+randomNumber2)%2===0){ //Even wins
  document.querySelector("h1").innerHTML="🎉Even wins!!"
}
else{
    document.querySelector("h1").innerHTML="🎉Odd wins!!"
}
document.getElementById("button1").onclick = function(){
      document.querySelector("h1").innerHTML="Refresh Me";
      image1.setAttribute("src","images/dice6.png");
      image2.setAttribute("src","images/dice6.png");
};
}
