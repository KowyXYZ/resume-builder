import React from 'react'
import { BorderBeam } from "@/components/magicui/border-beam";
import { InView } from '@/components/core/in-view';

const BelowHero = () => {
  return (
    <div>
    <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -100px 0px' }} // Adjust margin here
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >

    <div className='flex justify-center items-center flex-col sm:-mt-12 '>
            <div className="p-3 relative flex flex-col items-center justify-center sm:w-[60%] bg-[#03070f]  w-[90%] z-100  overflow-hidden rounded-xl border bg-background md:shadow-xl">
            <img src="/assets/dashboard.svg" alt="hero img" className="w-full object-contain h-full border border-opacity-20 border-gray-200 rounded-xl" />
            <BorderBeam size={250} duration={12} delay={9} />
            </div>
        </div>
          </InView>
    
    </div>
    
  )
}

export default BelowHero