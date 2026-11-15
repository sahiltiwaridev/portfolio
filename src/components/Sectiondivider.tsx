type SectionDividerProps = {
  title: string;
};

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 pt-2">
      <h2 className="font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}
