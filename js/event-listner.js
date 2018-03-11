function checkUsername(){
     var msg = document.getElementById('feedback');

     if(this.value.length < 5){
          msg.textContent = ' 5 or more character';
     }
     else{
          msg.textContent =  ' ';
     }
}

var eUsername = document.getElementById('username');
eUsername.addEventListener('blur',checkUsername, false);
