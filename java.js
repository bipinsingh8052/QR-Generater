const input= document.querySelector(".heading input");
console.log(input);
const btn =document.querySelector(".btn button");
console.log(btn);
const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
console.log(URL);

const img =document.querySelector(".QR img");
console.log(img);
img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example";
// function generateQR (){
//     img.scr=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
//     console.log(img);
// }
btn.addEventListener("click",()=>{
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    input.value="";
    console.log(img);
})

