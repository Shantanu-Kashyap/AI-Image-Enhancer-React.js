import React from 'react';

function ImageUpload({ uploadImageHandler }) {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };

  return (
    <div className='relative overflow-hidden rounded-3xl border border-white/50 bg-white/75 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl md:p-8'>
      <div className='pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/40 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-20 -left-14 h-44 w-44 rounded-full bg-amber-300/30 blur-3xl' />

      <label
        htmlFor='fileInput'
        className='relative z-10 block w-full cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-white/70 p-10 text-center transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-white'
      >
        <input
          type='file'
          id='fileInput'
          className='hidden'
          accept='image/*'
          onChange={showImageHandler}
        />

        <p className='text-xl font-bold tracking-tight text-slate-800 md:text-2xl'>
          Drop your image here or click to upload
        </p>
        <p className='mt-2 text-sm font-medium text-slate-500'>
          JPEG, PNG, WEBP supported
        </p>
      </label>
    </div>
  );
}

export default ImageUpload;
