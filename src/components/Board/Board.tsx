import { letters } from "@/utilities/alphabet";
import React from "react";
import { Droppable } from "../Droppable";
import { GhostTile } from "../Tiles/GhostTile";

interface Props {
    className?: any;
    layout: number; // see parent, currently 1 = grid, 2 = row, 3 = ???
    start: number; // starting index, defaults to 0
    end: number; // ending index, defaults to 75
}

export const Board = ({ className, layout = 1, start = 0, end = 75 }: Props): React.JSX.Element => {
    if (layout === 1) {
        start = 0;
        end = 75;
    }//end validaion check

    const elements = letters.slice(start, end + 1)

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
                            <GhostTile />
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
