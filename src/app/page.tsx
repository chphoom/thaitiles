"use client";
import { Draggable } from '@/components/Draggable';
import { Tile } from '@/components/Tiles/Tile';
import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useState } from 'react';
import type { Coordinates } from '@dnd-kit/utilities';
import { Droppable } from '@/components/Droppable';
import { consonants, vowels } from '../utilities/alphabet';
import { Button } from '@/components/Button';

// this only works for one draggable, will have to refactor to work with multiple -- maybe with a map function and id prop
const defaultCoordinates = {
  x: 0,
  y: 0,
};

export default function Home() {
  const [{x, y}, setCoordinates] = useState<Coordinates>(defaultCoordinates);
  // will have to use states for each button to keep track of which one is selected, as well as enable whatever is not selected
  const [selected, setSelected] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <DndContext
          onDragEnd={({delta}) => {
            setCoordinates(({x, y}) => {
              return {
                x: x + delta.x,
                y: y + delta.y,
              };
            });
          }}
          modifiers={[restrictToWindowEdges]}
        >
            {/* <Draggable
              id="helo"
              styles={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`
              }}
              >
              <Tile 
              content={consonants[0]}/>
            </Draggable> */}
            <Button label="skjdnvsndvosnovbsipnvpisnv" selected={selected} onClick={() => setSelected(!selected)}/>
        </DndContext>
      </div>
    </main>
  );
}
