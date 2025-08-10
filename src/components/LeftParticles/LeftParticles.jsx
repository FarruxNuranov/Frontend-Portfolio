import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

export default function NetParticlesLeft() {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // слушаем мгновенную смену темы
  useEffect(() => {
    const handler = () => setTheme(localStorage.getItem("theme") || "dark");
    window.addEventListener("themeChange", handler);
    return () => window.removeEventListener("themeChange", handler);
  }, []);

  // инициализация движка один раз
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(() => {
    const color = theme === "light" ? "#000000" : "#ffffff";
    return {
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" }, resize: true },
        modes: { grab: { distance: 160, links: { opacity: 0.45 } } },
      },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: color },
        links: { enable: true, color, distance: 140, opacity: 0.35, width: 1 },
        move: { enable: true, speed: 1.6, outModes: { default: "out" } },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    };
  }, [theme]);

  if (!ready) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "50%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* ключ на теме — форсит ремоунт при переключении */}
      <Particles id="net-left" key={theme} options={options} />
    </div>
  );
}