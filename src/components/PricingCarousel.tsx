"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight, Check } from "lucide-react";

const packages = [
    {
        name: "1 PHÒNG NGỦ", area: "~45m²", originalPrice: "9.100.000", price: "5.000.000", popular: false,
        image: "/images/projects/project-sunrise-city.jpg",
        features: ["Sơn trần + tường", "Sơn lót Jotun chống kiềm", "Sơn phủ Jotun 2 lớp", "Xử lý nứt nhỏ, bả matit", "Che chắn đồ đạc cẩn thận", "Dọn dẹp vệ sinh sau thi công"],
    },
    {
        name: "2 PHÒNG NGỦ", area: "~65m²", originalPrice: "13.600.000", price: "7.500.000", popular: true,
        image: "/images/projects/project-saigon-south.jpg",
        features: ["Sơn trần + tường toàn bộ", "Sơn lót Jotun chống kiềm", "Sơn phủ Jotun Essence 2 lớp", "Xử lý nứt, bong tróc", "Bả matit toàn bộ bề mặt", "Che chắn & vệ sinh sau thi công", "Tư vấn phối màu miễn phí"],
    },
    {
        name: "3 PHÒNG NGỦ", area: "~85m²", originalPrice: "19.100.000", price: "10.500.000", popular: false,
        image: "/images/projects/project-him-lam.jpg",
        features: ["Sơn trần + tường toàn bộ", "Sơn lót Jotun cao cấp", "Sơn phủ Jotun Essence 2 lớp", "Xử lý toàn bộ khuyết điểm", "Bả matit chuyên nghiệp", "Che chắn & vệ sinh hoàn hảo", "Tư vấn phối màu miễn phí", "Bảo hành 3 năm"],
    },
];

export default function PricingCarousel() {
    const [activeSlide, setActiveSlide] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % packages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 + packages.length) % packages.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-[#111] border border-white/10 hover:border-[#c8a45c]/50 flex items-center justify-center transition-all group">
                <ChevronLeft size={20} className="text-white/50 group-hover:text-[#c8a45c]" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-[#111] border border-white/10 hover:border-[#c8a45c]/50 flex items-center justify-center transition-all group">
                <ChevronRight size={20} className="text-white/50 group-hover:text-[#c8a45c]" />
            </button>

            {/* Slides */}
            <div className="relative">
                {packages.map((pkg, index) => (
                    <div
                        key={pkg.name}
                        className={`transition-all duration-700 ${activeSlide === index ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"}`}
                    >
                        <div className={`grid md:grid-cols-2 overflow-hidden border ${pkg.popular ? "border-[#c8a45c]/40 shadow-2xl shadow-[#c8a45c]/10" : "border-white/10"}`}>
                            {/* Package Image */}
                            <div className="relative h-[280px] md:h-auto">
                                <Image src={pkg.image} alt={pkg.name} fill className="object-cover" sizes="50vw" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] hidden md:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden" />

                                <div className="absolute top-6 left-6 px-4 py-2 bg-[#c8a45c]">
                                    <span className="text-black text-[16px] font-black tracking-wide">-45%</span>
                                </div>

                                {pkg.popular && (
                                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20">
                                        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Phổ biến nhất</span>
                                    </div>
                                )}
                            </div>

                            {/* Package Content */}
                            <div className="bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-[12px] font-bold tracking-[0.3em] text-[#c8a45c] uppercase mb-1">{pkg.name}</h3>
                                <p className="text-white/30 text-[12px] mb-6">Diện tích {pkg.area}</p>

                                <div className="flex items-baseline gap-4 mb-2">
                                    <p className="text-white/30 text-[16px] line-through">{pkg.originalPrice}đ</p>
                                </div>
                                <p className="text-5xl md:text-6xl font-black text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {pkg.price}<span className="text-white/30 text-[16px] font-normal">đ</span>
                                </p>

                                <div className="space-y-3 mb-8">
                                    {pkg.features.map((f) => (
                                        <div key={f} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#c8a45c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check size={12} className="text-[#c8a45c]" />
                                            </div>
                                            <span className="text-white/60 text-[13px]">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="tel:0817424242" className="inline-flex items-center justify-center gap-2 bg-[#c8a45c] text-black py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 w-full">
                                    <Phone size={16} /> GỌI ĐẶT LỊCH NGAY
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center justify-center gap-3 mt-8">
                {packages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`transition-all duration-300 ${activeSlide === i ? "w-10 h-1 bg-[#c8a45c]" : "w-6 h-1 bg-white/15 hover:bg-white/30"}`}
                    />
                ))}
            </div>

            {/* Quick nav labels */}
            <div className="flex items-center justify-center gap-6 mt-4">
                {packages.map((pkg, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${activeSlide === i ? "text-[#c8a45c]" : "text-white/20 hover:text-white/40"}`}
                    >
                        {pkg.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
