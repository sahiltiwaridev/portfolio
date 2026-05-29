type SectionDividerProps = {
  title: string;
};

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 pt-2">
      <span className=" font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap">
        {title}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}