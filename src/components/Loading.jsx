import React from 'react';

function Loading() {
  return (
    <div className='flex items-center justify-center h-80'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50'></div>
    </div>
  );
}

export default Loading;
