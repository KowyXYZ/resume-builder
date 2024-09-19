import { InView } from '@/components/core/in-view';

export function HomeInfo() {
    return (
      <div className='h-screen w-full overflow-auto mt-56'>
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
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>{`The Process`}</span>
                    
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>

                <div className='text-center'>
                    <h1 className='font-black text-[32px] '>Three steps to build your dream resume</h1>
                    <p className='text-gray-400'>Turn your vision into reality in just 3 simple steps</p>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
  