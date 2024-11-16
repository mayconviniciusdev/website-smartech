import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Tipando a propriedade 'value' como 'number'
interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [count, setCount] = useState<number>(0);

  // Hook do react-intersection-observer
  const { ref, inView } = useInView({
    triggerOnce: false, // Permite que a animação ocorra repetidamente
    threshold: 0.5, // O componente é considerado "visível" quando 50% dele está na viewport
  });

  useEffect(() => {
    if (inView) {
      // Inicia a animação sempre que o componente entra na viewport
      animate(0, value, {
        duration: 2, // Duração da animação em segundos
        ease: "easeOut", // Função de easing
        onUpdate: (latest) => setCount(Math.round(latest)), // Atualiza o estado
      });
    }
  }, [inView, value]); // Dependências incluem `inView` e `value`

  return (
    <div ref={ref}>
      {count}
    </div>
  );
};

export default AnimatedNumber;