import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const AnimationLoopForMultipleRefElements = () => {
  const boxesRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 1,
        ease: 'power1.inOut',
      },
    });

    // Animate each box one by one using a loop
    boxesRef.current.forEach((box, index) => {
      tl.to(box, { x: 100 }, ">"); // `>` means "start after previous"
    });

  }, []);

  return (
    <div className="w-full h-[120vh] border-2 border-black flex justify-center items-center">
      <div className="w-[1400px] h-[550px] m-auto flex flex-col justify-between items-center gap-4">
        {[0, 1, 2].map((_, i) => (
          <div
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            // also custom screens overview
            className="w-[500px] h-[100px] desktop:bg-blue-900 laptop:bg-black tablet:bg-red-900 mobile:bg-yellow-500 text-white text-3xl flex justify-center items-center"
          >
            Box {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationLoopForMultipleRefElements;
