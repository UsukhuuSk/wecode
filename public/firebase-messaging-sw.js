// public/firebase-messaging-sw.js
importScripts("/firebase-app.js");
importScripts("/firebase-messaging.js");
// const firebaseConfig = {
//   apiKey: "AIzaSyBKzwVXqrlf2WBSihtnkqRUjmqhrdt8kqY",
//   authDomain: "ai-academy-asia.firebaseapp.com",
//   projectId: "ai-academy-asia",
//   storageBucket: "ai-academy-asia.firebasestorage.app",
//   messagingSenderId: "950063556704",
//   appId: "1:950063556704:web:5217ff3c9d3339a8a5fb05"
// };
const firebaseConfig = {
  apiKey: "AIzaSyA_hiL7XrvVCHuST-d4_LdedXR9jxiUHOg",
  authDomain: "wecodeai.firebaseapp.com",
  projectId: "wecodeai",
  storageBucket: "wecodeai.firebasestorage.app",
  messagingSenderId: "142686461040",
  appId: "1:142686461040:web:024d01355f25103f62e8b5"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  // };
  // self.registration.showNotification(notificationTitle, notificationOptions);
  self.clients.matchAll({includeUncontrolled: true, type: "window"}).then(clients => {
    clients.forEach(client => {
      client.postMessage({
        type: "backgroundMessage",
        message: payload,
      });
    });
  });
});
