function register(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!name || !email || !password) {
        return alert("All the fields are required")
    }

    var userData = {name, email, password}

    var users = JSON.parse(localStorage.getItem("Users")) || [];

    users.push(userData);

    localStorage.setItem("Users", JSON.stringify(users))

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    alert("Registration Successful")

    window.location.href = './../login/index.html';
}   