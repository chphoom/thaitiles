import { Letter, colorCode, isAboveLine, isBelowLine, isConsonant, isWide } from "@/utilities/alphabet";
import React from "react";

interface Props {
  className?: any;
  content: Letter;
}

export const Tile = ({ className, content }: Props): React.JSX.Element => {
  const name = (): React.JSX.Element => {
    return <div className="relative mt-[4px] mb-[-2px] font-decorFont  font-[number:var(--light-font-weight)] text-black text-[length:var(--letter-name-font-size)] leading-[var(--default-line-height)] whitespace-nowrap">{content.name}</div>;
  }

  return (
    <div
      style={{
        boxShadow: `5px 0px 0px ${colorCode(content, "hex")}, inset -6px 0px 0px #f9d695`,
        gap: `${isConsonant(content) ? "8px" : "15px"}`
      }}
      className={`inline-flex flex-col items-center px-[19px] py-[11px] w-[74px] relative bg-tile rounded-[13px] ${className}`}>
      <div
        style={{
          marginTop: `${isAboveLine(content) ? isConsonant(content) ? "4px" : "8px" : isBelowLine(content) ? "-4px" : null}`,
          marginBottom: `${isAboveLine(content) ? "-3px" : isBelowLine(content) ? isConsonant(content) ? "3px" : "8px" : null}`,
          fontSize: `${isWide(content) ? "var(--letter-small-font-size)" : "var(--letter-font-size)"}`,
          marginRight: `${isWide(content) ? "5px" : null}`,
        }}
        className="relative font-decorFont font-[number:var(--light-font-weight)] text-black leading-[var(--large-line-height)] whitespace-nowrap">
        {content.letter}
      </div>
      {isConsonant(content) ? name() : null}
      <div className="relative hyphens-none font-decorFont font-[number:var(--light-font-weight)] text-black text-[length:var(--pronunciation-font-size)] leading-[var(--default-line-height)]">
        {content.pronounciation.replace(/-/g, '‑')}
      </div>
      <div
        style={{
          background: `${colorCode(content, "hex")}`
        }}
        className={`inline-flex items-center justify-center px-[5px] py-[2.5px] rounded-[4px]`}>
        <div className="relative font-defaultFont font-[number:var(--heavy-font-weight)] text-tile text-[length:var(--tile-label-font-size)] leading-[var(--default-line-height)] whitespace-nowrap">
          {content.category}
        </div>
      </div>
    </div>
  );
};
