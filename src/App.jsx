import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className='relative min-h-screen overflow-hidden px-4 py-10 text-slate-900 md:px-8'>
      <div className='bg-orb bg-orb-one' />
      <div className='bg-orb bg-orb-two' />

      <div className='relative mx-auto flex w-full max-w-6xl flex-col'>
        <header className='mb-10 md:mb-12'>
          <p className='inline-flex rounded-full border border-slate-900/15 bg-white/60 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 backdrop-blur'>
            Beast Mode Enhancer
          </p>

          <h1 className='mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl'>
            Turn ordinary photos into razor-sharp masterpieces
          </h1>

          <p className='mt-4 max-w-2xl text-base font-medium text-slate-600 md:text-lg'>
            Upload once, enhance instantly, and download your premium result with one click.
          </p>
        </header>

        <Home />

        <footer className='mt-10 border-t border-slate-900/10 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500'>
          Powered by ShantanuAI
        </footer>
      </div>
    </div>
  );
}

export default App;
