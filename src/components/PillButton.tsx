import { ArrowRight } from "lucide-react";

export function PillButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-black py-2 pl-7 pr-2 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800 ${className}`}
    >
      <span>{children}</span>
      <span className="grid place-items-center rounded-full bg-white p-2 transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowRight className="h-5 w-5 text-black" />
      </span>
    </a>
  );
}
