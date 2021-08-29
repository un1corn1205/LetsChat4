user_name = localStorage.getItem("user_name");
document.getElementById("welcoming_user").innerHTML = "Welcome, " + user_name + "!";

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBi07VwqfWZbjky047HeLjI_XWlujiIc0I",
    authDomain: "letschatdb-39904.firebaseapp.com",
    databaseURL: "https://letschatdb-39904-default-rtdb.firebaseio.com",
    projectId: "letschatdb-39904",
    storageBucket: "letschatdb-39904.appspot.com",
    messagingSenderId: "66621067900",
    appId: "1:66621067900:web:c57cd596948a7022fc6ff9"
  };
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" +  Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
 getData();

  function addRoom()
  {
        room_name= document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);
        document.getElementById("room_name").innerHTML= "";
    }

    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location = "lets_chat_messagepage.html";
      }