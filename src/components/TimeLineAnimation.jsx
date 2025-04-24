import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const TimeLineAnimation = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 1,
        ease: 'power1.inOut',
      },
    });

    tl.to(box1Ref.current, { x: 100 })         // 1st animation
      .to(box2Ref.current, { rotation: 360 })  // 2nd animation
      .to(box3Ref.current, { scale: 1.5 });    // 3rd animation

  }, []);

  return (
    <div className="w-full h-[120vh] border-2 border-black flex justify-center items-center">
      <div className="w-[1400px] h-[550px] m-auto flex flex-col justify-between items-center gap-2">
        <div ref={box1Ref} className="w-[500px] h-[100px] bg-black text-white text-3xl flex justify-center items-center">1</div>
        <div ref={box2Ref} className="w-[500px] h-[100px] bg-black text-white text-3xl flex justify-center items-center">2</div>
        <div ref={box3Ref} className="w-[500px] h-[100px] bg-black text-white text-3xl flex justify-center items-center">3</div>
      </div>
    </div>
  );
};

export default TimeLineAnimation;
