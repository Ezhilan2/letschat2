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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



