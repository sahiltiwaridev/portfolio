import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 text-center py-6 border-t border-white/10 text-gray-400 text-sm">
      Built by Sahil. Powered by tea.
      <Coffee size={20} />
    </footer>
  );
}
