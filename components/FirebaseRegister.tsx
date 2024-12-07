'use client'
import { useEffect, useState } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import { requestNotificationPermission, onForegroundMessage } from "../firebaseMessaging";
import firebaseApp from "../firebaseConfig";
import { Helper } from "../lib/helper";
import { BaseApi } from "../api/baseApi";
const apiUrl = 'auth/firebase/token'
export default function FirebaseRegister({ onCountChange }: any) {
  useEffect(() => {
    const messaging = getMessaging(firebaseApp)
    const handleBackgroundMessage = (event : any) => {
      if (event.data && event.data.type === "backgroundMessage") {
        // HANDLE REFRESH NOTIFICATION COUNT
      }
    };

    if (navigator && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((_) => {
          requestNotificationPermission().then(token => {
            // console.log("FCM Token:", token);
            BaseApi._post(apiUrl, { token })
          })
        })
        .catch((err) => console.error("Service Worker registration failed: ", err));
    }

    
    onMessage(messaging, (payload : any) => {
      // console.log("Foreground message received:", payload);
      // const title = payload.notification.title;
      // const body = payload.notification.body;
      // HANDLE REFRESH NOTIFICATION COUNT
      onCountChange()
      Helper.handleSuccess(payload.notification.body, { position: 'bottom-right', theme: 'dark' })
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