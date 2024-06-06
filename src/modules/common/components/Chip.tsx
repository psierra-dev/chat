const Chip = ({ text, isActive }: { text: string; isActive?: boolean }) => {
  const style_active = isActive
    ? "bg-blue-600 text-white"
    : "bg-white dark:bg-slate-800 text-neutral-700 dark:text-white";

  return (
    <div
      className={`p-1 ${style_active} rounded-lg shadow-md text-xs font-semibold relative`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Chip;
