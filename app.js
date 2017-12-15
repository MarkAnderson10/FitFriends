//Handler for account creation
function handleSignUp() {
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPassword').value;
   
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        window.location.href="profile.html";
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak');
        } else {
            alert(errorMessage);
            console.log(error);
        }
    });
}

//Handler for account sign-in
function handleSignIn() {
    var email = document.getElementById('txtEmailLogin').value;
    var password = document.getElementById('txtPasswordLogin').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        console.log('Signed in Successfully')
    }) .catch(function(error) {
        window.alert(error.message);
    });

};

//Handler for account log out
function handleLogOut() {
    firebase.auth().signOut().then(function() {
        console.log('logged out successful')
        document.getElementById("loginbtn").classList.remove("hide");
        location.reload();
    }) .catch(function(error) {
        ///...
    });
    
};


                                       
