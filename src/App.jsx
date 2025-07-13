import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 px-4 py-10'>
      <div className='text-center mb-10'>
        <h1 className='text-5xl font-extrabold text-gray-800 tracking-tight drop-shadow-md'>
          AI Image Enhancer
        </h1>
        <p className='mt-3 text-lg text-gray-600'>
          Upload your image and let AI enhance it in seconds!
        </p>
      </div>

      <Home />

      {/* Footer */}
      <footer className='mt-10 text-sm text-gray-500'>
        Powered by <span className='font-semibold text-gray-700'>@ShantanuAI</span>
      </footer>
    </div>
  );
}

export default App;
