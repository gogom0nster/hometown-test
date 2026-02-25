<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAcgpImd4xQQrXjsdeUtISiI0blO6qHNhQ",
    authDomain: "hometown-data.firebaseapp.com",
    projectId: "hometown-data",
    storageBucket: "hometown-data.firebasestorage.app",
    messagingSenderId: "427121820704",
    appId: "1:427121820704:web:ae205795fbcac3e713e845",
    measurementId: "G-3WQWD0BW3F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
