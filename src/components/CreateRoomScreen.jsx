export default function CreateRoomScreen({
  roomName,
  setRoomName,
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

          <h1>Buat Room Baru</h1>
          <p>Isi detail untuk membuat room chat</p>

          {error && <div className="error">{error}</div>}

          <div>
            <label>Nama Room</label>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Misal: Room Gaming"
            />

            <label>Kode Room</label>
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="gaming123, belajar, dll"
            />
            <p className="text-small">Buat kode unik untuk room Anda (bebas)</p>

            <label>Nama Anda</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              placeholder="Nama Anda..."
            />

            <button className="btn-primary" onClick={onSubmit}>
              Buat Room & Masuk
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
