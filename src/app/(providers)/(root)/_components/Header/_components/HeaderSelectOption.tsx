import { MouseEventHandler } from "react";

function HeaderSelectOption({
  children,
  handleOnChangeSelectValue,
}: {
  children: React.ReactNode;
  handleOnChangeSelectValue: MouseEventHandler<HTMLLIElement>;
}) {
  return (
    <li
      onClick={handleOnChangeSelectValue}
      className="text-sm py-2 px-4 transition duration-200 ease-in hover:bg-gray-600 cursor-pointer"
    >
      {children}
    </li>
  );
}

export default HeaderSelectOption;
