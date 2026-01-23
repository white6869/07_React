function App() {
  return (
    <div className="flex flex-col h-screen font-sans">
      {/* 1. Header */}
      <header className="flex justify-end p-4 items-center space-x-4 text-sm">
        <a href="#" className="hover:underline">Gmail</a>
        <a href="#" className="hover:underline">이미지</a>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:shadow-md">
          로그인
        </button>
      </header>

      {/* 2. Main (Search Body) */}
      <main className="flex-grow flex flex-col items-center mt-28">
        <img 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
          alt="Google Logo"
          className="w-72"
        />
        
        <div className="w-full max-w-xl mt-8 px-4">
          <div className="flex items-center border border-gray-200 hover:shadow-md focus-within:shadow-md px-5 py-3 rounded-full transition-shadow">
            <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" className="flex-grow focus:outline-none text-lg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Google_Mic_Logo.svg" className="h-5 w-5 cursor-pointer" alt="Mic" />
          </div>
        </div>

        <div className="flex space-x-3 mt-8">
          <button className="bg-gray-50 text-gray-800 px-4 py-2 rounded border border-transparent hover:border-gray-300 hover:shadow-sm">
            Google 검색
          </button>
          <button className="bg-gray-50 text-gray-800 px-4 py-2 rounded border border-transparent hover:border-gray-300 hover:shadow-sm">
            I'm Feeling Lucky
          </button>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="bg-gray-100 text-gray-600">
        <div className="px-8 py-3 border-b border-gray-300 text-sm">대한민국</div>
        <div className="flex flex-wrap justify-between px-8 py-3 text-sm">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">광고</a>
            <a href="#" className="hover:underline">비즈니스</a>
            <a href="#" className="hover:underline">검색의 원리</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">개인정보처리방침</a>
            <a href="#" className="hover:underline">약관</a>
            <a href="#" className="hover:underline">설정</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;