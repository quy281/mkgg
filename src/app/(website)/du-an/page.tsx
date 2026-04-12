import ProjectList from "@/components/ProjectList";
import { projects as allProjects } from "@/data/site-data";

export const metadata = {
    title: "Dự Án Nội Thất Đã Hoàn Thành | MKG - Portfolio 200+ Công Trình",
    description: "Khám phá 200+ dự án nội thất đã hoàn thành bởi MKG: biệt thự, căn hộ, văn phòng, showroom. Xem hình ảnh thực tế before/after và đánh giá khách hàng.",
    alternates: { canonical: '/du-an' },
};

export default function DuAnPage() {
    const projects = allProjects.map(p => ({
        id: String(p.id),
        title: p.title,
        slug: p.slug,
        category: p.category,
        image: p.image,
        gallery: p.gallery ?? [] as string[],
        location: p.location ?? "",
        area: p.area ?? "",
        year: p.year ?? ""
    }));

    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="relative subpage-hero overflow-hidden" style={{ minHeight: "420px" }}>
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/projects/project-hero-bg.jpg')" }}>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        DỰ ÁN <span className="text-[#c8a45c] italic font-light">TIÊU BIỂU</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light">
                        Hàng trăm không gian sống tinh tế đã được <br className="hidden md:block" />
                        Minh Khuê Group kiến tạo.
                    </p>
                </div>
            </section>
            <ProjectList projects={projects} />
        </div>
    );
}
