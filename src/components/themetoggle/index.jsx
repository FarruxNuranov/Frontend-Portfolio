import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    // сразу применяем и сохраняем
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    // уведомляем слушателей (частицы и др.)
    window.dispatchEvent(new Event("themeChange"));
  };

  useEffect(() => {
    // при первом маунте подтягиваем атрибут на html
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={toggle} aria-label="Toggle theme">
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;