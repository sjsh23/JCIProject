function validate(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const Phone = document.getElementById("Phone").value
    const message = document.getElementById("message").value
    const emailCheck = document.getElementById("emailCheck")
    const phoneCheck = document.getElementById("phoneCheck")

    if(!name){
        alert("You must fill your name")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
    }
    else if(!Phone){
        alert("You must fill your phone number")
    }
    else if(!message){
        alert("You must fill the message box")
    }
    else if(!emailCheck.checked && !phoneCheck.checked){
        alert("You must choose at least 1 contact preferrence method")
    }
    else window.location.href = "index.html"
}

