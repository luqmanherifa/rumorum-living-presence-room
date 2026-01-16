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
            Gabung ke Room
          </h1>
          <p className="text-sm text-gray-500">
            Masukkan kode room untuk bergabung
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
              Kode Room
            </label>
            <input
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-echo focus:ring-0 transition"
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Contoh: gaming123"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
              Nama Anda
            </label>
            <input
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-echo focus:ring-0 transition"
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
          className="group relative mt-6 h-14 rounded-2xl bg-echo text-base font-bold uppercase tracking-wide text-white active:scale-[0.97] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-10 transition-opacity"></div>
          <span className="relative flex items-center justify-center gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-5 h-5 fill-white"
            >
              <path d="M320 576C461.4 576 576 461.4 576 320C576 295.6 572.6 271.9 566.2 249.5C584.8 213.4 563.5 165.9 519.5 159.5C472.6 101.2 400.6 64 320 64C239.4 64 167.4 101.3 120.5 159.5C76.5 165.9 55.2 213.4 73.8 249.5C67.4 271.9 64 295.5 64 320C64 461.4 178.6 576 320 576zM450.7 388.9C462.6 385.2 474.6 395.2 470.3 407C447.9 468.3 389 512.1 320 512.1C251 512.1 192.1 468.2 169.7 406.9C165.4 395.1 177.4 385.1 189.3 388.8C228.5 401 273 407.9 320 407.9C367 407.9 411.5 401 450.7 388.8zM419.1 157.9C424.4 147.2 439.6 147.2 444.9 157.9L465.8 200.3L512.5 207.1C524.3 208.8 529 223.3 520.5 231.6L486.7 264.6L494.7 311.2C496.7 322.9 484.4 331.9 473.8 326.4L432 304.4L390.2 326.4C379.7 331.9 367.3 323 369.3 311.2L377.3 264.6L343.5 231.6C335 223.3 339.7 208.8 351.5 207.1L398.2 200.3L419.1 157.9zM220.9 157.9L241.8 200.3L288.5 207.1C300.3 208.8 305 223.3 296.5 231.6L262.7 264.6L270.7 311.2C272.7 322.9 260.4 331.9 249.8 326.4L208 304.4L166.2 326.4C155.7 331.9 143.3 323 145.3 311.2L153.3 264.6L119.5 231.6C111 223.3 115.7 208.8 127.5 207.1L174.2 200.3L195.1 157.9C200.4 147.2 215.6 147.2 220.9 157.9z" />
            </svg>
            Gabung Room
          </span>
        </button>
      </div>
    </main>
  );
}
