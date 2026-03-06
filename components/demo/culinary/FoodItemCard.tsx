"use client";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  image: string;
  name: string;
  price: string;
}

export default function FoodItemCard({ image, name, price }: Props) {
  const imgRef = useRef(null);

  const onMouseEnter = () => {
    gsap.to(imgRef.current, { scale: 1.1, duration: 0.6, ease: "power2.out" });
  };

  const onMouseLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: "power2.out" });
  };

  return (
    <div
      className="group cursor-pointer overflow-hidden bg-white rounded-2xl shadow-sm border border-brand-cream"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          ref={imgRef}
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-brand-chocolate">
          From {price}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-2xl text-brand-chocolate mb-2">{name}</h3>
        <button className="text-brand-gold font-bold text-sm tracking-widest uppercase border-b border-brand-gold pb-1 hover:text-brand-chocolate hover:border-brand-chocolate transition-colors">
          Request Quote
        </button>
      </div>
    </div>
  );
}