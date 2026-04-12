import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Tag, ArrowRight, Ruler, Calendar as CalendarIcon } from "lucide-react";
import type { Metadata } from "next";
import { projects as allProjects } from "@/data/site-data";
import ProjectGallerySlider from "@/components/ProjectGallerySlider";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = allProjects.find((p) => p.slug === slug);
    if (!project) return { title: "Không tìm thấy" };
    return {
        title: `${project.title} | MINH KHUÊ GROUP`,
        description: `Dự án ${project.category}: ${project.title} – Thiết kế và thi công nội thất cao cấp bởi Minh Khuê Group.`,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = allProjects.find((p) => p.slug === slug);
    if (!project) notFound();

    const galleryUrls: string[] = project.gallery || [];
    const relatedProjects = allProjects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);

    return (
        <div className="page-enter bg-background">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                <div className="absolute top-6 left-6 z-10 hidden md:block">
                    <Link href="/du-an" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-white hover:text-black bg-white/10 hover:bg-primary backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full transition-all duration-300">
                        <ArrowLeft size={16} /> Tất cả dự án
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 py-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-sm bg-[#c8a45c]/20 text-[#c8a45c] border border-[#c8a45c]/30 backdrop-blur-md mb-6">
                            <Tag size={12} className="text-[#c8a45c]" /> {project.category || "Nhà phố"}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 tracking-tight max-w-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {project.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-[#111] border border-white/5 p-8 relative sticky top-24">
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c8a45c]/40" />
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c8a45c]/40" />
                                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                                    <div className="w-8 h-px bg-[#c8a45c]" />
                                    <span className="text-[#c8a45c] text-[10px] font-bold tracking-[0.3em] uppercase">THÔNG TIN</span>
                                </div>
                                <div className="space-y-6">
                                    <div><p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-2">LOẠI HÌNH</p><p className="text-white text-[15px] font-medium">{project.category}</p></div>
                                    {project.location && <div><p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-2">ĐỊA ĐIỂM</p><p className="text-white text-[15px] font-medium flex items-center gap-2"><MapPin size={14} className="text-[#c8a45c]" />{project.location}</p></div>}
                                    {project.area && <div><p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-2">DIỆN TÍCH</p><p className="text-white text-[15px] font-medium flex items-center gap-2"><Ruler size={14} className="text-[#c8a45c]" />{project.area}</p></div>}
                                    {project.year && <div><p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-2">NĂM HOÀN THÀNH</p><p className="text-white text-[15px] font-medium flex items-center gap-2"><CalendarIcon size={14} className="text-[#c8a45c]" />{project.year}</p></div>}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <Link href="/lien-he" className="w-full inline-flex justify-center items-center gap-2 bg-[#c8a45c] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 hover:bg-white transition-all duration-300">
                                        TƯ VẤN MIỄN PHÍ
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#111] border border-white/5 p-8 md:p-12 relative">
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c8a45c]/40" />
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c8a45c]/40" />
                                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                                    <div className="w-2 h-2 bg-[#c8a45c]" />
                                    <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.2em] uppercase">TỔNG QUAN DỰ ÁN</span>
                                </div>
                                <p className="text-white/60 leading-relaxed text-[15px]">{project.description || "Chi tiết dự án đang được cập nhật."}</p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    {galleryUrls.length > 0 && (
                        <div className="bg-[#111] border border-white/5 p-8 md:p-12 relative">
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c8a45c]/40" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c8a45c]/40" />
                            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                                <div className="w-2 h-2 bg-[#c8a45c]" />
                                <span className="text-[#c8a45c] text-[11px] font-bold tracking-[0.2em] uppercase">CHI TIẾT KIẾN TRÚC</span>
                                <div className="flex-1 h-px bg-white/5" />
                                <span className="text-white/20 text-[11px] tracking-wider">{galleryUrls.length} ảnh</span>
                            </div>
                            <ProjectGallerySlider images={galleryUrls} projectTitle={project.title} mode="detail" />
                        </div>
                    )}

                    {/* CTA */}
                    <div className="relative bg-[#111] border border-[#c8a45c]/20 p-12 lg:p-16 text-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#c8a45c]/50" />
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#c8a45c]/50" />
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                                BẠN MUỐN CÓ <span className="italic font-light text-[#c8a45c]">KHÔNG GIAN</span> TƯƠNG TỰ?
                            </h3>
                            <p className="text-white/50 text-[14px] mb-10 max-w-xl mx-auto leading-relaxed">
                                Để lại thông tin liên hệ, đội ngũ kỹ sư và kiến trúc sư của chúng tôi sẽ tư vấn phù hợp nhất với phong cách và ngân sách của bạn.
                            </p>
                            <Link href="/lien-he" className="inline-flex justify-center items-center gap-2 bg-[#c8a45c] text-black text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-all duration-300">
                                <MapPin size={16} /> NHẬN TƯ VẤN MIỄN PHÍ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            {relatedProjects.length > 0 && (
                <section className="py-24 px-6 bg-[#0e0e0e] border-t border-[#c8a45c]/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                CÁC CÔNG TRÌNH <br /><span className="italic font-light text-[#c8a45c]">TIÊU BIỂU</span> KHÁC
                            </h2>
                            <Link href="/du-an" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#c8a45c] hover:border-[#c8a45c] hover:text-black transition-all">
                                XEM TẤT CẢ
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProjects.map((rp) => (
                                <Link key={rp.slug} href={`/du-an/${rp.slug}`} className="group block relative aspect-[4/5] overflow-hidden bg-[#141414] border border-white/5">
                                    <Image src={rp.image} alt={rp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                                    <span className="absolute top-6 left-6 inline-flex px-4 py-1.5 font-bold text-[10px] uppercase tracking-widest bg-[#c8a45c] text-black">{rp.category}</span>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                        <h4 className="text-2xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{rp.title}</h4>
                                        <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#c8a45c] uppercase tracking-widest">KHÁM PHÁ <ArrowRight size={14} /></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
