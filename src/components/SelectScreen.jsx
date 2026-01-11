export default function SelectScreen({ onCreateClick, onJoinClick }) {
  return (
    <main>
      <div className="container">
        <div className="card">
          <h1>Chat Room</h1>
          <p>Pilih untuk membuat atau bergabung ke room</p>

          <button className="btn-primary" onClick={onCreateClick}>
            🏗️ Buat Room Baru
          </button>

          <button className="btn-secondary" onClick={onJoinClick}>
            🚪 Gabung ke Room
          </button>
        </div>
      </div>
    </main>
  );
}
