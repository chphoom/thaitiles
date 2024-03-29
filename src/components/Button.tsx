import React from "react";

interface Props {
  className?: any;
  label?: string;
}

export const Button = ({ className, label }: Props): JSX.Element => {
  return (
    <button
      className={`all-[unset] box-border inline-flex min-w-[150px] items-center justify-center relative rounded-[16px] shadow-[0px_4px_4px_#00000040] ${className}`}
    >
      <div className="bg-tile rounded-[16px] border-2 border-solid border-tileShadow shadow-[2px_2px_0px_#f9d695] pt-[13.8px] pb-[15.8px] px-[25px]">
        <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-defaultFont font-[number:var(--heavy-font-weight)] text-background text-[length:var(--button-label-font-size)] text-center tracking-[var(--button-label-letter-spacing)] leading-[var(--button-label-line-height)] whitespace-nowrap [font-style:var(--button-label-font-style)]">
            {label}
          </div>
        </div>
      </div>
    </button>
  );
};
