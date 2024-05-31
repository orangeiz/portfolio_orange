"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Loader = () => {
  const imageRef = useRef<any>(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (imageRef.current) {
        imageRef.current.style.display = 'none';
      }
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div ref={imageRef} className="flex items-center justify-center min-h-screen bg-white fixed inset-0 z-50">
      <div className="w-64 h-64 overflow-hidden">
        <Image 
          src="/images/p7.png" 
          className="animate-slide-in-fade" 
          alt="Loader" 
          width={256} 
          height={256} 
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Loader;
