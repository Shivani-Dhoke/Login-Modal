function myFunction(){
var pass = document.getElementById("myInput")
if(pass.type === "password")
{
   pass.type = "text";
}
else{
    pass.type = "password"
}
}
