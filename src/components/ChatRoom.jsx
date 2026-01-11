import { useChatRoom } from "../hooks/useChatRoom";

export default function ChatRoom({ username, roomCode }) {
  const { roomInfo, allMessages, myMessage, updateMyMessage } = useChatRoom(
    username,
    roomCode
  );

  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="flex-between">
            <div>
              <h1>{roomInfo?.name || "Loading..."}</h1>
              <p>
                Logged in as: <span className="username">{username}</span>
              </p>
            </div>
            <div>
              <p className="text-small">Kode Room:</p>
              <p className="room-code">{roomCode}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex-between">
            <h2>Pesan Anda</h2>
            <span className="text-small">Tekan Enter untuk hapus</span>
          </div>
          <textarea
            value={myMessage}
            onChange={(e) => updateMyMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                updateMyMessage("");
              }
            }}
            placeholder="Ketik pesan Anda di sini... (Enter untuk hapus, Shift+Enter untuk baris baru)"
          />
        </div>

        <div className="card">
          <h2>Semua Pesan ({allMessages.length})</h2>

          {allMessages.length === 0 ? (
            <p className="empty-state">Belum ada pesan...</p>
          ) : (
            <div>
              {allMessages.map((msg) => (
                <div
                  key={msg.name}
                  className={`message-box ${
                    msg.name === username ? "own" : ""
                  }`}
                >
                  <div className="message-header">
                    <div
                      className={`dot ${msg.name === username ? "own" : ""}`}
                    />
                    <span className="username">
                      {msg.name}
                      {msg.name === username && " (Anda)"}
                    </span>
                  </div>
                  <p>
                    {msg.text || (
                      <span className="text-small">Belum ada pesan</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
