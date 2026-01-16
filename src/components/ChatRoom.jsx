import { useChatRoom } from "../hooks/useChatRoom";
import { useEffect, useRef } from "react";

export default function ChatRoom({ username, roomCode }) {
  const { roomInfo, allMessages, myMessage, updateMyMessage } = useChatRoom(
    username,
    roomCode
  );
  const myBubble = allMessages.find((m) => m.name === username);
  const otherBubbles = allMessages.filter((m) => m.name !== username);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [otherBubbles.length]);

  return (
    <main className="h-screen w-full flex justify-center bg-white">
      <div className="w-full max-w-md h-screen flex flex-col">
        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 h-16 px-5 flex items-center justify-between border-b-2 border-gray-200 bg-white z-20">
            <div className="flex flex-col leading-tight">
              <h1 className="text-base font-bold text-gray-800">
                {roomInfo?.name || "Memuat..."}
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Kode:{" "}
                <span className="font-semibold text-gray-700">{roomCode}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col text-right leading-tight">
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                  Anda
                </p>
                <p className="text-xs font-bold text-gray-800">{username}</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-whisper flex items-center justify-center text-white font-bold text-sm select-none">
                {username?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="px-4 py-4 pb-6">
            {/* User Bubble */}
            <div className="sticky top-16 z-10 mb-4 flex justify-end">
              <div className="w-[70%] bg-whisper text-white rounded-xl rounded-tr-md px-3 py-2.5">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[10px] font-bold opacity-90 uppercase tracking-wide">
                    Anda
                  </p>
                  <button
                    type="button"
                    onClick={() => updateMyMessage("")}
                    disabled={!myMessage}
                    className={`
                      h-5 w-5
                      rounded-full
                      flex items-center justify-center
                      transition-all
                      ${
                        myMessage
                          ? "bg-white bg-opacity-20 text-white hover:bg-opacity-30 active:scale-95"
                          : "bg-white bg-opacity-10 text-purple-200 cursor-not-allowed"
                      }
                    `}
                    title="Reset teks"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="h-3 w-3"
                      fill="currentColor"
                    >
                      <path d="M544.1 256L552 256C565.3 256 576 245.3 576 232L576 88C576 78.3 570.2 69.5 561.2 65.8C552.2 62.1 541.9 64.2 535 71L483.3 122.8C439 86.1 382 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6C143.2 199.5 223.3 128 320 128C364.4 128 405.2 143 437.7 168.3L391 215C384.1 221.9 382.1 232.2 385.8 241.2C389.5 250.2 398.3 256 408 256L544.1 256zM573.5 356.5C576 339 563.8 322.8 546.4 320.3C529 317.8 512.7 330 510.2 347.4C496.9 440.4 416.8 511.9 320.1 511.9C275.7 511.9 234.9 496.9 202.4 471.6L249 425C255.9 418.1 257.9 407.8 254.2 398.8C250.5 389.8 241.7 384 232 384L88 384C74.7 384 64 394.7 64 408L64 552C64 561.7 69.8 570.5 78.8 574.2C87.8 577.9 98.1 575.8 105 569L156.8 517.2C201 553.9 258 576 320 576C449 576 555.7 480.6 573.4 356.5z" />
                    </svg>
                  </button>
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
                  placeholder="Tulis pesan..."
                  rows={2}
                  className="w-full resize-none bg-white bg-opacity-20 text-white placeholder-purple-100 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:bg-opacity-30 transition"
                />
                <p className="text-[9px] text-white text-opacity-60 mt-1 px-0.5">
                  Enter untuk hapus pesan
                </p>
              </div>
            </div>

            {/* Others Bubble */}
            <div className="flex flex-col gap-3">
              {otherBubbles.length === 0 ? (
                <div className="text-center mt-8">
                  <p className="text-sm text-gray-500 font-medium">
                    Menunggu pengguna lain bergabung...
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5">
                    Bagikan kode room untuk mengundang teman
                  </p>
                </div>
              ) : (
                otherBubbles.map((msg, index) => (
                  <div key={index} className="flex justify-start">
                    <div className="max-w-[85%] bg-echo text-white rounded-xl rounded-tl-md px-4 py-3 transition-all">
                      <p className="text-[10px] font-bold opacity-90 uppercase tracking-wide mb-1.5">
                        {msg.name}
                      </p>
                      <p className="text-sm font-medium leading-relaxed">
                        {msg.text ? (
                          msg.text
                        ) : (
                          <span className="text-xs opacity-70 italic">...</span>
                        )}
                      </p>
                    </div>
                  </div>
                ))
              )}
              <div ref={chatEndRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
