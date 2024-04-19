import { Letter, letters } from "@/utilities/alphabet";
import React, { useEffect, useState } from "react";
import { Droppable } from "../Droppable";
import { GhostTile } from "../Tiles/GhostTile";
import { Tile } from "../Tiles/Tile";

interface Props {
    className?: any;
    layout: number; // see parent, currently 1 = grid, 2 = row, 3 = ???
    start: number; // starting index, defaults to 0
    end: number; // ending index, defaults to 75
    tiles: JSX.Element[]; // array of tiles
    parentIds: string[]; // array of parentIds
}
// deck, parentIds 
export const Board = ({ className, layout = 1, start = 0, end = 75, tiles, parentIds}: Props): React.JSX.Element => {
    if (layout === 1) {
        start = 0;
        end = 75;
    }//end validaion check

    const elements = letters.slice(start, end + 1)
    const [items, setItems] = useState<(JSX.Element | undefined)[]>([]);

    useEffect(() => {
        const updatedDeck = tiles.map((element, index) => {
            if (parentIds[index] !== 'spawnzone' && parentIds[index] !== 'undefined') {
                return element;
            } else {
                return undefined;
            }
        });
        setItems(updatedDeck);
    }, [tiles, parentIds]);

    if (layout === 1) {
        return (
            <div
                className={`grid grid-cols-12 gap-4 min-w-[1090px] max-w-[1400px] ${className}`}>
                {elements.map((letter, index) => {
                    let style = {};
                    if (index === 44) {
                        style = { gridColumnStart: 1 };
                    }
                    return (
                        <Droppable id={letter.letter} key={index} styles={style}>
                            {items[parentIds.findIndex(id => id === letter.letter)] ? items[parentIds.findIndex(id => id === letter.letter)] : <GhostTile />}
                        </Droppable>
                    );
                })}
            </div>
        )
    } else if (layout === 2) {
        return (
            <div
                className={`${className}`}>
                ROW MODE TBD
            </div>
        )
    }
    // returns empty div if layout is not 1 or 2
    return (
        <div
            className={`${className}`}>
        </div>
    )
};
