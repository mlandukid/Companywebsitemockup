import { useEffect, useState, useRef } from "react";

interface AnimatedStatProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedStat({ 
  end, 
  duration = 2000, 
  label, 
  suffix = "", 
  prefix = "" 
}: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animation logic
            const startTime = Date.now();
            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * end);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={statRef}>
      <div className="text-3xl text-yellow-500">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
