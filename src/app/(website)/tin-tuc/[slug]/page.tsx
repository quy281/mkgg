import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/site-data";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Không tìm thấy" };
    return {
        title: `${post.title} | Blog MKG`,
        description: post.excerpt || "Đọc bài viết trên Blog của Minh Khuê Group.",
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const relatedPosts = blogPosts
        .filter((p) => p.slug !== slug && p.category === post.category)
        .slice(0, 3);

    return (
        <div className="page-enter bg-background">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                {post.featuredImage ? (
                    <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority sizes="100vw" />
                ) : (
                    <div className="absolute inset-0 bg-[#141414] flex items-center justify-center">
                        <div className="text-[#c8a45c]/20 text-9xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>MKG</div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
                <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-16 max-w-4xl mx-auto">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c8a45c] mb-4">{post.category || "Tin tức"}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-6 text-sm text-white/50">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#c8a45c]" />
                            {post.date ? new Date(post.date).toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" }) : "Mới nhất"}
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-full">
                        {post.excerpt && (
                            <div className="mb-10 p-6 md:p-8 rounded-2xl bg-[#c8a45c]/5 border border-[#c8a45c]/10">
                                <p className="text-[#c8a45c]/80 text-lg md:text-xl font-medium leading-relaxed italic text-center">&quot;{post.excerpt}&quot;</p>
                            </div>
                        )}
                        <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-[#c8a45c] max-w-none">
                            <p className="text-white/60 leading-relaxed">Nội dung bài viết đang được cập nhật. Vui lòng quay lại sau.</p>
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c8a45c]/50 to-transparent my-16" />
                        <div className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between text-center sm:text-left border border-white/5 bg-white/5">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">Bạn cần tư vấn thiết kế?</h4>
                                <p className="text-[13px] text-white/50 max-w-md">Liên hệ Minh Khuê Group ngay hôm nay để nhận báo giá và khảo sát miễn phí.</p>
                            </div>
                            <Link href="/lien-he" className="flex-shrink-0 px-8 py-3 bg-[#c8a45c] text-black font-bold uppercase tracking-wider text-[13px] rounded-full hover:bg-white transition-colors">
                                Liên hệ ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
                <section className="py-24 px-6 bg-[#0e0e0e] border-t border-[#c8a45c]/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[#c8a45c] text-[12px] font-bold tracking-[0.2em] uppercase">BÀI VIẾT KHÁC</span>
                                    <div className="w-12 h-px bg-[#c8a45c]/50" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    CÓ THỂ BẠN <br /><span className="italic font-light text-[#c8a45c]">QUAN TÂM</span>
                                </h2>
                            </div>
                            <Link href="/tin-tuc" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#c8a45c] hover:border-[#c8a45c] hover:text-black transition-all">
                                XEM TẤT CẢ
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((rp) => (
                                <Link key={rp.slug} href={`/tin-tuc/${rp.slug}`} className="group flex flex-col h-full">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-3xl rounded-bl-3xl mb-6">
                                        {rp.featuredImage ? (
                                            <Image src={rp.featuredImage} alt={rp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, 33vw" />
                                        ) : (
                                            <div className="absolute inset-0 bg-[#141414] flex items-center justify-center border border-white/5">
                                                <div className="text-[#c8a45c]/20 text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>MKG</div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col flex-1 pl-2">
                                        <span className="text-[12px] text-[#c8a45c] font-bold uppercase tracking-wider mb-2">{rp.category}</span>
                                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#c8a45c] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{rp.title}</h3>
                                        <p className="text-[14px] text-white/50 mb-6 line-clamp-2 font-light">{rp.excerpt}</p>
                                        <div className="mt-auto flex items-center gap-2 text-[#c8a45c] text-[11px] font-bold tracking-[0.2em] uppercase">
                                            <span>ĐỌC THÊM</span><ArrowRight size={14} />
                                        </div>
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
