import { colorCode, vowel } from "@/utilities/alphabet";
import React from "react";

interface Props {
    value: vowel;
}

export const VowelTile = ({ value }: Props): JSX.Element => {
    return (
        <div className="absolute grid place-items-center grid-cols-1 gap-3 top-[10px] left-[18px] z-10">
            <div className="relative font-decorFont font-[number:var(--light-font-weight)] text-black text-[length:var(--letter-font-size)] leading-[var(--default-line-height)]">
                <br />
                {value.letter}
            </div>
            <div className="relative font-decorFont font-[number:var(--light-font-weight)] text-black text-[length:var(--pronunciation-font-size)] leading-[var(--default-line-height)] whitespace-nowrap">
                <br />
                {value.sound}
            </div>
            <div className={`inline-flex items-center justify-center px-[5px] py-[2.5px] ${colorCode(value, false)} rounded-[4px]`}>
                <div className="relative w-fit mt-[-1.00px] font-defaultFont font-[number:var(--heavy-font-weight)] text-tile text-[length:var(--tile-label-font-size)] leading-[var(--default-line-height)] whitespace-nowrap">
                    {value.short}
                </div>
            </div>
    </div>
    );
};
