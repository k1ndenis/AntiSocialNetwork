import { useEffect, useState } from 'react'

const emptyGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

export const use2048 = () => {
  const [grid, setGrid] = useState(emptyGrid);

    const mergeTiles = (tiles) => {
      tiles.forEach((el, i) => {
        if (i > 0 && el === tiles[i - 1]) {
          tiles[i - 1] = tiles[i - 1] + el;
          tiles[i] = 0;
        }
      })
      return tiles.filter(tile => tile !== 0);
    }

    const spawnNewValue = (newGrid) => {
      const emptyTiles = [];
      
      for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
          if (newGrid[c][r] === 0) {
            emptyTiles.push({ colInd: c, rowInd: r });
          }
        }
      }

      if (emptyTiles.length === 0) return newGrid;

      const getRandomIndex = () => {
        const randomCoords = Math.floor(Math.random() * emptyTiles.length);
        return randomCoords;
      }

      const coords = getRandomIndex();
      newGrid[emptyTiles[coords].colInd][emptyTiles[coords].rowInd] = 2;
      return newGrid;
    }

    useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      setGrid(prevGrid => {
        let newGrid = JSON.parse(JSON.stringify(prevGrid));
        switch (e.key) {
          case 'ArrowUp': {
            for (let col = 0; col < 4; col++) {
              let column = [];
              for (let row = 0; row < 4; row++) {
                if (newGrid[row][col] !== 0) column.push(newGrid[row][col]);
              };

              column = mergeTiles(column);

              while (column.length < 4) column.push(0);

              for (let row = 0; row < 4; row++) {
                newGrid[row][col] = column[row];
              };
            }
            newGrid = spawnNewValue(newGrid);
            break;
          };
          case 'ArrowDown': {
            for (let col = 0; col < 4; col++) {
              let column = [];
              for (let row = 3; row >= 0; row--) {
                if (newGrid[row][col] !== 0) column.push(newGrid[row][col]);
              };

              column = mergeTiles(column);

              while (column.length < 4) column.push(0);

              for (let row = 3, k = 0; row >= 0; row--, k++) {
                newGrid[row][col] = column[k];
              };
            }
            newGrid = spawnNewValue(newGrid);
            break;
          };
          case 'ArrowLeft': {
            for (let row = 0; row < 4; row ++) {
              let currentRow = [];
              for (let col = 0; col < 4; col++) {
                if (newGrid[row][col] !== 0) currentRow.push(newGrid[row][col]);
              };

              currentRow = mergeTiles(currentRow);

              while (currentRow.length < 4) currentRow.push(0);

              for (let col = 0; col < 4; col++) {
                newGrid[row][col] = currentRow[col];
              };
            }
            newGrid = spawnNewValue(newGrid);
            break;
          };
          case 'ArrowRight': {
            for (let row = 0; row < 4; row ++) {
              let currentRow = [];
              for (let col = 3; col >= 0; col--) {
                if (newGrid[row][col] !== 0) currentRow.push(newGrid[row][col]);
              };

              currentRow = mergeTiles(currentRow);

              while (currentRow.length < 4) currentRow.push(0);

              for (let col = 3, k = 0; col >= 0; col--, k++) {
                newGrid[row][col] = currentRow[k];
              };
            }
            newGrid = spawnNewValue(newGrid);
            break;
          };
        }
        return newGrid;
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, []);

  return {
    grid,
    startGame: () => setGrid(spawnNewValue(JSON.parse(JSON.stringify(emptyGrid))))
  }
}