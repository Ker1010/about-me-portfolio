import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const transitionStyles = {
    transitionDelay: `${delay}ms`,
    transitionDuration: '1000ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Apple-like ease
  };

  return (
    <div
      ref={ref}
      style={transitionStyles}
      className={`transform will-change-transform ${isVisible
          ? 'opacity-100 translate-y-0 scale-100 blur-0'
          : 'opacity-0 translate-y-16 scale-95 blur-sm'
        } ${className}`}
    >
      {children}
    </div>
  );
};