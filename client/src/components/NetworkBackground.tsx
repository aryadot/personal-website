import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NetworkBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      {/* Soft atmospheric glows */}
      <motion.div
        className="absolute w-[100vw] h-[100vw] rounded-full blur-[180px] opacity-10 bg-primary pointer-events-none"
        animate={{
          x: (mousePos.x - window.innerWidth / 2) * 0.05,
          y: (mousePos.y - window.innerHeight / 2) * 0.05,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.8 }}
        style={{ left: "-10%", top: "-10%" }}
      />
      
      <div className="absolute bottom-[-30%] right-[-20%] w-[80vw] h-[80vw] rounded-full blur-[200px] opacity-10 bg-secondary pointer-events-none" />
      <div className="absolute top-[20%] left-[40%] w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-5 bg-accent pointer-events-none" />

      {/* Organic floating blobs */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
        <g filter="url(#goo)">
          <motion.circle 
            animate={{ 
              cx: ["10%", "15%", "10%"], 
              cy: ["20%", "25%", "20%"],
              r: [100, 120, 100]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            fill="currentColor"
            className="text-primary/20"
          />
          <motion.circle 
            animate={{ 
              cx: ["85%", "80%", "85%"], 
              cy: ["75%", "70%", "75%"],
              r: [140, 160, 140]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            fill="currentColor"
            className="text-secondary/20"
          />
        </g>
      </svg>
    </div>
  );
}
