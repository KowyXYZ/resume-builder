import { InView } from '@/components/core/in-view';

export function HomeInfo() {
    return (
      <div className='h-full w-full overflow-hidden mt-56'>
        <div className=''> {/* Create enough space for scrolling */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -100px 0px' }} // Adjust margin here
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className='flex items-center justify-center '>
              <div className='flex flex-col justify-center items-center gap-8'>

                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-indigo-600/80">
                    <span>{`The Process`}</span>
                    
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400 via-indgo-600 to-indigo-400 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>

                <div className='text-center'>
                    <h1 className='font-black text-[32px] '>Three steps to build your dream resume</h1>
                    <p className='text-gray-400'>Turn your vision into reality in just 3 simple steps</p>
                </div>

                <div className='flex mt-5 justify-center items-center divide-x gap-12 divide-gray-500 divide-opacity-50'>
                  <div className='flex flex-col items-start justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    <h1 className='text-[18px] font-semibold'>Sign Up</h1>
                    <p className='text-[#7f8796] sm:w-[350px]'>Create your free account to get started with Ice.</p>
                  </div>

                  <div className='flex flex-col sm:pl-12 items-start justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>

                    <h1 className='text-[18px] font-semibold'>Customize</h1>
                    <p className='text-[#7f8796] sm:w-[350px]' >Choose a template and customize it to fit your needs.</p>
                  </div>

                  <div className='flex sm:pl-12 flex-col items-start justify-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>

                    <h1 className='text-[18px] font-semibold'>Launch</h1>
                    <p className='text-[#7f8796] sm:w-[350px]'>Publish your website and share it with the world.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
  