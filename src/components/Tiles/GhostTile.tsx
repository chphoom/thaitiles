import React from "react";

interface Props {
  className?: any;
}

export const GhostTile = ({ className }: Props): React.JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-center px-5 py-2.5 w-18.5 h-28 relative bg-tile rounded-xl gap-2 grayscale opacity-50 shadow-ghostTile ${className}`}>
    </div>
  );
};
