import { colorCode, consonant, isConsonant, vowel } from "@/utilities/alphabet";
import React from "react";
import { ConsonantTile } from "./ConsonantTile";
import { VowelTile } from "./VowelTile";

interface Props {
  className?: any;
  content: consonant | vowel;
}

export const Tile = ({ className, content }: Props): JSX.Element => {
  return (
    <div className={`flex justify-center items-center relative w-[77.5px] h-[109px] rounded-[12.5px] shadow-[0px_4px_4px_#00000040] ${className}`}>
      <div className="absolute w-[72px] h-[109px] top-0 left-0 bg-tile rounded-[12.5px] z-10" />
      {isConsonant(content) ? (<ConsonantTile value={content} />) : <VowelTile value={content} />}
      <div className="w-[72px] h-[109px] top-0 left-0 border-r-[6px] border-tileShadow absolute rounded-[12.5px] [border-right-style:solid] z-10" />
      <div className={`w-[72px] h-[109px] top-0 left-[5.5px] border-r-[5.5px] ${colorCode(content, false)} ${colorCode(content, true)} absolute rounded-[12.5px] [border-right-style:solid] z-0`} />
    </div>
  );
};
