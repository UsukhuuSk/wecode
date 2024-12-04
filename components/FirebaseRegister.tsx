'use client'
import { useEffect, useState } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import { requestNotificationPermission, onForegroundMessage } from "../firebaseMessaging";
import firebaseApp from "../firebaseConfig";
export default function FirebaseRegister() {
  const [backgroundMessage, setBackgroundMessage] = useState(null);
  useEffect(() => {
    const messaging = getMessaging(firebaseApp)
    const handleBackgroundMessage = (event : any) => {
      console.log('event.data.type', event)
      if (event.data && event.data.type === "backgroundMessage") {
        setBackgroundMessage(event.data.message);
        // You can update the UI here or trigger an alert, modal, etc.
        console.log("Background message received 111:", event.data.message);
      }
    };

    if (navigator && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered: ", registration);
        })
        .catch((err) => console.error("Service Worker registration failed: ", err));
    }

    requestNotificationPermission().then(token => {
      console.log("FCM Token:", token);
    })
    onMessage(messaging, (payload : any) => {
      console.log("Foreground message received:", payload);
      // Handle the incoming message (e.g., update app state, show an alert, etc.)
      const title = payload.notification.title;
      const body = payload.notification.body;
      alert(`New message: ${title} - ${body}`);
    });

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", handleBackgroundMessage);
    }

    // Cleanup listener on component unmount
    return () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.removeEventListener("message", handleBackgroundMessage);
      }
    };
  }, []);

  return <div />;
}