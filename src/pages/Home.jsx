import { Link } from "react-router-dom";

export function EchoName() {
  const copies = 15;

  return (
    <div className="echo-wrap">
      {Array.from({ length: copies }).map((_, i) => {
        const offset = copies - 1 - i; // distance from front
        const x = offset * 10;
        const y = offset * offset * 0.45;

        return (
          <span
            key={i}
            className={`echo-layer ${i === copies - 1 ? "front" : "back"}`}
            style={{
              transform: `translate(-50%, 0) translate(${x}px, ${y}px)`
            }}
          >
            Muniza Siddiqui
          </span>
        );
      })}
    </div>
  );
}

export default function Home({ openNav }) {
  return (
    <>
      <header>
        <p id="menu-icon" onClick={openNav}>☰</p>

      </header>
      <EchoName />
      
    </>
  );
}
