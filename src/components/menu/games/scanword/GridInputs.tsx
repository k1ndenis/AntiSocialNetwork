import { useState } from "react"

export const GridInputs = () => {
  const [cells, setCells] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCells(prev => ({ ...prev, [name]: value }));
  };


  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${10}, 40px)` }}>
      {Array.from({ length: 100 }).map((_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const id = `${row}-${col}`;

        return (
          <input
            key={id}
            name={id}
            value={cells[id] || ''}
            onChange={handleChange}
            style={{ width: '40px', textAlign: 'center' }}
            onClick={() => console.log({i})}
          />
        )
      })}
    </div>
  )
}