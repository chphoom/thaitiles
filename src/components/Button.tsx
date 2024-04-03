import React from "react";

interface Props {
  className?: any;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Button = ({ className, label, selected, onClick }: Props): JSX.Element => {
  const style = selected ? "bg-tileShadow translate-y-1 translate-x-1 box-shadow:0_0px_0_0_#f9d695" : "bg-tile active:translate-y-1 active:translate-x-1 active:[box-shadow:0_0px_0_0_#f9d695] active:border-[0px] transition-all duration-150 [box-shadow:2px_2px_0_0_#f9d695]";
  return (
    <button
      className={`all-[unset] box-border inline-flex min-w-[150px] items-center justify-center relative rounded-[16px] select-none 
      active:[box-shadow:0_0px_0_0_#00000040] 
      transition-all duration-150 [box-shadow:[0px_4px_4px_#00000040] 
      disabled:[box-shadow:0_0px_0_0_#00000040] ${className}`}
      disabled={selected}
      onClick={onClick}
    >
      <div className={`flex items-center justify-center min-w-[150px] rounded-[16px] pt-[13.8px] pb-[15.8px] px-[25px] border-2 border-solid border-tileShadow ${style}`}>
        {/* <div className="inline-flex flex-col items-center justify-center relative"> */}
          <div className="relative w-fit mt-[-1.00px] font-defaultFont font-[number:var(--heavy-font-weight)] text-background text-[length:var(--button-label-font-size)] text-center tracking-[var(--button-label-letter-spacing)] leading-[var(--button-label-line-height)] whitespace-nowrap [font-style:var(--button-label-font-style)]">
            {label}
          </div>
        </div>
      {/* </div> */}
    </button>
  );
};
