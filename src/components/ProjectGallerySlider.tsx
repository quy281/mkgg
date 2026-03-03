"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { urlFor } from "@/sanity/client";

interface ProjectGallerySliderProps {
    images: any[];
    projectTitle: string;
    mode?: "card" | "detail";
}

function getImageUrl(img: any): string {
    if (!img) return "";
    if (typeof img === "string") return img;
    if (img._type === "image" || img.asset) return urlFor(img).url();
    return "";
}

export default function ProjectGallerySlider({ images, projectTitle, mode = "card" }: ProjectGallerySliderProps) {
    const [current, setCurrent] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchDelta, setTouchDelta] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const total = images?.length || 0;
    if (total === 0) return null;

    const goTo = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((index + total) % total);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [total, isTransitioning]);

    const prev = useCallback(() => goTo(current - 1), [current, goTo]);
    const next = useCallback(() => goTo(current + 1), [current, goTo]);

    // Touch handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
        setTouchDelta(0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        setTouchDelta(e.touches[0].clientX - touchStart);
    };

    const handleTouchEnd = () => {
        if (touchStart === null) return;
        if (Math.abs(touchDelta) > 50) {
            touchDelta > 0 ? prev() : next();
        }
        setTouchStart(null);
        setTouchDelta(0);
    };

    // Lightbox keyboard controls
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (e.key === "ArrowLeft") setLightboxIndex((p) => (p - 1 + total) % total);
            if (e.key === "ArrowRight") setLightboxIndex((p) => (p + 1) % total);
        };
        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [lightboxOpen, total]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    // ─── CARD MODE (inline slider in project list cards) ───
    if (mode === "card") {
        return (
            <div className="relative w-full h-full group/slider">
                {/* Slides */}
                <div
                    ref={sliderRef}
                    className="relative w-full h-full overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {images.map((img, idx) => {
                        const url = getImageUrl(img);
                        if (!url) return null;
                        return (
                            <div
                                key={idx}
                                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                                style={{
                                    opacity: idx === current ? 1 : 0,
                                    zIndex: idx === current ? 1 : 0,
                                }}
                            >
                                <Image
                                    src={url}
                                    alt={`${projectTitle} - ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Prev/Next Buttons */}
                {total > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 hover:bg-[#c8a45c] hover:text-black transition-all duration-300"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 hover:bg-[#c8a45c] hover:text-black transition-all duration-300"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </>
                )}

                {/* Dots Indicator */}
                {total > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(idx); }}
                                className={`rounded-full transition-all duration-300 ${idx === current
                                    ? "w-6 h-1.5 bg-[#c8a45c]"
                                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Counter */}
                {total > 1 && (
                    <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider px-3 py-1 rounded-full">
                        {current + 1} / {total}
                    </div>
                )}
            </div>
        );
    }

    // ─── DETAIL MODE (gallery with thumbnails + lightbox) ───
    return (
        <>
            <div className="space-y-4">
                {/* Main Image */}
                <div
                    className="relative aspect-[16/9] overflow-hidden cursor-pointer group/main border border-white/5"
                    onClick={() => openLightbox(current)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {images.map((img, idx) => {
                        const url = getImageUrl(img);
                        if (!url) return null;
                        return (
                            <div
                                key={idx}
                                className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                style={{
                                    opacity: idx === current ? 1 : 0,
                                    transform: idx === current ? "scale(1)" : "scale(1.05)",
                                    zIndex: idx === current ? 1 : 0,
                                }}
                            >
                                <Image
                                    src={url}
                                    alt={`${projectTitle} - ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>
                        );
                    })}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#c8a45c]/90 flex items-center justify-center text-black">
                            <ZoomIn size={24} />
                        </div>
                    </div>

                    {/* Prev/Next on main image */}
                    {total > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#c8a45c] hover:text-black transition-all duration-300"
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#c8a45c] hover:text-black transition-all duration-300"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white text-[12px] font-bold tracking-wider px-4 py-1.5 rounded-sm border border-white/10">
                        {current + 1} / {total}
                    </div>
                </div>

                {/* Thumbnail Strip */}
                {total > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                        {images.map((img, idx) => {
                            const url = getImageUrl(img);
                            if (!url) return null;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all duration-300 ${idx === current
                                        ? "ring-2 ring-[#c8a45c] opacity-100"
                                        : "opacity-40 hover:opacity-70 border border-white/10"
                                        }`}
                                >
                                    <Image
                                        src={url}
                                        alt={`Thumb ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ─── LIGHTBOX ─── */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close */}
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c8a45c] hover:text-black transition-all"
                    >
                        <X size={24} />
                    </button>

                    {/* Counter */}
                    <div className="absolute top-6 left-6 z-10 text-white/60 text-[14px] font-bold tracking-wider">
                        {lightboxIndex + 1} / {total}
                    </div>

                    {/* Image */}
                    <div
                        className="relative w-[90vw] h-[80vh] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {images.map((img, idx) => {
                            const url = getImageUrl(img);
                            if (!url) return null;
                            return (
                                <div
                                    key={idx}
                                    className="absolute inset-0 transition-all duration-500"
                                    style={{
                                        opacity: idx === lightboxIndex ? 1 : 0,
                                        transform: idx === lightboxIndex ? "scale(1)" : "scale(0.95)",
                                        pointerEvents: idx === lightboxIndex ? "auto" : "none",
                                    }}
                                >
                                    <Image
                                        src={url}
                                        alt={`${projectTitle} - ${idx + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="90vw"
                                        priority={idx === lightboxIndex}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Prev/Next */}
                    {total > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((p) => (p - 1 + total) % total);
                                }}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c8a45c] hover:text-black transition-all"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((p) => (p + 1) % total);
                                }}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c8a45c] hover:text-black transition-all"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    {/* Bottom Thumbnails in Lightbox */}
                    {total > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {images.map((img, idx) => {
                                const url = getImageUrl(img);
                                if (!url) return null;
                                return (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                                        className={`relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 overflow-hidden transition-all duration-300 ${idx === lightboxIndex
                                            ? "ring-2 ring-[#c8a45c] opacity-100"
                                            : "opacity-30 hover:opacity-60"
                                            }`}
                                    >
                                        <Image src={url} alt="" fill className="object-cover" sizes="64px" />
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
