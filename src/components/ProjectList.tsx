"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, MapPin, Maximize, Calendar, ArrowRight, ArrowUpRight, Grid3X3, LayoutGrid } from "lucide-react";
import ProjectGallerySlider from "./ProjectGallerySlider";

interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    image: any;
    gallery?: any[];
    location?: string;
    area?: string;
    year?: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
    const [filter, setFilter] = useState("Tất cả");
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState<"featured" | "grid">("featured");

    const categories = ["Tất cả", ...Array.from(new Set(projects.map((p) => p.category || "Nhà phố")))];

    const filtered = projects
        .filter((p) => filter === "Tất cả" || (p.category || "Nhà phố") === filter)
        .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.location && p.location.toLowerCase().includes(searchTerm.toLowerCase())));

    const getSliderImages = (project: Project) => {
        const imgs: any[] = [];
        if (project.image) imgs.push(project.image);
        if (project.gallery && project.gallery.length > 0) {
            imgs.push(...project.gallery);
        }
        return imgs;
    };

    return (
        <section className="py-20 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                {/* ── Filter Bar ── */}
                <div className="mb-14">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                        {/* Category Tabs */}
                        <div className="flex gap-1 flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`relative px-6 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${filter === cat
                                        ? "text-black bg-[#c8a45c]"
                                        : "text-white/40 hover:text-white bg-transparent"
                                        }`}
                                >
                                    {filter === cat && (
                                        <span className="absolute inset-0 bg-[#c8a45c] -z-10" />
                                    )}
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            {/* View Toggle */}
                            <div className="flex border border-white/10">
                                <button
                                    onClick={() => setViewMode("featured")}
                                    className={`p-2.5 transition-all ${viewMode === "featured" ? "bg-[#c8a45c] text-black" : "text-white/30 hover:text-white"}`}
                                >
                                    <LayoutGrid size={16} />
                                </button>
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2.5 transition-all ${viewMode === "grid" ? "bg-[#c8a45c] text-black" : "text-white/30 hover:text-white"}`}
                                >
                                    <Grid3X3 size={16} />
                                </button>
                            </div>

                            {/* Search */}
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-[#141414] border border-white/5 w-60 focus-within:border-[#c8a45c]/50 transition-all">
                                <Search size={14} className="text-[#c8a45c] flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-transparent text-[13px] text-white outline-none w-full placeholder:text-white/20"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decorative line */}
                    <div className="mt-6 h-px bg-gradient-to-r from-[#c8a45c]/40 via-[#c8a45c]/10 to-transparent" />
                </div>

                {/* ── Results Count ── */}
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">
                        {filtered.length} DỰ ÁN
                    </span>
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-white/20 text-[11px] tracking-wider uppercase">
                        {filter === "Tất cả" ? "TẤT CẢ DANH MỤC" : filter}
                    </span>
                </div>

                {/* ── FEATURED LAYOUT ── */}
                {viewMode === "featured" && (
                    <div className="space-y-6">
                        {filtered.map((project, idx) => {
                            const sliderImages = getSliderImages(project);
                            const hasMultipleImages = sliderImages.length > 1;
                            const imageUrl = typeof project.image === "string" ? project.image : "";
                            const isLarge = idx % 5 === 0; // Every 5th is large
                            const isWide = idx % 5 === 3; // Every 5th+3 is wide

                            if (isLarge) {
                                // ── LARGE FEATURED CARD ──
                                return (
                                    <div key={project.slug} className="group relative">
                                        <div className="grid lg:grid-cols-2 bg-[#111] border border-white/5 overflow-hidden hover:border-[#c8a45c]/20 transition-all duration-700">
                                            {/* Image Side */}
                                            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
                                                {hasMultipleImages ? (
                                                    <ProjectGallerySlider images={sliderImages} projectTitle={project.title} mode="card" />
                                                ) : (
                                                    imageUrl && (
                                                        <>
                                                            <Image src={imageUrl} alt={project.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 50vw" />
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
                                                        </>
                                                    )
                                                )}

                                                {/* Featured Badge */}
                                                <div className="absolute top-6 left-6 z-30">
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-widest uppercase bg-[#c8a45c] text-black">
                                                        <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                                                        {project.category || "Nhà phố"}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content Side */}
                                            <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                                                {/* Big Background Number */}
                                                <div
                                                    className="absolute top-8 right-8 text-[120px] font-bold text-white/[0.02] leading-none pointer-events-none"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                                >
                                                    {String(idx + 1).padStart(2, "0")}
                                                </div>

                                                <div className="flex items-center gap-3 mb-8">
                                                    <div className="w-10 h-px bg-[#c8a45c]" />
                                                    <span className="text-[#c8a45c] text-[10px] font-bold tracking-[0.3em] uppercase">DỰ ÁN NỔI BẬT</span>
                                                </div>

                                                <h3
                                                    className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-[#c8a45c] transition-colors duration-500"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                                >
                                                    {project.title}
                                                </h3>

                                                {/* Meta */}
                                                <div className="space-y-3 mb-10">
                                                    {project.location && (
                                                        <div className="flex items-center gap-3 text-[13px] text-white/40">
                                                            <MapPin size={14} className="text-[#c8a45c]" />
                                                            <span>{project.location}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-center gap-6">
                                                        {project.area && (
                                                            <div className="flex items-center gap-2 text-[13px] text-white/40">
                                                                <Maximize size={14} className="text-[#c8a45c]" />
                                                                <span>{project.area}</span>
                                                            </div>
                                                        )}
                                                        {project.year && (
                                                            <div className="flex items-center gap-2 text-[13px] text-white/40">
                                                                <Calendar size={14} className="text-[#c8a45c]" />
                                                                <span>{project.year}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <Link
                                                    href={`/du-an/${project.slug}`}
                                                    className="inline-flex items-center gap-3 bg-transparent border border-white/10 px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-[#c8a45c] hover:border-[#c8a45c] hover:text-black transition-all duration-500 w-fit group/btn"
                                                >
                                                    KHÁM PHÁ DỰ ÁN
                                                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            // ── REGULAR / WIDE CARDS (rendered in pairs) ──
                            // Group remaining cards in pairs for the 2-col grid
                            const pairIdx = idx % 5;
                            if (pairIdx === 1 || pairIdx === 3) {
                                const nextProject = filtered[idx + 1];
                                const cards = [project];
                                if (nextProject && (idx + 1) % 5 !== 0) cards.push(nextProject);

                                return (
                                    <div key={project.slug} className={`grid grid-cols-1 ${cards.length > 1 ? "md:grid-cols-2" : ""} gap-6`}>
                                        {cards.map((p, cIdx) => {
                                            const pSliderImages = getSliderImages(p);
                                            const pHasMultiple = pSliderImages.length > 1;
                                            const pImageUrl = typeof p.image === "string" ? p.image : "";

                                            return (
                                                <div key={p.slug} className="group relative bg-[#111] border border-white/5 overflow-hidden hover:border-[#c8a45c]/20 transition-all duration-700">
                                                    {/* Image */}
                                                    <div className="relative aspect-[16/10] overflow-hidden">
                                                        {pHasMultiple ? (
                                                            <ProjectGallerySlider images={pSliderImages} projectTitle={p.title} mode="card" />
                                                        ) : (
                                                            pImageUrl && (
                                                                <>
                                                                    <Image src={pImageUrl} alt={p.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                                                                </>
                                                            )
                                                        )}

                                                        {/* Category */}
                                                        <div className="absolute top-4 left-4 z-30">
                                                            <span className="inline-block px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase bg-[#c8a45c] text-black">
                                                                {p.category || "Nhà phố"}
                                                            </span>
                                                        </div>

                                                        {/* Index */}
                                                        <div className="absolute top-4 right-4 z-30 text-white/10 text-[11px] font-bold tracking-widest">
                                                            {String(idx + cIdx + 1).padStart(2, "0")}
                                                        </div>

                                                        {/* Hover Arrow */}
                                                        <Link
                                                            href={`/du-an/${p.slug}`}
                                                            className="absolute bottom-4 right-4 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 hover:bg-[#c8a45c] hover:text-black transition-all duration-500"
                                                        >
                                                            <ArrowUpRight size={20} />
                                                        </Link>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-6 lg:p-8">
                                                        <Link href={`/du-an/${p.slug}`} className="block">
                                                            <h3
                                                                className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#c8a45c] transition-colors duration-300 line-clamp-2"
                                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                                            >
                                                                {p.title}
                                                            </h3>
                                                        </Link>

                                                        <div className="flex flex-wrap items-center gap-4 text-[11px] text-white/30">
                                                            {p.location && (
                                                                <span className="flex items-center gap-1.5">
                                                                    <MapPin size={11} className="text-[#c8a45c]" /> {p.location}
                                                                </span>
                                                            )}
                                                            {p.area && (
                                                                <span className="flex items-center gap-1.5">
                                                                    <Maximize size={11} className="text-[#c8a45c]" /> {p.area}
                                                                </span>
                                                            )}
                                                            {p.year && (
                                                                <span className="flex items-center gap-1.5">
                                                                    <Calendar size={11} className="text-[#c8a45c]" /> {p.year}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            }

                            // Skip even-indexed non-large items (they're rendered as part of the pair above)
                            return null;
                        })}
                    </div>
                )}

                {/* ── GRID LAYOUT ── */}
                {viewMode === "grid" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {filtered.map((project, idx) => {
                            const sliderImages = getSliderImages(project);
                            const hasMultipleImages = sliderImages.length > 1;
                            const imageUrl = typeof project.image === "string" ? project.image : "";

                            return (
                                <Link
                                    key={project.slug}
                                    href={`/du-an/${project.slug}`}
                                    className="group relative aspect-square overflow-hidden bg-[#111]"
                                >
                                    {/* Image */}
                                    {hasMultipleImages ? (
                                        <ProjectGallerySlider images={sliderImages} projectTitle={project.title} mode="card" />
                                    ) : (
                                        imageUrl && (
                                            <Image src={imageUrl} alt={project.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                        )
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-20 pointer-events-none" />

                                    {/* Category */}
                                    <div className="absolute top-5 left-5 z-30">
                                        <span className="inline-block px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase bg-[#c8a45c] text-black transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            {project.category || "Nhà phố"}
                                        </span>
                                    </div>

                                    {/* View Button Center */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                        <div className="w-14 h-14 bg-[#c8a45c]/90 rounded-full flex items-center justify-center text-black">
                                            <ArrowUpRight size={22} />
                                        </div>
                                    </div>

                                    {/* Content Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3
                                            className="text-lg font-bold text-white mb-2 leading-tight"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-3 text-[11px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {project.location && (
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={10} className="text-[#c8a45c]" /> {project.location}
                                                </span>
                                            )}
                                            {project.area && (
                                                <span className="flex items-center gap-1">
                                                    <Maximize size={10} className="text-[#c8a45c]" /> {project.area}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Empty State */}
                {filtered.length === 0 && (
                    <div className="py-32 text-center">
                        <div className="text-[#c8a45c]/20 text-8xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>MKG</div>
                        <p className="text-white/30 text-[14px]">Không tìm thấy dự án nào phù hợp.</p>
                    </div>
                )}

                {/* ── Bottom CTA ── */}
                <div className="mt-20 pt-16 border-t border-white/5 text-center">
                    <p className="text-white/30 text-[13px] mb-6">Bạn muốn tư vấn thiết kế cho dự án của mình?</p>
                    <Link
                        href="/lien-he"
                        className="inline-flex items-center gap-3 bg-[#c8a45c] text-black px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
                    >
                        LIÊN HỆ NGAY
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
