import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="Breadcrumb" className="py-4 px-6">
            <ol className="flex items-center gap-2 text-[12px] text-white/40 max-w-7xl mx-auto flex-wrap">
                <li>
                    <Link href="/" className="hover:text-[#c8a45c] transition-colors">
                        Trang chủ
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={12} className="text-white/20" />
                        {item.href ? (
                            <Link href={item.href} className="hover:text-[#c8a45c] transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-[#c8a45c]">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
