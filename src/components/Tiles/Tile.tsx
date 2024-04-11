import { Letter, colorCode, isConsonant } from "@/utilities/alphabet";
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
      gap: `${isConsonant(content) ? "8px" : "16px"}`
    }} 
    className={`inline-flex flex-col items-center px-[19px] py-[11px] w-[74px] relative bg-tile rounded-[13px] ${className}`}>
      <div 
      style={{ 
        marginTop: `${isConsonant(content) ? null : "10px"}`,
        marginBottom: `${isConsonant(content) ? null : "-8px"}`,
      }} 
      className="relative font-decorFont font-[number:var(--light-font-weight)] text-black text-[length:var(--letter-font-size)] leading-[var(--large-line-height)]">
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
