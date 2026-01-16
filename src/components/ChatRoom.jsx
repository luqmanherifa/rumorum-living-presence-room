import { useChatRoom } from "../hooks/useChatRoom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RumorumLogoIcon, CopyIcon, PeopleIcon } from "./icons";

export default function ChatRoom({ username, roomCode }) {
  const { roomInfo, allMessages, myMessage, updateMyMessage } = useChatRoom(
    username,
    roomCode
  );
  const myBubble = allMessages.find((m) => m.name === username);
  const otherBubbles = allMessages.filter((m) => m.name !== username);
  const chatEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [otherBubbles.length]);

  useEffect(() => {
    setIsTyping(myMessage.length > 0);
  }, [myMessage]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(roomCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getInitials = (name) => {
    return name?.charAt(0).toUpperCase() || "?";
  };

  const colors = [
    "bg-rumor",
    "bg-whisper",
    "bg-echo",
    "bg-violet-500",
    "bg-pink-500",
    "bg-amber-500",
  ];

  const getColorForUser = (name) => {
    const index = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <main className="h-screen w-full flex justify-center bg-slate-50">
      <div className="w-full max-w-md h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white border-b-2 border-slate-200"
        >
          <div className="px-5 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <RumorumLogoIcon className="w-8 h-8 fill-rumor" />
                </motion.div>
                <div>
                  <h1 className="text-lg font-bold text-slate-800 leading-tight">
                    {roomInfo?.name || "..."}
                  </h1>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <PeopleIcon className="w-3 h-3 fill-slate-500" />
                    <span>{otherBubbles.length + 1} orang</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">
                    Anda
                  </p>
                  <p className="text-xs font-bold text-slate-800">{username}</p>
                </div>
                <div
                  className={`h-10 w-10 rounded-full ${getColorForUser(
                    username
                  )} flex items-center justify-center text-white font-bold text-base select-none`}
                >
                  {getInitials(username)}
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600 font-semibold">
                  Kode Room
                </span>
                <span className="text-sm font-bold text-slate-800 tracking-wider">
                  {roomCode}
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleCopyCode}
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                title="Salin kode"
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 fill-green-600"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                ) : (
                  <CopyIcon className="w-4 h-4 fill-slate-500" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Your Message Bubble */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="sticky top-0 z-10"
          >
            <div className="bg-white rounded-2xl rounded-tr-sm border-2 border-whisper p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className={`h-6 w-6 rounded-full ${getColorForUser(
                      username
                    )} flex items-center justify-center text-white font-bold text-xs select-none`}
                  >
                    {getInitials(username)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
                    Pesan Anda
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  type="button"
                  onClick={() => updateMyMessage("")}
                  disabled={!myMessage}
                  className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                    myMessage
                      ? "bg-whisper text-white hover:bg-whisper/80"
                      : "bg-slate-100 text-slate-300 cursor-not-allowed"
                  }`}
                  title="Reset"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="h-3 w-3"
                    fill="currentColor"
                  >
                    <path d="M544.1 256L552 256C565.3 256 576 245.3 576 232L576 88C576 78.3 570.2 69.5 561.2 65.8C552.2 62.1 541.9 64.2 535 71L483.3 122.8C439 86.1 382 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6C143.2 199.5 223.3 128 320 128C364.4 128 405.2 143 437.7 168.3L391 215C384.1 221.9 382.1 232.2 385.8 241.2C389.5 250.2 398.3 256 408 256L544.1 256zM573.5 356.5C576 339 563.8 322.8 546.4 320.3C529 317.8 512.7 330 510.2 347.4C496.9 440.4 416.8 511.9 320.1 511.9C275.7 511.9 234.9 496.9 202.4 471.6L249 425C255.9 418.1 257.9 407.8 254.2 398.8C250.5 389.8 241.7 384 232 384L88 384C74.7 384 64 394.7 64 408L64 552C64 561.7 69.8 570.5 78.8 574.2C87.8 577.9 98.1 575.8 105 569L156.8 517.2C201 553.9 258 576 320 576C449 576 555.7 480.6 573.4 356.5z" />
                  </svg>
                </motion.button>
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
                placeholder="Ketik sesuatu..."
                rows={2}
                className="w-full resize-none bg-slate-50 text-slate-800 placeholder:text-slate-400 rounded-lg px-2.5 py-2 text-sm font-medium focus:outline-none focus:bg-slate-100 transition-colors border-2 border-transparent focus:border-whisper"
              />

              <div className="mt-1.5 flex items-center justify-between">
                <p className="text-[9px] text-slate-500 font-medium">
                  Enter untuk hapus
                </p>
                <motion.div
                  animate={{ opacity: isTyping ? 1 : 0 }}
                  className="flex items-center gap-1"
                >
                  <div className="flex gap-0.5">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-1 h-1 rounded-full bg-whisper"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        repeat: Infinity,
                      }}
                      className="w-1 h-1 rounded-full bg-whisper"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        repeat: Infinity,
                      }}
                      className="w-1 h-1 rounded-full bg-whisper"
                    />
                  </div>
                  <span className="text-[9px] text-whisper font-bold">
                    Mengetik
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Others Messages */}
          <AnimatePresence>
            {otherBubbles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4 flex justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-8 h-8 fill-slate-400"
                    >
                      <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
                    </svg>
                  </div>
                </motion.div>
                <p className="text-base font-bold text-slate-700 mb-2">
                  Menunggu Teman...
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  Bagikan kode room untuk memulai chat
                </p>
              </motion.div>
            ) : (
              <div className="space-y-2.5">
                {otherBubbles.map((msg, index) => (
                  <div
                    key={`${msg.name}-${index}`}
                    className="flex items-start gap-2"
                  >
                    <div
                      className={`h-8 w-8 rounded-full ${getColorForUser(
                        msg.name
                      )} flex items-center justify-center text-white font-bold text-xs select-none flex-shrink-0`}
                    >
                      {getInitials(msg.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-white rounded-2xl rounded-tl-sm border-2 border-slate-200 px-3 py-2.5">
                        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                          {msg.name}
                        </p>
                        {msg.text ? (
                          <p className="text-sm font-medium text-slate-800 leading-relaxed break-words">
                            {msg.text}
                          </p>
                        ) : (
                          <div className="flex gap-1">
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="w-2 h-2 rounded-full bg-slate-400"
                            />
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 1,
                                delay: 0.2,
                                repeat: Infinity,
                              }}
                              className="w-2 h-2 rounded-full bg-slate-400"
                            />
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 1,
                                delay: 0.4,
                                repeat: Infinity,
                              }}
                              className="w-2 h-2 rounded-full bg-slate-400"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
