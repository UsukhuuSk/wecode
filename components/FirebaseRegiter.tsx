'use client'
import { useEffect } from "react";
import { requestNotificationPermission, onForegroundMessage } from "../firebaseMessaging";

export default function FirebaseRegister() {
  useEffect(() => {
    console.log('---')
    if (navigator && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered: ", registration);
        })
        .catch((err) => console.error("Service Worker registration failed: ", err));
    }

    requestNotificationPermission();
    onForegroundMessage();
  }, []);

  return <div />;
}