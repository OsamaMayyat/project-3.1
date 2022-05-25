let text = document.querySelector('.time span');
let up = document.querySelector('.i a');
let header = document.querySelector('.header');



window.setInterval(function(){
let dateInfo = new Date();
let H = dateInfo.getHours();
let M = dateInfo.getMinutes();
let S = dateInfo.getSeconds();

if(H > 12){
    H=H-12;
}
if(H < 10){
    H='0'+H;
}
if(M < 10){
    M='0'+M;
}
if(S < 10){
    S='0'+S;
}
text.textContent = `${H}:${M}:${S}`;

},1000);

window.onscroll = function(){
    if(window.scrollY == 0){
        up.style.opacity= '0'
        header.style.backgroundImage= 'null'

    }else{
        up.style.opacity= '1'
        header.style.backgroundImage= 'linear-gradient(120deg,rgb(238, 214, 147),rgb(238, 185, 40))'


    }
}
