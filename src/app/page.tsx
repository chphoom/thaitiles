"use client";
import { Draggable } from '@/components/Draggable';
import { Tile } from '@/components/Tiles/Tile';
import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useState } from 'react';
import type { Coordinates } from '@dnd-kit/utilities';
import { Droppable } from '@/components/Droppable';
import { consonant, consonants, generateDeck, vowel, vowels } from '../utilities/alphabet';
import { Button } from '@/components/Button';

// this only works for one draggable, will have to refactor to work with multiple -- maybe with a map function and id prop
const defaultCoordinates = {
  x: 0,
  y: 0,
};

export default function Home() {
  const [{ x, y }, setCoordinates] = useState<Coordinates>(defaultCoordinates);
  // will have to use states for each button to keep track of which one is selected, as well as enable whatever is not selected
  const [mode, setMode] = useState(1); // 1 = grid, 2 = row, 3 = ???
  const [difficulty, setDifficulty] = useState(1); // 1 = easy, 2 = medium, 3 = hard
  const [deck, setDeck] = useState(generateDeck);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center lg:flex">
        <DndContext
          onDragEnd={({ delta }) => {
            setCoordinates(({ x, y }) => {
              return {
                x: x + delta.x,
                y: y + delta.y,
              };
            });
          }}
          modifiers={[restrictToWindowEdges]}
        >
          <div className='w-full flex flex-row gap-4'>
            {/* spawnzone */}
            <div className='w-fit flex-col justify-center'>
              <div className="relative w-fit mt-[-1.00px] font-defaultFont font-[number:var(--heavy-font-weight)] text-tile text-[length:var(--button-label-font-size)] text-center tracking-[var(--button-label-letter-spacing)] leading-[var(--button-label-line-height)] whitespace-nowrap [font-style:var(--button-label-font-style)]">
                {`REMAINING TILES: ${deck.length}`}
              </div>
              <div className='border-2 w-[180px] h-[180px]'>
                
              </div>
            </div>
            {/* buttons */}
            <div className='w-fit flex flex-col gap-4'>
              <div className='w-fit flex flex-row gap-4'>
                <Button label='GRID MODE' selected={mode === 1} onClick={() => setMode(1)} />
                <Button label='ROW MODE' selected={mode === 2} onClick={() => setMode(2)} />
                <Button label='???' selected={mode === 3} onClick={() => setMode(3)} />
              </div>
              <div className='w-fit flex flex-row gap-4'>
                <Button label='EASY' selected={difficulty === 1} onClick={() => setDifficulty(1)} />
                <Button label='MEDIUM' selected={difficulty === 2} onClick={() => setDifficulty(2)} />
                <Button label='HARD' selected={difficulty === 3} onClick={() => setDifficulty(3)} />
              </div>
              <div>
                <Button label='SHUFFLE' onClick={() => setDeck(generateDeck)} />
              </div>
            </div>
          </div>
        </DndContext>
      </div>
    </main>
  );
}
