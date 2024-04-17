import { Letter, colorCode, isAboveLine, isBelowLine, isConsonant, isWide } from "@/utilities/alphabet";
import React from "react";

interface Props {
  className?: any;
  content: Letter;
}

export const Tile = ({ className, content }: Props): React.JSX.Element => {
  const name = (): React.JSX.Element => {
    return <div className="relative mt-1 -mb-0.5 font-itim font-normal text-black text-xs whitespace-nowrap">{content.name}</div>;
  }

  return (
    <div
      style={{
        boxShadow: `5px 0px 0px ${colorCode(content, "hex")}, inset -6px 0px 0px #f9d695`,
      }}
      className={`inline-flex flex-col items-center px-5 py-2.5 w-18.5 relative bg-tile rounded-xl ${className}`}>
      <div
        style={{
          gap: `${isConsonant(content) ? "8px" : "15px"}`
        }}
        className="inline-flex flex-col items-center relative -ml-1">
        <div
          style={{
            marginTop: `${isAboveLine(content) ? isConsonant(content) ? "4px" : "8px" : isBelowLine(content) ? "-4px" : null}`,
            marginBottom: `${isAboveLine(content) ? "-3px" : isBelowLine(content) ? isConsonant(content) ? "3px" : "8px" : null}`,
            fontSize: `${isWide(content) ? "var(--letter-small-font-size)" : "var(--letter-font-size)"}`,
          }}
          className="relative font-itim font-normal text-black leading-5 whitespace-nowrap">
          {content.letter}
        </div>
        {isConsonant(content) ? name() : null}
        <div
          style={{
            minWidth: '45px',
          }}
          className="relative hyphens-none font-itim font-normal text-black text-2xs whitespace-nowrap">
          {content.pronounciation.replace(/-/g, '‑')}
        </div>
        <div
          style={{
            background: `${colorCode(content, "hex")}`
          }}
          className={`inline-flex items-center justify-center px-1 py-0.5 rounded`}>
          <div className="relative font-inter font-bold text-tile text-3xs whitespace-nowrap">
            {content.category}
          </div>
        </div>
      </div>

    </div>
  );
};
