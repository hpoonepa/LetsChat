function AddUser(){
User_name=document.getElementById("username").nodeValue;
localStorage.setItem("username", User_name)    
window.location="kwitter_room.html";
}