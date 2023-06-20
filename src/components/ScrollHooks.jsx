import React, { useEffect, useState } from "react";

export const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Fase de montaje");
    const detectarScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", detectarScroll);
  });

  return (
    <>
      <h2>Hooks-UseEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY} pixeles</p>
    </>
  );
};
