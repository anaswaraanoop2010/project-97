var firebaseConfig = {
  apiKey: "AIzaSyC0BrzYHe5IVJ88LHy9Kcv27iVuxbzFrfE",
  authDomain: "class-test-e650a.firebaseapp.com",
  databaseURL: "https://class-test-e650a-default-rtdb.firebaseio.com",
  projectId: "class-test-e650a",
  storageBucket: "class-test-e650a.appspot.com",
  messagingSenderId: "607336817807",
  appId: "1:607336817807:web:211dd204304a81ba333cfa",
  measurementId: "G-GQC0XW41M0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
