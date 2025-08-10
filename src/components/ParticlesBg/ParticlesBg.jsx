import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const init = async (engine) => { await loadFull(engine); };

  const options = useMemo(() => ({
    background: { color: "transparent" },
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#c778dd" },
      links: { enable: true, color: "#c778dd", opacity: 0.25, distance: 130 },
      move: { enable: true, speed: 0.6 },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100 } }
    },
    detectRetina: true
  }), []);

  return <Particles init={init} options={options} />;
}