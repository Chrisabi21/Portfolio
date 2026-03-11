import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationControls, animate } from "framer-motion";

const CVButton = () => {
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const xAnimRef = useRef<any>(null);
  const bounceControls = useAnimationControls();

  const moveRight = () => {
    xAnimRef.current = animate(x, window.innerWidth * 0.78, {
      duration: 3,
      ease: "easeInOut",
      onComplete: () => { if (!isHovered.current) moveLeft(); },
    });
  };

  const moveLeft = () => {
    xAnimRef.current = animate(x, window.innerWidth * 0.05, {
      duration: 3,
      ease: "easeInOut",
      onComplete: () => { if (!isHovered.current) moveRight(); },
    });
  };

  const resumeX = () => {
    const currentX = x.get();
    const midpoint = window.innerWidth * 0.4;
    currentX < midpoint ? moveRight() : moveLeft();
  };

  const startBounce = () => {
    bounceControls.start({
      y: [0, -80, 0, -50, 0, -25, 0, -10, 0],
      scaleX: [1, 0.9, 1.2, 1, 1.1, 1, 1.05, 1],
      scaleY: [1, 1.1, 0.8, 1, 0.9, 1, 0.95, 1],
      rotate: [0, 360],
      transition: {
        y: { duration: 1.5, repeat: Infinity, ease: [0.33, 0, 0.66, 0] },
        scaleX: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "linear" },
      },
    });
  };

  useEffect(() => {
    x.set(window.innerWidth * 0.05);
    moveRight();
    startBounce();
    return () => xAnimRef.current?.stop();
  }, []);

  return (
    <motion.a
    href="/cv.pdf"
    download="Oluwaseun_Abiodun_CV.pdf"
    title="Oluwaseun CV"
    className="fixed bottom-6 z-50 w-24 h-24 rounded-full flex flex-col items-center justify-center text-white shadow-2xl cursor-pointer"
    style={{
        x,
        background: "radial-gradient(circle at 35% 35%, #60a5fa, #1d4ed8 60%, #1e3a8a)",
        boxShadow: "0 8px 20px rgba(59,130,246,0.6), inset 0 -4px 8px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.2)",
    }}
    animate={bounceControls}
    onHoverStart={() => {
        isHovered.current = true;
        xAnimRef.current?.stop();
        bounceControls.stop();
    }}
    onHoverEnd={() => {
        isHovered.current = false;
        resumeX();
        startBounce();
    }}
    whileTap={{ scale: 0.9 }}
    >
    {/* Bigger glare to match */}
    <div className="absolute top-3 left-4 w-6 h-5 bg-white opacity-30 rounded-full blur-sm" />

    <span className="text-xs font-bold tracking-wide relative z-10 leading-none mt-1">CV</span>
    </motion.a>
  );
};

export default CVButton;