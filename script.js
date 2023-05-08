

const email=documnet.querySelector("#email");
const success =document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateForm()
{
    clearMessages();
    let errorFlag = false;


    if(!emailIsValid(email.value)){
        errorNodes.innerText="Invalid Email Address";
        email.classList.add("error-border");
        errorFlag= true;
    }

    if (!errorFlag) {
        success.innerText=" Success! ";
    }
}
function clearMessages()
{
    for (let i=0; i< errorNodes.length; i++)
    {
        errorNodes[i].innerText="";
    }
    success.innerText = "Success!";
    email.classList.remove("error-border");

}

function emailIsValid(email){
    let pattern = /\$+@\S+\.\S+/;
    return pattern.test(email);
}