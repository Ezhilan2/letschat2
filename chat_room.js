const firebaseConfig = {
    apiKey: "AIzaSyBM3O9tRh7lniXZXZThuBNSK9JgtgORwsA",
    authDomain: "lets-chat-eb339.firebaseapp.com",
    databaseURL: "https://lets-chat-eb339-default-rtdb.firebaseio.com",
    projectId: "lets-chat-eb339",
    storageBucket: "lets-chat-eb339.appspot.com",
    messagingSenderId: "1078099370634",
    appId: "1:1078099370634:web:d0868f05d33f40bf394373",
    measurementId: "G-NJVK7QWXD1"
  };
  
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_room.html";
  }


function getData()
{
    firebase.database().ref("/").on('value', function(snapshot)
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot)
        {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //start code
            console.log("Room Name-"+ Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
            document.getElementById("output").innerHTML += row;
      
            //end code
        });
    });
}
    getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat_page.html"
   }

   function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location="index.html";
}
