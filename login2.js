function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("login succesfully");
    window.open("URL");
    return false;

}
else
{
    alert("login failed");
    window.open("URL");
}



}
