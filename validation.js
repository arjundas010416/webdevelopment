function validate(){
    const name=document.getElementById("name").value;
    const message=document.getElementById("message");
    const max=8;
    if(name.length > max){
        message.textContent="Name tooo long ,name should carry 8 characters";
    }
    else{
        message.textContent="Name  is valid";

    }

    
}