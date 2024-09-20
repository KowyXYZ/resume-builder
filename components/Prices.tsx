import { InView } from '@/components/core/in-view';
import ColoredLights from './ColoredLights';

export function Prices() {
    return (
      <div className='h-full w-full overflow-hidden mt-72'>
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
                    <span>{`Features`}</span>
                    
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400 via-indgo-600 to-indigo-400 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>

                <div className='text-center'>
                    <h1 className='font-black text-[32px] '>Discover our powerful features</h1>
                    <p className='text-gray-400'>Ice offers a range of features to help you build a stunning resume in no time</p>
                </div>

                <div>
                  <img src="/assets/stars.png" alt="stars" />
                </div>
                
                <div className='flex gap-24 mt-8 justify-center items-center flex-wrap container mx-auto'>
                  <div className='flex flex-col items-start justify-center gap-2'>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                      </svg>

                      <h1 className='text-[18px] font-semibold'>Fast Setup</h1>
                      <p className='text-[#7f8796] sm:w-[350px]'>Get your resume up quickly with full functionality with our builder.</p>
                    </div>
                    

                    <div className='flex flex-col items-start justify-center gap-2'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>


                    <h1 className='text-[18px] font-semibold'>Customizable Templates</h1>
                    <p className='text-[#7f8796] sm:w-[350px]'>Choose from a variety of stunning templates and customize them to suit your brand.</p>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-2'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>



                    <h1 className='text-[18px] font-semibold'>Good Optimized</h1>
                    <p className='text-[#7f8796] sm:w-[350px]'>Get your resume up quickly with full optimization.</p>
                    </div>

                    
                  
                   
                </div>
              </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
  