import { useState, useEffect, useRef } from "react";

export default function ClicksYRenders() {
  const [clicks, setClicks] = useState(0);
  const renders = useRef(0);
  const textoRenders = useRef(null);

  useEffect(() => {
    renders.current += 1;

    if (textoRenders.current) {
      textoRenders.current.textContent = renders.current;
    }
  });

  return (
    <div>
      <h2>Clicks contra renders</h2>

      <p>Cantidad de clicks: {clicks}</p>
      <p>
        Cantidad de renders: <span ref={textoRenders}>0</span>
      </p>

      <button onClick={() => setClicks(c => c + 1)}>
        Hacer click
      </button>
    </div>
  );
}

