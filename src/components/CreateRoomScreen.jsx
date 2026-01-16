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
    <main className="h-screen w-full flex justify-center items-center overflow-hidden bg-white">
      <div className="w-full max-w-md h-full flex flex-col px-5 py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Kembali"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-5 h-5 fill-current"
            >
              <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-lg font-bold text-gray-800 mb-1">
            Buat Room Baru
          </h1>
          <p className="text-sm text-gray-500">
            Lengkapi informasi untuk membuat room chat
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl bg-red-50 border-2 border-red-200 text-red-600 text-xs px-4 py-3 font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
              Nama Room
            </label>
            <input
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-whisper focus:ring-0 transition"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Nama room kamu"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
              Kode Room
            </label>
            <input
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-whisper focus:ring-0 transition"
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Kode room kamu"
            />
            <p className="mt-1.5 text-xs text-gray-500 px-1">
              Kode ini dipakai untuk join room
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
              Nama Anda
            </label>
            <input
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-whisper focus:ring-0 transition"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              placeholder="Nama kamu"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={onSubmit}
          className="group relative mt-6 h-14 rounded-2xl bg-whisper text-base font-bold uppercase tracking-wide text-white active:scale-[0.97] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-10 transition-opacity"></div>
          <span className="relative flex items-center justify-center gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-5 h-5 fill-white"
            >
              <path d="M295.4 37L310.2 73.8L347 88.6C350 89.8 352 92.8 352 96C352 99.2 350 102.2 347 103.4L310.2 118.2L295.4 155C294.2 158 291.2 160 288 160C284.8 160 281.8 158 280.6 155L265.8 118.2L229 103.4C226 102.2 224 99.2 224 96C224 92.8 226 89.8 229 88.6L265.8 73.8L280.6 37C281.8 34 284.8 32 288 32C291.2 32 294.2 34 295.4 37zM142.7 105.7L164.2 155.8L214.3 177.3C220.2 179.8 224 185.6 224 192C224 198.4 220.2 204.2 214.3 206.7L164.2 228.2L142.7 278.3C140.2 284.2 134.4 288 128 288C121.6 288 115.8 284.2 113.3 278.3L91.8 228.2L41.7 206.7C35.8 204.2 32 198.4 32 192C32 185.6 35.8 179.8 41.7 177.3L91.8 155.8L113.3 105.7C115.8 99.8 121.6 96 128 96C134.4 96 140.2 99.8 142.7 105.7zM496 368C502.4 368 508.2 371.8 510.7 377.7L532.2 427.8L582.3 449.3C588.2 451.8 592 457.6 592 464C592 470.4 588.2 476.2 582.3 478.7L532.2 500.2L510.7 550.3C508.2 556.2 502.4 560 496 560C489.6 560 483.8 556.2 481.3 550.3L459.8 500.2L409.7 478.7C403.8 476.2 400 470.4 400 464C400 457.6 403.8 451.8 409.7 449.3L459.8 427.8L481.3 377.7C483.8 371.8 489.6 368 496 368zM492 64C503 64 513.6 68.4 521.5 76.2L563.8 118.5C571.6 126.4 576 137 576 148C576 159 571.6 169.6 563.8 177.5L475.6 265.7L374.3 164.4L462.5 76.2C470.4 68.4 481 64 492 64zM76.2 462.5L340.4 198.3L441.7 299.6L177.5 563.8C169.6 571.6 159 576 148 576C137 576 126.4 571.6 118.5 563.8L76.2 521.5C68.4 513.6 64 503 64 492C64 481 68.4 470.4 76.2 462.5z" />
            </svg>
            Buat Room
          </span>
        </button>
      </div>
    </main>
  );
}
