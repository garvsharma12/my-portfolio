import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const density = 14000; // larger -> fewer stars
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / density
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const baseAngle = 200 + Math.random() * 30; // 200deg-230deg
      const length = 250 + Math.random() * 400; // px
      const thickness = 1 + Math.random() * 2.5; // px
      const top = Math.random() * 30; // % from top area
      const left = Math.random() * 100; // %
      const delay = (Math.random() * 12).toFixed(2) + "s";
      const duration = (2.5 + Math.random() * 3.5).toFixed(2) + "s";

      newMeteors.push({
        id: i,
        left,
        top,
        angle: baseAngle,
        length,
        thickness,
        delay,
        duration,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor animate-meteor"
          style={{
            width: m.length + "px",
            height: m.thickness + "px",
            left: m.left + "%",
            top: m.top + "%",
            animationDelay: m.delay,
            animationDuration: m.duration,
            ['--angle']: `${m.angle}deg`,
            // custom vars for ::before
            ['--thickness']: m.thickness + 'px',
          }}
        />
      ))}
    </div>
  );
};
