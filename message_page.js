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

 user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

function send(){
   message= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        messsage:message,
        likes:0
        });

        document.getElementById("msg").value="";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['messsage'];
like = message_data['likes'];

name_with_tag = "<h4> "+ name;
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({
    likes:updated_likes
  });
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location.replace("index.html");
}
