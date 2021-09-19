//var k= document.querySelector.setAttribute(".img1",);
var randm=Math.floor(Math.random()*6+1);
var r= "dice"+randm+".png";
var soucre="images/"+r;
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",soucre);
//console.log(randm);
var randm1=Math.floor(Math.random()*6+1);
var r1= "dice"+randm1+".png";
var soucre1="images/"+r1;
var imag11=document.querySelectorAll("img")[1];
imag11.setAttribute("src",soucre1);

if(randm>randm1){
    document.querySelector("h1").innerHTML="player 1 WINS BITCH";
}

if(randm<randm1){
    document.querySelector("h1").innerHTML="player 2 WINS BITCH";
}
