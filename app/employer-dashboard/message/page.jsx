export default function message() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-poppins-300">
        <div className="flex flex-col items-center text-center max-w-md">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <svg
  className="w-8 h-8 text-blue-600"
  fill="none"
  viewBox="0 0 36 24"
  stroke="currentColor"
  strokeWidth="2"
>
  {/* Left tick */}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 12l4 4L14 6"
  />
  {/* Right tick (slightly shifted to the right) */}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M14 12l4 4L24 6"
  />
</svg>



          </div>
          <h1 className="text-xl font-semibold mb-2">
            🎉 Congratulations, Your profile is 100% complete!
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Donec hendrerit, ante mattis pellentesque eleifend, tortor urna malesuada ante, eget
            aliquam nulla augue hendrerit ligula. Nunc mauris arcu, mattis sed sem vitae.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-100 hover:bg-gray-200 text-blue-800 font-medium py-2 px-4 rounded">
              View Dashboard
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center gap-2">
              Post Job
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <footer className="absolute bottom-4 text-xs text-gray-400">
          © 2024 MyJob - Job Portal. All rights Reserved
        </footer>
      </div>
    );
  }
  