import React from "react";

interface Props {
  className?: any;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Button = ({ className, label, selected, onClick }: Props): React.JSX.Element => {
  const style = selected ? "bg-tileShadow translate-y-1 translate-x-1 box-shadow:0_0px_0_0_#f9d695" : "bg-tile active:translate-y-1 active:translate-x-1 active:[box-shadow:0_0px_0_0_#f9d695] active:border-0 transition-all duration-150 [box-shadow:2px_2px_0_0_#f9d695]";
  return (
    <button
      className={`all-[unset] box-border inline-flex min-w-36 items-center justify-center relative rounded-2xl select-none 
      active:[box-shadow:0_0px_0_0_#00000040] 
      transition-all duration-150 [box-shadow:[0px_4px_4px_#00000040] 
      disabled:[box-shadow:0_0px_0_0_#00000040] ${className}`}
      disabled={selected}
      onClick={onClick}
    >
      <div className={`flex items-center justify-center min-w-36 rounded-2xl pt-3.5 pb-4 px-6 border-2 border-solid border-tileShadow ${style}`}>
          <div className="relative w-fit -mt-px font-inter font-bold text-background text-base text-center tracking-wider whitespace-nowrap not-italic	">
            {label}
          </div>
        </div>
    </button>
  );
};
