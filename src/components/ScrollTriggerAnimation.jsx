import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerAnimation = () => {
  const containerRef = useRef(null);
  const boxesRef = useRef([]);

  useGSAP(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[200vh] bg-gray-100 p-10 flex flex-col items-center justify-center gap-16"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          className="w-[400px] h-[120px] bg-black text-white text-2xl font-semibold flex items-center justify-center rounded-xl shadow-lg"
        >
          Scroll In Box {i + 1}
        </div>
      ))}
    </div>
  );
};

export default ScrollTriggerAnimation;
