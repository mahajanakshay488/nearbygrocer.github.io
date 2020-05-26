var cartsec = document.querySelector('#cartsec');
var background = document.querySelector('#background');

function opencart(){
    cartsec.style.display = 'block';
    background.style.display = 'none';
}

document.querySelector('#cartbtn').onclick = function(){
    opencart();
}

cartsec.onclick = function(){
    cartsec.style.display = 'none';
    background.style.display = 'block';
}

var searchlist = document.querySelector('#searchlist-back');

function opensearchlist(){

    if(document.querySelector('#search').value == 123456){
    searchlist.style.display = 'block';
}

}

document.querySelector('#searchbtn').onclick = function(){
    opensearchlist();
}

document.querySelector('#closesearchbtn').onclick = function(){
    searchlist.style.display = 'none';
}


