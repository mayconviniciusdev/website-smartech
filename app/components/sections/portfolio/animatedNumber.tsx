import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps { value: number; }

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [count, setCount] = useState<number>(0);

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animate(0, value, {
        duration: 2, 
        ease: "easeOut", 
        onUpdate: (latest) => setCount(Math.round(latest)),
      });
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      {count}
    </div>
  );
};

export default AnimatedNumber;