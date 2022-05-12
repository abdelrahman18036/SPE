const config = {
  apiKey: "AIzaSyBoOU6VxNv5cM_qass1Nw3ginhloRhC4U8",
  authDomain: "spe-al-azhar.firebaseapp.com",
  projectId: "spe-al-azhar",
  databaseURL: "https://spe-al-azhar-default-rtdb.firebaseio.com",
  storageBucket: "spe-al-azhar.appspot.com",
  messagingSenderId: "537145035421",
  appId: "1:537145035421:web:c33261f41fbc2fb6632274",
  measurementId: "G-4M5YSFSN1K"
};
firebase.initializeApp(config);

function getInputVal(id) {
  return document
      .getElementById(id)
      .value;
}
var messagesRef = firebase
  .database()
  .ref('newsletter');

  document.getElementById('newsletter').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();

  // Get values

  var email = getInputVal('email');


  // Save message
  saveMessage( email);

  // Show alert
  document
      .querySelector('.alert')
      .style
      .display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
      document
          .querySelector('.alert')
          .style
          .display = 'none';
  }, 3000);

  // Clear form

}

function saveMessage(email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set(
      {email: email}
  );
  alert("Subscribed Successfully");

}