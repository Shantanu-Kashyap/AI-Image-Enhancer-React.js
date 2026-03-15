import React from 'react';

function Loading() {
  return (
    <div className='flex h-80 flex-col items-center justify-center gap-4 bg-slate-50 md:h-[28rem]'>
      <div className='relative flex h-16 w-16 items-center justify-center'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/70' />
        <span className='inline-flex h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-cyan-600' />
      </div>
      <p className='text-sm font-bold uppercase tracking-[0.16em] text-slate-500'>
        Enhancing...
      </p>
    </div>
  );
}

export default Loading;
