  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBoOU6VxNv5cM_qass1Nw3ginhloRhC4U8",
    authDomain: "spe-al-azhar.firebaseapp.com",
    projectId: "spe-al-azhar",
    storageBucket: "spe-al-azhar.appspot.com",
    messagingSenderId: "537145035421",
    appId: "1:537145035421:web:c33261f41fbc2fb6632274",
    measurementId: "G-4M5YSFSN1K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
