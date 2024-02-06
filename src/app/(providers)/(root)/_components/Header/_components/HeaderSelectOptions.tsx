function HeaderSelectOptions({
  showOptions,
  children,
}: {
  showOptions: boolean;
  children: React.ReactNode;
}) {
  return (
    <ul
      className={`absolute list-none top-10 left-0 w-full overflow-hidden h-30 ${
        showOptions ? "" : "max-h-0"
      } px-0 rounded-8 bg-gray-900 text-white`}
    >
      {children}
    </ul>
  );
}
export default HeaderSelectOptions;
