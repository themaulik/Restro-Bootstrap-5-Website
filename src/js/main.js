function validate(){
    var name = document.myForm.name.value;
    var numbers = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      
    if(name==""){
        alert("Please Fell Your 'Name'");
        return false;
    }
    if (document.myForm.email.value=="") {
        alert("please Provide Email");
        return false;
    }
    if(number.value.match(numbers)){
        return true;
    }else{
        alert("You Have Enter More Then 10 Digite");
        return false;
    }
}

function validateEmail(){
    var emialId = document.myForm.email.value;
    atpos = emialId.indexOf("@");
    dotpos = emialId.lastIndexOf(".");

    if (atpos<1 || (dotpos-atpos<2)) {
        alert("Please Enter Correct Email Id");
        return false;
    }
    return true;
}