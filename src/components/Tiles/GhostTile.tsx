import React from "react";

interface Props {
  className?: any;
}

export const GhostTile = ({ className }: Props): React.JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-center px-[19px] py-[11px] w-[74px] h-[109px] relative bg-tile rounded-[13px] gap-2 grayscale opacity-50 shadow-ghostTile ${className}`}>
    </div>
  );
};
