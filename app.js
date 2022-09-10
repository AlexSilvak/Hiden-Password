
    var password=document.getElementById('password');
    var eye=document.getElementById('eye');
    

function changePasswd(){

   


 let inputTypePassword=password.type=='password'

if(inputTypePassword){

    showPassword()
}else{
    hidePassword()
}
}

function showPassword(){
    password.setAttribute('type', 'text');
    eye.setAttribute('src','show.png')
}


function hidePassword(){
 password.setAttribute('type','password')
 eye.setAttribute('src','close.png')
}