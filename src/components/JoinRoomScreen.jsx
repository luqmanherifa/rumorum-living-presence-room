export default function JoinRoomScreen({
  roomCode,
  setRoomCode,
  username,
  setUsername,
  error,
  onBack,
  onSubmit,
}) {
  return (
    <main>
      <div className="container">
        <div className="card">
          <button className="btn-back" onClick={onBack}>
            ← Kembali
          </button>

          <h1>Gabung ke Room</h1>
          <p>Masukkan kode room untuk bergabung</p>

          {error && <div className="error">{error}</div>}

          <div>
            <label>Kode Room</label>
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="gaming123, belajar, dll"
            />

            <label>Nama Anda</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              placeholder="Nama Anda..."
            />

            <button className="btn-primary" onClick={onSubmit}>
              Gabung ke Room
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
