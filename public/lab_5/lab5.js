
const activate = document.getElementById('activate');
var fruits = ['kiwi', 'dragonfruit', 'pomelo'];
var i=0;
activate.onclick = function() {
    console.log("i'm here");
    document.querySelector("h1").innerHTML= 'Lab 5 for Sulayman Sallah';
    document.querySelector("title").innerHTML = 'Sulayman Sallah Lab 5';
    document.querySelector(".checkbox-list-label").innerHTML = "Fruits";
    document.querySelector(".fruit1").innerHTML = fruits[i++];
    document.querySelector(".fruit2").innerHTML = fruits[i++];
    document.querySelector(".fruit3").innerHTML = fruits[i++];
    document.querySelector("body").style.backgroundColor = "gray";
    document.querySelector('.flex-outer').style.marginRight = '10px';
    document.querySelector('.flex-outer').style.marginLeft = '10px';
    document.querySelector('.flex-outer').style.marginTop = '10px';
    document.querySelector('.flex-outer').style.marginBottom = '10px';



}   
