export default function SelectScreen({ onCreateClick, onJoinClick }) {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center px-5 overflow-hidden bg-white">
      <div className="w-full max-w-md flex flex-col h-full justify-center">
        {/* Title */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-purple-100 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-blue-100 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <div className="relative w-20 h-20 bg-rumor rounded-3xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-11 h-11 fill-white"
                >
                  <path d="M416 208C416 305.2 330 384 224 384C197.3 384 171.9 379 148.8 370L67.2 413.2C57.9 418.1 46.5 416.4 39 409C31.5 401.6 29.8 390.1 34.8 380.8L70.4 313.6C46.3 284.2 32 247.6 32 208C32 110.8 118 32 224 32C330 32 416 110.8 416 208zM416 576C321.9 576 243.6 513.9 227.2 432C347.2 430.5 451.5 345.1 463 229.3C546.3 248.5 608 317.6 608 400C608 439.6 593.7 476.2 569.6 505.6L605.2 572.8C610.1 582.1 608.4 593.5 601 601C593.6 608.5 582.1 610.2 572.8 605.2L491.2 562C468.1 571 442.7 576 416 576z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-heading tracking-wide text-rumor font-extrabold">
            Rumorum
          </h1>
          <p className="mt-2 text-sm text-gray-400 font-medium">
            Cerita yang lewat di satu ruang
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3.5">
          <button
            onClick={onCreateClick}
            className="group relative h-16 rounded-2xl bg-whisper active:scale-[0.97] transition-all text-base font-bold uppercase tracking-wide text-white overflow-hidden"
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

          <button
            onClick={onJoinClick}
            className="group relative h-16 rounded-2xl bg-echo active:scale-[0.97] transition-all text-base font-bold uppercase tracking-wide text-white overflow-hidden"
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
      </div>
    </main>
  );
}
