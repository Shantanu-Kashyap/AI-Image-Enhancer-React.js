import React from 'react';

function ImageUpload({ uploadImageHandler }) {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };

  return (
    <div className='bg-white shadow-xl rounded-xl p-6 w-full max-w-2xl transition-all'>
      <label
        htmlFor='fileInput'
        className='block p-6 w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-500 hover:bg-blue-50 transition'
      >
        <input type='file' id='fileInput' className='hidden' onChange={showImageHandler} />
        <span className='text-lg font-medium text-gray-600'>
          Click or drag to upload your image
        </span>
      </label>
    </div>
  );
}

export default ImageUpload;
