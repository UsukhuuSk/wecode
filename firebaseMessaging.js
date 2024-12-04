// firebaseMessaging.js
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import firebaseApp from "./firebaseConfig";

const messaging = getMessaging(firebaseApp);

// Request user permission to send notifications
export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "BJ6_DekZWfXWOxdtifJC2olWB83uXIe6CKtb4jrkD7o46TtX2gxJBmj1PFrKQESXspjxoJpmAM5o_PMgKuQ9zLg" });
    if (token) {
      // console.log("FCM Token:", token);
      return token
      // Save the token to your server if needed
    } else {
      console.error("No registration token available. Request permission.");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

// Listen to messages
export const onForegroundMessage = () => {
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // Handle incoming message (e.g., show notification)
  });
};
