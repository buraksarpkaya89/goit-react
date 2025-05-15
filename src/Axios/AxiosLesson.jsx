import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const AxiosLesson = () => {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  // useMemo örneği - render SIRASINDA çalışır
  const filteredPlanets = useMemo(() => {
    console.log("useMemo çalıştı: Filtering planets..."); 
    return planets.filter(planet => planet.includes(query));
  }, [planets, query]);

  // useEffect örneği - render SONRASINDA çalışır
  useEffect(() => {
    console.log("useEffect çalıştı: Clicks değişti");
    // Burada side effect işlemleri yapabilirsiniz, örneğin:
    document.title = `Clicks: ${clicks}`;
  }, [clicks]);

  useEffect(() => {
    console.log("useEffect çalıştı: Query veya planets değişti");
    // Burada API çağrısı gibi işlemler yapabilirsiniz
  }, [planets, query]);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Filter planets"
      />
      <ul>
        {filteredPlanets.map(planet => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </>
  );
}
export default AxiosLesson