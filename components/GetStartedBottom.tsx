"use client"

import { InView } from '@/components/core/in-view';
import ColoredLights from './ColoredLights';

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function GetStartedBottom() {
    return (
      <div className=' overflow-hidden mt-72'>
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

                
                
                <div className='w-screen  h-full'>
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}
                        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
                    >
                        From Idea to Launch<br />
                        Faster Than Ever
                        
                    </motion.h1>
                    <motion.div
                    className='flex justify-center items-center text-center flex-col'
                    initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}>
                    <p className='text-gray-400'>Build stunning websites with Ice's intuitive resume builder.</p>
                    <button className="mt-5 font-semibold px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                      Get started for free
                    </button>
                    </motion.div>
                    </LampContainer>
                </div>



              </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
  