"use client";
import { Draggable } from '@/components/Draggable';
import { Tile } from '@/components/Tiles/Tile';
import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useEffect, useState } from 'react';
import type { Coordinates } from '@dnd-kit/utilities';
import { Droppable } from '@/components/Droppable';
import { generateDeck } from '../utilities/alphabet';
import { Button } from '@/components/Button';
import { GhostTile } from '@/components/Tiles/GhostTile';
import { Board } from '@/components/Board/Board';

export default function Home() {
  const [mode, setMode] = useState(1); // 1 = grid, 2 = row, 3 = ???
  const [difficulty, setDifficulty] = useState(1); // 1 = easy, 2 = medium, 3 = hard
  const [deck, setDeck] = useState(generateDeck);
  const [positions, setPositions] = useState(deck.map(() => ({ x: 0, y: 0 })));
  const [count, setCount] = useState(deck.length);
  const [parentIds, setParentIds] = useState(deck.map(() => 'spawnzone')); // Initialize parentIds
  const [currentTile, setCurrentTile] = useState(75);
  const [win, setWin] = useState(false);

  const tiles = deck.map((tile, index) => (
    win ? <Tile
      content={tile} /> :
      <Draggable
        key={index}
        id={String(index)}
        styles={{
          zIndex: 2,
        }}
      >
        <Tile
          content={tile} />
      </Draggable>))

  useEffect(() => {
    const spawnzoneElement = document.getElementById('spawn');
    if (spawnzoneElement) {
      const rect = spawnzoneElement.getBoundingClientRect();
      const tileWidth = 74; // Replace with the actual width of the tile
      const tileHeight = 112; // Replace with the actual height of the tile
      setPositions(deck.map(() => ({ x: rect.left + rect.width / 2 - tileWidth / 2, y: rect.top + rect.height / 2 - tileHeight / 2 })));
      console.log(rect);
    }
  }, []);// Initialize positions

  useEffect(() => {
    setWin(deck.every((tile, index) => parentIds[index] === tile.letter));
  }, [deck, parentIds]); // Check for win condition

  const handleReset = () => {
    setDeck(generateDeck)
    setCount(deck.length)
    setParentIds(deck.map(() => 'spawnzone'))
    setCurrentTile(75)
  }//end handleReset

  return (
    <main>
      <DndContext
        onDragEnd={({ over, active, delta }) => {
          setPositions((prevPositions) => {
            const newPositions = [...prevPositions];
            newPositions[active.id as number] = {
              x: newPositions[active.id as number].x + delta.x,
              y: newPositions[active.id as number].y + delta.y,
            };
            return newPositions;
          })
          let newParentIds = [...parentIds];
          if (parentIds[active.id as number] === 'spawnzone' && over?.id !== 'spawnzone') {
            currentTile === 0 ? null : setCurrentTile(currentTile - 1);
          }
          newParentIds[active.id as number] = String(over?.id);

          const newCount = newParentIds.filter((id) => id === 'spawnzone').length;
          setParentIds(newParentIds);
          setCount(newCount);
        }}
        modifiers={[restrictToWindowEdges]}
      >
        {tiles.map((tile, index) => {
          if (parentIds[index] === 'undefined') {
            return <div key={index} style={{
              position: 'absolute',
              left: `${positions[index].x}px`,
              top: `${positions[index].y}px`,
              zIndex: 2,
            }}>{tile}</div>;
          }
          return null;
        })}
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="w-full items-center">
            <div className='w-full flex flex-row gap-4'>
              {/* spawnzone */}
              <div className='w-fit flex-col justify-center'>
                <div className="relative w-fit -mt-px font-inter font-bold text-tile text-base text-center tracking-wider whitespace-nowrap not-italic">
                  {`REMAINING TILES: ${count}`}
                </div>
                <Droppable id="spawnzone">
                  <div id='spawn' className='border-2 w-44 h-44 flex items-center justify-center'>
                    {parentIds[currentTile] === 'spawnzone' ? tiles[currentTile] : null}
                  </div>
                </Droppable>
              </div>
              {/* buttons */}
              <div className='w-fit flex flex-col gap-4'>
                <div className='w-fit flex flex-row gap-4'>
                  <Button label='GRID MODE' selected={mode === 1} onClick={() => { setMode(1); handleReset() }} />
                  <Button label='ROW MODE' selected={mode === 2} onClick={() => { setMode(2); handleReset() }} />
                  <Button label='???' selected={mode === 3} onClick={() => { setMode(3); handleReset() }} />
                </div>
                <div className='w-fit flex flex-row gap-4'>
                  <Button label='EASY' selected={difficulty === 1} onClick={() => { setDifficulty(1); handleReset() }} />
                  <Button label='MEDIUM' selected={difficulty === 2} onClick={() => { setDifficulty(2); handleReset() }} />
                  <Button label='HARD' selected={difficulty === 3} onClick={() => { setDifficulty(3); handleReset() }} />
                </div>
                <div>
                  {win ? <Button label='Play Again?' onClick={handleReset} /> : <Button label='SHUFFLE' onClick={handleReset} />}
                  {win ? <div className="relative w-fit -mt-px font-inter font-bold text-tile text-base text-center tracking-wider whitespace-nowrap not-italic">
                    YOU WIN!
                  </div> : null}
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* board */}
            <Board layout={mode} start={0} end={75} tiles={tiles} parentIds={parentIds} />
          </div>
        </div>
      </DndContext>
    </main>
  );
}
