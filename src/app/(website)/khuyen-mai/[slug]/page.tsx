import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronLeft, ShieldCheck, Clock, Truck, Star, CheckCircle2, ArrowRight, Users, Paintbrush, Award } from "lucide-react";
import type { Metadata } from "next";
import PricingCarousel from "@/components/PricingCarousel";

export const runtime = "edge";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Sơn Nước Jotun Trọn Gói – Giảm 45% | MKG.VN",
    description: "Dịch vụ sơn nước Jotun trọn gói cho chung cư, nhà phố. Giảm 45% tháng 3/2026. Bao gồm nhân công, sơn Jotun chính hãng, bảo hành 3 năm. Liên hệ 0817 424242.",
    keywords: ["sơn nước jotun", "sơn nhà trọn gói", "sơn căn hộ", "dịch vụ sơn nhà", "jotun chính hãng", "sơn nhà giá rẻ", "MKG"],
    openGraph: {
        title: "Sơn Nước Jotun Trọn Gói – Giảm 45% | MKG.VN",
        description: "Dịch vụ sơn nước Jotun trọn gói. Giảm 45% tháng 3/2026. Bao gồm nhân công, sơn Jotun chính hãng, bảo hành 3 năm.",
        images: ["/images/khuyen-mai/construction-team.png"],
    },
};

const processSteps = [
    { step: "01", title: "Khảo sát & Báo giá", desc: "Đội ngũ đến khảo sát thực tế, đo đạc diện tích, đánh giá tình trạng tường và tư vấn màu sơn phù hợp. Báo giá minh bạch, không phát sinh." },
    { step: "02", title: "Chuẩn bị thi công", desc: "Che chắn kỹ lưỡng toàn bộ đồ đạc, sàn nhà bằng bạt chuyên dụng. Xử lý bề mặt: bả matit, xử lý nứt, bong tróc." },
    { step: "03", title: "Sơn lót & Sơn phủ", desc: "Sơn lót Jotun chống kiềm 1 lớp. Sơn phủ Jotun Essence hoặc Jotun Majestic 2 lớp. Đảm bảo màu sắc đồng đều, bám dính lâu dài." },
    { step: "04", title: "Nghiệm thu & Bàn giao", desc: "Vệ sinh sạch sẽ toàn bộ khu vực thi công. Khách hàng nghiệm thu, ký biên bản bàn giao. Bắt đầu tính bảo hành 3 năm." },
];

const galleryImages = [
    { src: "/images/projects/project-saigon-south.jpg", alt: "Căn hộ Saigon South – Hoàn thiện sơn" },
    { src: "/images/projects/project-sunrise-city.jpg", alt: "Sunrise City View – Sau khi sơn mới" },
    { src: "/images/khuyen-mai/construction-team.png", alt: "Đội thợ sơn chuyên nghiệp MKG" },
    { src: "/images/khuyen-mai/before-after.png", alt: "Trước và sau khi sơn lại" },
    { src: "/images/projects/project-him-lam.jpg", alt: "Him Lam Riverside – Hoàn thiện nội thất" },
    { src: "/images/khuyen-mai/paint-materials.png", alt: "Sơn Jotun chính hãng & dụng cụ" },
];

export default function SonNuocJotunPage() {
    return (
        <div className="bg-[#0a0a0a]">

            {/* ── HERO ── */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/khuyen-mai/construction-team.png" alt="Đội thi công sơn nước MKG" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 section-container py-32">
                    <Link href="/khuyen-mai" className="inline-flex items-center gap-2 text-white/40 hover:text-[#c8a45c] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 transition-colors">
                        <ChevronLeft size={14} /> KHUYẾN MÃI
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-[#c8a45c]" />
                        <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">ƯU ĐÃI GIẢM 45% — Tháng 3/2026</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                        SƠN NƯỚC <span className="italic font-light text-[#c8a45c]">JOTUN</span>
                        <br />TRỌN GÓI
                    </h1>

                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                        Làm mới căn hộ chỉ từ <strong className="text-[#c8a45c]">5 triệu đồng</strong> — Sơn Jotun chính hãng 100%, đội thợ 5+ năm kinh nghiệm, bảo hành 3 năm. Hoàn thành trong 2-3 ngày, không cần dọn nhà.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="tel:0817424242" className="inline-flex items-center gap-2 bg-[#c8a45c] text-black px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300">
                            <Phone size={16} /> GỌI NGAY 0817 424242
                        </a>
                        <a href="#bang-gia" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300">
                            XEM BẢNG GIÁ <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                        {[
                            { icon: <ShieldCheck size={18} />, text: "Bảo hành 3 năm" },
                            { icon: <Clock size={18} />, text: "2-3 ngày hoàn thành" },
                            { icon: <Truck size={18} />, text: "Thợ mang đủ dụng cụ" },
                            { icon: <Star size={18} />, text: "Jotun chính hãng 100%" },
                        ].map((item) => (
                            <div key={item.text} className="flex items-center gap-2 text-[12px] text-white/50">
                                <span className="text-[#c8a45c]">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <section className="bg-[#111] border-y border-white/5">
                <div className="section-container py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "500+", label: "Căn hộ đã sơn" },
                            { number: "98%", label: "Khách hài lòng" },
                            { number: "3 năm", label: "Bảo hành" },
                            { number: "2-3 ngày", label: "Hoàn thành" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl md:text-4xl font-black text-[#c8a45c]" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.number}</p>
                                <p className="text-white/40 text-[12px] uppercase tracking-wider mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEFORE / AFTER ── */}
            <section className="py-24 lg:py-32 bg-[#0a0a0a]">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c8a45c]" />
                            <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">KẾT QUẢ THỰC TẾ</span>
                            <div className="w-8 h-px bg-[#c8a45c]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            TRƯỚC & SAU <span className="italic font-light text-[#c8a45c]">KHI SƠN</span>
                        </h2>
                        <p className="text-white/40 text-[14px] max-w-lg mx-auto">
                            Xem sự thay đổi rõ rệt chỉ sau 2-3 ngày thi công. Tường cũ ố vàng, bong tróc trở nên sáng đẹp như mới.
                        </p>
                    </div>
                    <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-white/5">
                        <Image src="/images/khuyen-mai/before-after.png" alt="Trước và sau khi sơn lại căn hộ với Jotun" fill className="object-cover" sizes="100vw" />
                    </div>
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className="py-24 lg:py-32 bg-[#111]">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c8a45c]" />
                            <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">HÌNH ẢNH THỰC TẾ</span>
                            <div className="w-8 h-px bg-[#c8a45c]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            CÔNG TRÌNH & <span className="italic font-light text-[#c8a45c]">ĐỘI THI CÔNG</span>
                        </h2>
                        <p className="text-white/40 text-[14px] max-w-lg mx-auto">
                            Đội thợ chuyên nghiệp, trang thiết bị đầy đủ, thi công cẩn thận từng chi tiết.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {galleryImages.map((img, i) => (
                            <div key={i} className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                                <div className={`relative ${i === 0 ? "aspect-[4/3]" : "aspect-[3/2]"} overflow-hidden`}>
                                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-[12px] font-medium">{img.alt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY JOTUN ── */}
            <section className="py-24 lg:py-32 bg-[#0a0a0a]">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image src="/images/khuyen-mai/paint-materials.png" alt="Sơn Jotun chính hãng" fill className="object-cover" sizes="50vw" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-px bg-[#c8a45c]" />
                                <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">TẠI SAO CHỌN JOTUN?</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                SƠN JOTUN <span className="italic font-light text-[#c8a45c]">CHÍNH HÃNG</span> 100%
                            </h2>
                            <p className="text-white/50 text-[14px] leading-relaxed mb-8">
                                Jotun là thương hiệu sơn hàng đầu từ Na Uy với hơn 100 năm kinh nghiệm. Chúng tôi cam kết chỉ sử dụng sơn Jotun chính hãng, có tem xác thực, đảm bảo chất lượng và an toàn sức khỏe cho gia đình bạn.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Kháng khuẩn, chống nấm mốc",
                                    "Che phủ vết nứt nhỏ",
                                    "Màu sắc bền đẹp 5-7 năm",
                                    "An toàn cho trẻ em & người lớn tuổi",
                                    "Hàng trăm mã màu phù hợp mọi phong cách",
                                    "Khô nhanh, ít mùi, thi công dễ dàng",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-[#c8a45c] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/60 text-[14px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUY TRÌNH ── */}
            <section className="py-24 lg:py-32 bg-[#111]">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c8a45c]" />
                            <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">CHUYÊN NGHIỆP</span>
                            <div className="w-8 h-px bg-[#c8a45c]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            QUY TRÌNH <span className="italic font-light text-[#c8a45c]">THI CÔNG</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((s) => (
                            <div key={s.step} className="border border-white/5 p-6 hover:border-[#c8a45c]/20 transition-all group">
                                <span className="text-5xl font-black text-[#c8a45c]/20 block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{s.step}</span>
                                <h3 className="text-white font-bold text-[15px] mb-3 group-hover:text-[#c8a45c] transition-colors">{s.title}</h3>
                                <p className="text-white/40 text-[13px] leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BẢNG GIÁ — CAROUSEL ── */}
            <section id="bang-gia" className="py-24 lg:py-32 bg-[#0a0a0a] scroll-mt-24 overflow-hidden">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c8a45c]" />
                            <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">BẢNG GIÁ TRỌN GÓI</span>
                            <div className="w-8 h-px bg-[#c8a45c]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            GIÁ ĐÃ <span className="italic font-light text-[#c8a45c]">GIẢM 45%</span>
                        </h2>
                        <p className="text-white/40 text-[14px] max-w-lg mx-auto">
                            Giá trọn gói bao gồm sơn Jotun, nhân công, vật liệu phụ, che chắn, vệ sinh và bảo hành. Không phát sinh.
                        </p>
                    </div>

                    <PricingCarousel />

                    <p className="text-center text-white/20 text-[12px] mt-10">
                        * Giá có thể thay đổi tùy tình trạng bề mặt tường. Liên hệ để khảo sát và báo giá chính xác.
                    </p>
                </div>
            </section>

            {/* ── CAM KẾT ── */}
            <section className="py-24 lg:py-32 bg-[#111]">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">TẠI SAO CHỌN MKG?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            CAM KẾT <span className="italic font-light text-[#c8a45c]">CHẤT LƯỢNG</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Paintbrush size={28} />, title: "Sơn Jotun 100% chính hãng", desc: "Cam kết sử dụng sơn Jotun có tem xác thực. Khách hàng kiểm tra hàng trước khi thi công." },
                            { icon: <Users size={28} />, title: "Đội thợ chuyên nghiệp", desc: "Thợ sơn được đào tạo bài bản, 5+ năm kinh nghiệm. Tác phong gọn gàng, lịch sự." },
                            { icon: <ShieldCheck size={28} />, title: "Bảo hành 3 năm", desc: "Bảo hành miễn phí mọi vấn đề về sơn: bong tróc, nấm mốc, phai màu trong 3 năm." },
                            { icon: <Clock size={28} />, title: "Hoàn thành nhanh chóng", desc: "Thi công trong 2-3 ngày làm việc. Không ảnh hưởng đến sinh hoạt hàng ngày." },
                            { icon: <Truck size={28} />, title: "Che chắn cẩn thận", desc: "Chúng tôi mang bạt, băng keo, dụng cụ. Che chắn toàn bộ đồ đạc, sàn nhà kỹ lưỡng." },
                            { icon: <Award size={28} />, title: "Tư vấn màu miễn phí", desc: "Quét mẫu thử tại nhà. Tư vấn phối màu phù hợp phong thủy và phong cách sống." },
                        ].map((item) => (
                            <div key={item.title} className="border border-white/5 p-6 hover:border-[#c8a45c]/20 transition-all group">
                                <div className="text-[#c8a45c] mb-4">{item.icon}</div>
                                <h4 className="text-white font-bold text-[15px] mb-2 group-hover:text-[#c8a45c] transition-colors">{item.title}</h4>
                                <p className="text-white/40 text-[13px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-24 lg:py-32 bg-[#0a0a0a]">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c8a45c]" />
                            <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.3em] uppercase">KHÁCH HÀNG NÓI GÌ?</span>
                            <div className="w-8 h-px bg-[#c8a45c]" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            ĐÁNH GIÁ <span className="italic font-light text-[#c8a45c]">THỰC TẾ</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Chị Hương", location: "Sunrise City, Q.7", text: "Thợ đến đúng giờ, che chắn kỹ lưỡng. Sơn xong rất đẹp, mùi ít hẳn. Sẽ giới thiệu bạn bè." },
                            { name: "Anh Minh", location: "Saigon South, Nhà Bè", text: "Lần đầu sơn nhà mà không cần dọn đồ. Đội MKG làm sạch sẽ lắm. Giá hợp lý, chất lượng tốt." },
                            { name: "Chị Lan", location: "Him Lam, Q.7", text: "Tường nhà cũ bong tróc nhiều, tưởng phải tốn thêm chi phí. Nhưng MKG xử lý hết, giá như báo từ đầu." },
                        ].map((t) => (
                            <div key={t.name} className="border border-white/5 p-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#c8a45c] fill-[#c8a45c]" />)}
                                </div>
                                <p className="text-white/60 text-[13px] leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                                <div>
                                    <p className="text-white font-bold text-[14px]">{t.name}</p>
                                    <p className="text-white/30 text-[12px]">{t.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="py-20 bg-[#111] border-t border-[#c8a45c]/10">
                <div className="section-container text-center">
                    <p className="text-[#c8a45c] text-[12px] font-bold tracking-[0.3em] uppercase mb-3">KHUYẾN MÃI CÓ HẠN — CHỈ CÒN VÀI NGÀY</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Gọi ngay để <span className="italic font-light text-[#c8a45c]">đặt lịch khảo sát</span> miễn phí
                    </h2>
                    <p className="text-white/50 text-[14px] mb-8 max-w-lg mx-auto">
                        Áp dụng cho 30 khách hàng đầu tiên trong tháng. Khảo sát tại nhà hoàn toàn miễn phí, không ràng buộc.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:0817424242" className="inline-flex items-center gap-2 bg-[#c8a45c] text-black px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-white transition-all duration-300">
                            <Phone size={18} /> 0817 424242
                        </a>
                        <a href="tel:02873032879" className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300">
                            028 7303 2879
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-24 lg:py-32 bg-[#0a0a0a]">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            CÂU HỎI <span className="italic font-light text-[#c8a45c]">THƯỜNG GẶP</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { q: "Tôi có cần dọn đồ đạc không?", a: "Không cần. Đội thi công MKG sẽ che chắn toàn bộ đồ đạc, sàn nhà bằng bạt chuyên dụng. Sau khi hoàn thành, chúng tôi dọn dẹp sạch sẽ." },
                            { q: "Sơn Jotun bao lâu thì khô? Có mùi không?", a: "Sơn Jotun khô mặt sau 30 phút, khô hoàn toàn sau 2 giờ. Dòng Jotun Essence ít mùi, an toàn cho trẻ em và người lớn tuổi." },
                            { q: "Bảo hành bao gồm những gì?", a: "Bảo hành 3 năm cho mọi vấn đề do lỗi thi công: bong tróc, phồng rộp, phai màu. Chúng tôi sẽ đến sửa chữa miễn phí trong thời gian bảo hành." },
                            { q: "Có thêm chi phí phát sinh không?", a: "Giá báo là giá trọn gói. Trường hợp tường bị hư hỏng nặng (ẩm, thấm) cần xử lý thêm sẽ được thông báo và đồng ý trước khi thi công." },
                            { q: "Tôi muốn thử màu trước, có được không?", a: "Có. Chúng tôi quét mẫu thử miễn phí tại nhà bạn. Bạn xem trực tiếp trên tường trước khi quyết định." },
                        ].map((faq) => (
                            <details key={faq.q} className="group border border-white/5 hover:border-white/10 transition-colors">
                                <summary className="cursor-pointer p-6 text-white font-bold text-[14px] flex items-center justify-between">
                                    {faq.q}
                                    <span className="text-[#c8a45c] text-xl group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-white/50 text-[13px] leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
