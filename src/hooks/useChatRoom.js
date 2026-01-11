import { useEffect, useState } from "react";
import { ref, onValue, set, onDisconnect } from "firebase/database";
import { db } from "../lib/firebase";
import { generateDeviceFingerprint } from "../utils/fingerprint";

const DEVICE_ID = generateDeviceFingerprint();

export function useChatRoom(username, roomCode) {
  const [roomInfo, setRoomInfo] = useState(null);
  const [allMessages, setAllMessages] = useState([]);
  const [myMessage, setMyMessage] = useState("");

  const roomInfoRef = ref(db, `rooms/${roomCode}/room`);
  const fieldsRef = ref(db, `rooms/${roomCode}/fields`);
  const myFieldRef = ref(db, `rooms/${roomCode}/fields/${username}`);

  useEffect(() => {
    const unsubscribe = onValue(roomInfoRef, (snapshot) => {
      setRoomInfo(snapshot.val());
    });
    return () => unsubscribe();
  }, [roomCode]);

  useEffect(() => {
    const unsubscribe = onValue(fieldsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messages = Object.keys(data).map((name) => ({
          name,
          text: data[name],
        }));
        setAllMessages(messages);
      } else {
        setAllMessages([]);
      }
    });

    return () => unsubscribe();
  }, [roomCode]);

  useEffect(() => {
    const memberRef = ref(db, `rooms/${roomCode}/members/${username}`);

    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Jakarta",
    };
    const joinedAt = now.toLocaleString("id-ID", options);

    set(memberRef, {
      name: username,
      deviceId: DEVICE_ID,
      joinedAt: joinedAt,
    });

    set(myFieldRef, "").then(() => {
      onDisconnect(myFieldRef).remove();
    });

    const unsubscribe = onValue(myFieldRef, (snapshot) => {
      const value = snapshot.val();
      setMyMessage(value || "");
    });

    return () => unsubscribe();
  }, [username, roomCode]);

  const updateMyMessage = (value) => {
    setMyMessage(value);
    set(myFieldRef, value);
  };

  return { roomInfo, allMessages, myMessage, updateMyMessage };
}
