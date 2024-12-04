// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBKzwVXqrlf2WBSihtnkqRUjmqhrdt8kqY",
  authDomain: "ai-academy-asia.firebaseapp.com",
  projectId: "ai-academy-asia",
  storageBucket: "ai-academy-asia.firebasestorage.app",
  messagingSenderId: "950063556704",
  appId: "1:950063556704:web:5217ff3c9d3339a8a5fb05"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
