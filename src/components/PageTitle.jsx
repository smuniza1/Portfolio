import { useEffect, useRef, useState } from "react";
import "./PageTitle.css";

export default function PageTitle({ title }) {
  const titleRef = useRef(null);
  const [circleCount, setCircleCount] = useState(5);

  useEffect(() => {
    function updateCircles() {
      if (!titleRef.current) return;

      const textLength = titleRef.current.scrollWidth; // true text width
      const circleSize = 100;
      const overlap = 20; // circles can overlap a bit visually
      const effectiveCircleCoverage = 70;

      const count = Math.max(
        5,
        Math.ceil(textLength / effectiveCircleCoverage)
      );

      setCircleCount(count);
    }

    updateCircles();
    window.addEventListener("resize", updateCircles);

    return () => window.removeEventListener("resize", updateCircles);
  }, [title]);

  return (
    <div className="page-heading">
      <h1 ref={titleRef}>{title}</h1>

      <div className="green-circlles">
        {Array.from({ length: circleCount }).map((_, i) => (
          <div key={i} className="title-circle"></div>
        ))}
      </div>
    </div>
  );
}