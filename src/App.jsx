import { useState } from "react";
import { get, ref, set } from "firebase/database";
import { db } from "./lib/firebase";
import ChatRoom from "./components/ChatRoom";
import SelectScreen from "./components/SelectScreen";
import CreateRoomScreen from "./components/CreateRoomScreen";
import JoinRoomScreen from "./components/JoinRoomScreen";

export default function App() {
  const [step, setStep] = useState("select");
  const [roomCode, setRoomCode] = useState("");
  const [roomName, setRoomName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleCreateRoom = async () => {
    if (!roomName.trim() || !roomCode.trim() || !username.trim()) {
      setError("Nama room, kode room, dan nama Anda harus diisi!");
      return;
    }

    const code = roomCode.trim();
    const roomRef = ref(db, `rooms/${code}/room`);

    const snapshot = await get(roomRef);
    if (snapshot.exists()) {
      setError("Kode room sudah digunakan! Gunakan kode lain.");
      return;
    }

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
    const createdAt = now.toLocaleString("id-ID", options);

    await set(roomRef, {
      name: roomName.trim(),
      createdAt: createdAt,
    });

    setRoomCode(code);
    setStep("chat");
  };

  const handleJoinRoom = async () => {
    if (!roomCode.trim() || !username.trim()) {
      setError("Kode room dan nama Anda harus diisi!");
      return;
    }

    const code = roomCode.trim();
    const roomRef = ref(db, `rooms/${code}/room`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) {
      setError("Room tidak ditemukan! Periksa kode room.");
      return;
    }

    setRoomCode(code);
    setStep("chat");
  };

  const handleBack = () => {
    setStep("select");
    setError("");
  };

  if (step === "select") {
    return (
      <SelectScreen
        onCreateClick={() => setStep("create")}
        onJoinClick={() => setStep("join")}
      />
    );
  }

  if (step === "create") {
    return (
      <CreateRoomScreen
        roomName={roomName}
        setRoomName={setRoomName}
        roomCode={roomCode}
        setRoomCode={setRoomCode}
        username={username}
        setUsername={setUsername}
        error={error}
        onBack={handleBack}
        onSubmit={handleCreateRoom}
      />
    );
  }

  if (step === "join") {
    return (
      <JoinRoomScreen
        roomCode={roomCode}
        setRoomCode={setRoomCode}
        username={username}
        setUsername={setUsername}
        error={error}
        onBack={handleBack}
        onSubmit={handleJoinRoom}
      />
    );
  }

  if (step === "chat") {
    return <ChatRoom username={username} roomCode={roomCode} />;
  }
}
