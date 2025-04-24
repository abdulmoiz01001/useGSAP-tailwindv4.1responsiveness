import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const BasicAnimation = () => {
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)
    const box3Ref = useRef(null)

    useGSAP(() => {
        gsap.to(box1Ref.current, {
            x: 100,
            duration: 1,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        })
        gsap.to(box2Ref.current, {
            rotation: 360,
            duration: 1,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        })
        gsap.to(box3Ref.current, {
            scale: 1.5,
            duration: 1,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        })


    },[])
  return (
    <> 
    <div className='w-full h-[120vh] border-2 border-black flex justify-center items-center' > 

    <div className='w-[1400px] h-[550px] m-auto flex flex-col justify-between items-center gap-2' >
       <div ref={box1Ref} className='w-[500px] h-[100px] bg-black ' >1</div>
       <div ref={box2Ref} className='w-[500px] h-[100px] bg-black ' >2</div>
       <div ref={box3Ref} className='w-[500px] h-[100px] bg-black ' >3</div>
    </div>
    </div>
    </>
  )
}

export default BasicAnimation
