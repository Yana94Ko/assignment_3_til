"use client";
import { MouseEventHandler, useState } from "react";
import HeaderSelectOption from "./HeaderSelectOption";
import HeaderSelectOptions from "./HeaderSelectOptions";

function HeaderSelect() {
  type selectOption = number;
  const selectOptions: selectOption[] = [10, 20, 50, 100];
  const [currentValue, setCurrentValue] = useState<number | selectOption[]>(
    selectOptions[0]
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handleOnChangeSelectValue: MouseEventHandler<HTMLLIElement> = (e) => {
    const { innerText } = e.currentTarget;
    setCurrentValue(Number(innerText));
  };
  return (
    <div
      onClick={() => {
        setShowOptions((prev) => !prev);
      }}
      className="relative w-28 px-2 py-2 rounded-lg bg-white shadow-md cursor-pointer before:content-['⌵'] before:absolute before:top-1 before:right-4 before:text-green-500 before:text-xl "
    >
      <label className="text-base ml-1 text-center">{currentValue}</label>
      <HeaderSelectOptions showOptions={showOptions}>
        {selectOptions.map((e) => (
          <HeaderSelectOption
            key={e}
            handleOnChangeSelectValue={handleOnChangeSelectValue}
          >
            {e}
          </HeaderSelectOption>
        ))}
      </HeaderSelectOptions>
    </div>
  );
}

export default HeaderSelect;
