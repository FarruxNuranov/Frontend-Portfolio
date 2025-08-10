import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

export default function NetParticlesLeft() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: { grab: { distance: 160, links: { opacity: 0.45 } } },
      },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },                 // точки
        links: {                                     // линии
          enable: true,
          color: "#ffffff",
          distance: 140,
          opacity: 0.35,
          width: 1,
        },
        move: { enable: true, speed: 1.6, outModes: { default: "out" } },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,         // ЛЕВАЯ половина
        top: 0,
        width: "50%",
        height: "100%",
        zIndex: 1,       // ниже текста, выше фона
        pointerEvents: "none",
      }}
    >
      <Particles id="net-left" options={options} />
    </div>
  );
}