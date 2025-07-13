import React from 'react';
import Loading from './Loading';

function ImagePreview({ uploaded, enhanced, loading }) {
  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      {/* Original */}
      <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
          Original Image
        </h2>
        {uploaded ? (
          <img src={uploaded} alt="Uploaded" className='w-full h-80 object-contain p-2' />
        ) : (
          <div className='flex items-center justify-center h-80 bg-gray-100 text-gray-400'>
            No image selected
          </div>
        )}
      </div>

      {/* Enhanced */}
      <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
          Enhanced Image
        </h2>
        {loading ? (
          <Loading />
        ) : enhanced ? (
          <img src={enhanced} alt="Enhanced" className='w-full h-80 object-contain p-2' />
        ) : (
          <div className='flex items-center justify-center h-80 bg-gray-100 text-gray-400'>
            No enhanced image
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagePreview;
