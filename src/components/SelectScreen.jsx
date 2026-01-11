export default function SelectScreen({ onCreateClick, onJoinClick }) {
  return (
    <main className="w-full h-full flex flex-col px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-heading tracking-wide text-gray-700">
          Rumorum
        </h1>
        <p className="mt-2 text-gray-500">Buat atau gabung ke room</p>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <button
          onClick={onCreateClick}
          className="flex-1 rounded-2xl bg-blue-500 text-white text-xl font-bold active:scale-95 transition"
        >
          Buat Room
        </button>
        <button
          onClick={onJoinClick}
          className="flex-1 rounded-2xl bg-yellow-500 text-white text-xl font-bold active:scale-95 transition"
        >
          Gabung Room
        </button>
      </div>
    </main>
  );
}
