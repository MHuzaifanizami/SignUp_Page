function signUp(){
    location = "signup/signup.html"
    
}





function register() {

    var name = document.getElementById("r-name");
    var email = document.getElementById("r-email");
    var password = document.getElementById("r-password");
    var usersData = localStorage.getItem("usersData");

    if (usersData) {
        usersData = JSON.parse(usersData)
    } else {
        usersData = []
    }

    var userObj = {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    usersData.push(userObj);

    localStorage.setItem("usersData", JSON.stringify(usersData));

    name.value = "";
    email.value = "";
    password.value = ""

  location = "../index.html"

}


function logIn() {
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password");
    var usersData = localStorage.getItem("usersData");
    var saveUser = {};

    if (usersData) {
        usersData = JSON.parse(usersData)
    } else {
        usersData = []
    }

    for (var i = 0; i < usersData.length; i++) {
        if (email.value == usersData[i].email) {
            saveUser = usersData[i]
            break
        }

       
    }
    if (saveUser.email) {
        if (saveUser.password == password.value) {
            // console.log("log in succcessfully")
            swal({
                title: "Log In Successfuly",
                icon: "success",
              });
        } else {
            // console.log("invalid password")
            swal({
                title: "Invalid Password",
                icon: "error",
              });
        }
    } else {
        // console.log("user not found")
        swal({
            title: "User Not Found",
            icon: "warning",
          });
    }

    email.value = "";
    password.value = ""
}
