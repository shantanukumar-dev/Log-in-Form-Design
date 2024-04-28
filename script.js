
function login() 
{
    var username = document.getElementById("Name").value;
    var password = document.getElementById("pass").value;
    if (username == "user123" && password == "password123")
     {
        alert("Succrssfully Login");
    }
    else 
    {
        alert("Please Enter The Valid input");
    }

};
