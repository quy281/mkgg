"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, Sparkles } from "lucide-react";

const promotions = [
    {
        id: "son-nuoc-jotun",
        title: "SƠN NƯỚC JOTUN TRỌN GÓI",
        subtitle: "Sơn lại căn hộ với sơn Jotun chính hãng",
        discount: "45%",
        priceFrom: "5.000.000",
        image: "/images/projects/project-nha-pho-long-an.jpg",
        tags: ["Sơn Jotun", "Trọn gói", "Bảo hành 3 năm"],
        description: "Ưu đãi sơn nước Jotun trọn gói cho căn hộ 1-3 phòng ngủ. Bao gồm nhân công, vật liệu, che chắn và vệ sinh.",
        validUntil: "31/03/2026",
    },
    {
        id: "thiet-ke-noi-that",
        title: "THIẾT KẾ NỘI THẤT 3D",
        subtitle: "Thiết kế chuyên nghiệp, render 3D chân thực",
        discount: "30%",
        priceFrom: "15.000.000",
        image: "/images/projects/project-sunrise-city.jpg",
        tags: ["Thiết kế 3D", "Tư vấn miễn phí", "2 phương án"],
        description: "Giảm 30% phí thiết kế nội thất 3D cho chung cư, nhà phố. Bao gồm 2 phương án thiết kế và 3 lần chỉnh sửa.",
        validUntil: "31/03/2026",
    },
    {
        id: "thi-cong-tron-goi",
        title: "THI CÔNG NỘI THẤT TRỌN GÓI",
        subtitle: "Thi công hoàn thiện chuẩn thiết kế",
        discount: "20%",
        priceFrom: "80.000.000",
        image: "/images/projects/project-him-lam.jpg",
        tags: ["Thi công trọn gói", "Gỗ nhập khẩu", "Bảo hành 5 năm"],
        description: "Ưu đãi thi công nội thất trọn gói từ thiết kế, sản xuất đến lắp đặt. Cam kết chất lượng và tiến độ.",
        validUntil: "31/03/2026",
    },
    {
        id: "combo-noi-that-thong-minh",
        title: "COMBO NỘI THẤT THÔNG MINH",
        subtitle: "Giải pháp Modi cho căn hộ nhỏ",
        discount: "35%",
        priceFrom: "25.000.000",
        image: "/images/projects/project-saigon-south.jpg",
        tags: ["Nội thất thông minh", "Modi", "Tiện nghi"],
        description: "Combo nội thất thông minh Modi: giường thông minh, bàn gắn tường, kệ đa năng. Tối ưu không gian sống.",
        validUntil: "31/03/2026",
    },
];

export default function KhuyenMaiContent() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen">

            {/* ── HERO ── */}
            <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/projects/project-sunrise-city.jpg"
                        alt="Khuyến mãi thiết kế nội thất MKG - Ưu đãi đặc biệt"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
                </div>

                <div className="relative z-10 section-container text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-px bg-[#c8a45c]" />
                        <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">ƯU ĐÃI ĐẶC BIỆT</span>
                        <div className="w-8 h-px bg-[#c8a45c]" />
                    </div>

                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        KHUYẾN MÃI <span className="italic font-light text-[#c8a45c]">THÁNG 3</span>
                    </h1>

                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Chương trình ưu đãi hấp dẫn dành cho khách hàng. Chọn gói phù hợp và liên hệ ngay để nhận báo giá chi tiết.
                    </p>
                </div>
            </section>

            {/* ── PROMOTIONS GRID ── */}
            <section className="py-16 lg:py-24 bg-[#111]">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {promotions.map((promo) => (
                            <Link
                                key={promo.id}
                                href={`/khuyen-mai/${promo.id}`}
                                className="group block border border-white/5 hover:border-[#c8a45c]/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative h-[240px] lg:h-[280px] overflow-hidden">
                                    <Image
                                        src={promo.image}
                                        alt={`Khuyến mãi ${promo.title} - MKG`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />

                                    {/* Discount Badge */}
                                    <div className="absolute top-4 right-4 px-4 py-2 border border-[#c8a45c]/50 bg-[#0a0a0a]/80 backdrop-blur-sm">
                                        <span className="text-[#c8a45c] text-[20px] font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            -{promo.discount}
                                        </span>
                                    </div>

                                    {/* Valid Until */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/50 text-[11px]">
                                        <Tag size={12} className="text-[#c8a45c]" />
                                        <span>Đến {promo.validUntil}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8 bg-[#0a0a0a]">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {promo.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] font-bold tracking-wider text-[#c8a45c]/70 uppercase border border-[#c8a45c]/20 px-2.5 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3
                                        className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#c8a45c] transition-colors uppercase"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {promo.title}
                                    </h3>

                                    <p className="text-white/40 text-[13px] mb-4">{promo.subtitle}</p>

                                    <p className="text-white/50 text-[13px] leading-relaxed mb-6 line-clamp-2">
                                        {promo.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-white/30 text-[11px] uppercase tracking-wider">Từ</span>
                                            <span className="text-[#c8a45c] font-bold text-xl ml-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                {promo.priceFrom}đ
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/40 group-hover:text-[#c8a45c] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">
                                            <span>XEM CHI TIẾT</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="py-20 px-6 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <Sparkles size={28} className="text-[#c8a45c] mx-auto mb-6" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Cần tư vấn <span className="italic font-light text-[#c8a45c]">thêm?</span>
                    </h2>
                    <p className="text-white/50 text-[14px] mb-8">
                        Liên hệ hotline để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:0817424242" className="inline-flex items-center gap-2 bg-[#c8a45c] text-black px-10 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300">
                            GỌI 0817 424242
                        </a>
                        <a href="tel:02873032879" className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300">
                            028 7303 2879
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
