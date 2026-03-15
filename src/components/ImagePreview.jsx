import React from 'react';
import Loading from './Loading';

function ImagePreview({ uploaded, enhanced, loading, originalFileName }) {
  const downloadEnhancedImage = async () => {
    if (!enhanced) {
      return;
    }

    const sanitizedFileName = `${originalFileName || 'enhanced-image'}-enhanced.jpg`;

    try {
      const response = await fetch(enhanced);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = sanitizedFileName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const anchor = document.createElement('a');
      anchor.href = enhanced;
      anchor.download = sanitizedFileName;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      console.error('Download fallback used:', error);
    }
  };

  return (
    <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
      <article className='overflow-hidden rounded-3xl border border-white/45 bg-white/80 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl'>
        <div className='flex items-center justify-between border-b border-slate-200/70 bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-4 text-white'>
          <h2 className='text-base font-bold uppercase tracking-[0.12em] md:text-lg'>Original</h2>
        </div>
        {uploaded ? (
          <img src={uploaded} alt='Uploaded' className='h-80 w-full object-contain bg-white p-3 md:h-[28rem]' />
        ) : (
          <div className='flex h-80 items-center justify-center bg-slate-100 text-sm font-semibold text-slate-400 md:h-[28rem]'>
            No image selected
          </div>
        )}
      </article>

      <article className='overflow-hidden rounded-3xl border border-white/45 bg-white/80 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl'>
        <div className='flex items-center justify-between border-b border-cyan-100 bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-4 text-white'>
          <h2 className='text-base font-bold uppercase tracking-[0.12em] md:text-lg'>Enhanced</h2>

          <button
            type='button'
            disabled={!enhanced || loading}
            onClick={downloadEnhancedImage}
            className='rounded-full border border-white/60 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition enabled:hover:bg-white enabled:hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50'
          >
            Download
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : enhanced ? (
          <img src={enhanced} alt='Enhanced' className='h-80 w-full object-contain bg-white p-3 md:h-[28rem]' />
        ) : (
          <div className='flex h-80 items-center justify-center bg-slate-100 text-sm font-semibold text-slate-400 md:h-[28rem]'>
            No enhanced image
          </div>
        )}
      </article>
    </div>
  );
}

export default ImagePreview;
