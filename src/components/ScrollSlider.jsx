// ScrollSlider.js
'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollSlider = () => {
  const fisrtSlider = useRef(null);
  const secondSlider = useRef(null);
  const slider = useRef(null);
  const animatiion = useRef(null)
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(fisrtSlider.current, { xPercent: xPercent });
    gsap.set(secondSlider.current, { xPercent: xPercent });
    xPercent += 0.02 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div ref={slider} className="slider-container">
      <div ref={fisrtSlider} className="slider">
        <img className="slider-img" src="/banner/dawn-desktop.png" alt="Imagen 1" />
        <img className="slider-img" src="/banner/agrosol-desktop.png" alt="Imagen 2" />
        <img className="slider-img" src="/banner/crafttool-mobile.png" alt="Imagen 3" />
        <img className="slider-img" src="/banner/dawn-mobile.png" alt="Imagen 4" />
        <img className="slider-img" src="/banner/edteam-desktop.png" alt="Imagen 5" />
        <img className="slider-img" src="/banner/martin-desktop.png" alt="Imagen 6" />
        <img className="slider-img" src="/banner/crafttool-mobile-2.png" alt="Imagen 7" />
      </div>
      <div ref={secondSlider} className="slider">
        <img className="slider-img" src="/banner/dawn-desktop.png" alt="Imagen 1" />
        <img className="slider-img" src="/banner/agrosol-desktop.png" alt="Imagen 2" />
        <img className="slider-img" src="/banner/crafttool-mobile.png" alt="Imagen 3" />
        <img className="slider-img" src="/banner/dawn-mobile.png" alt="Imagen 4" />
        <img className="slider-img" src="/banner/edteam-desktop.png" alt="Imagen 5" />
        <img className="slider-img" src="/banner/martin-desktop.png" alt="Imagen 6" />
        <img className="slider-img" src="/banner/crafttool-mobile-2.png" alt="Imagen 7" />
      </div>
    </div>
  );
};

export default ScrollSlider;